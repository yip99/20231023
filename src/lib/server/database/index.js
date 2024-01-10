import sqlite3 from 'sqlite3';
import bcrypt from 'bcrypt';
import { database_path } from '$env/static/private';
const db = new sqlite3.Database(database_path);

export function getArticles({ query = null, tag = null, limit = 20, offset = 0, status = ['public'] } = {}) {
    return new Promise((resolve, reject) => {
        let promises = [];
        let conditions = [];
        promises.push(
            new Promise((resolve, reject) => {
                let sql = `
                    SELECT article.*,
                    '["' || (
                        SELECT group_concat(tag.name, '","')
                        FROM article_tag
                        LEFT JOIN tag ON article_tag.tag_id = tag.id
                        WHERE article_tag.article_id = article.id
                    ) || '"]' AS tag,
                    '["' || (
                        SELECT group_concat(author.name, '","')
                        FROM article_author
                        LEFT JOIN author ON article_author.author_id = author.id
                        WHERE article_author.article_id = article.id
                    ) || '"]' AS author
                    FROM article`;
                if (tag) {
                    conditions.push(`
                    article.id IN 
                    (
                        SELECT 
                        article_tag.article_id 
                        FROM article_tag 
                        WHERE article_tag.tag_id IN 
                        (
                            SELECT tag.id 
                            FROM tag 
                            WHERE tag.name IN ('${tag.join("', '")}')
                        )
                    )`);
                }
                if (query) {
                    query = query.split('').map((char) => {
                        return char === "'" ? "\\''" : `\\${char}`;
                    }).join('');
                    conditions.push(`(title LIKE '%${query}%' ESCAPE '\\' OR search_content LIKE '%${query}%' ESCAPE '\\')`);
                }
                conditions.push(`article.status IN ('${status.join(`', '`)}')`);
                if (conditions.length > 0) {
                    sql += ' WHERE ';
                    sql += conditions.join(' AND ');
                }
                sql += ` Limit ${offset}, ${limit}`;
                console.log('sql: ', sql.replace('\n', ''));
                db.all(sql, (error, articles) => {
                    if (error) {
                        console.log(error);
                        reject(error);
                        return;
                    }
                    for (let i = 0; i < articles?.length; i++) {
                        articles[i].tag = JSON.parse(articles[i].tag);
                        articles[i].author = JSON.parse(articles[i].author);
                    }
                    const size = new TextEncoder().encode(JSON.stringify(articles)).length;
                    console.log(`articles size: ${Math.round(((size / 1024) + Number.EPSILON) * 100) / 100} kb (${articles.length})`);
                    resolve(articles);
                }
                );
            })
        );
        promises.push(
            new Promise((resolve, reject) => {
                let sql = `SELECT count(*) FROM article`;
                if (conditions.length > 0) {
                    sql += ' WHERE ';
                    sql += conditions.join(' AND ');
                }
                db.get(sql,
                    (error, result) => {
                        if (error) {
                            console.log(error);
                            reject(error);
                            return;
                        }
                        resolve(result['count(*)']);
                    }
                );
            })
        );
        Promise.all(promises).then(([articles, articleCount]) => {
            resolve({ articles, articleCount });
        })
    });
}

export function getArticleBySlug(slug) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT article.*,
        '["' || (
        SELECT group_concat(tag.name, '","')
        FROM article_tag
        LEFT JOIN tag ON article_tag.tag_id = tag.id
        WHERE article_tag.article_id = article.id
        ) || '"]' AS tag,
        '["' || (
        SELECT group_concat(author.name, '","')
        FROM article_author
        LEFT JOIN author ON article_author.author_id = author.id
        WHERE article_author.article_id = article.id
        ) || '"]' AS author
        FROM article
        WHERE article.slug = '${slug}'
        GROUP BY article.id;`,
            (error, article) => {
                if (error) {
                    console.log(error);
                }
                if (!article) {
                    console.log('no article');
                    reject();
                    return;
                }
                article.tag = JSON.parse(article.tag);
                article.author = JSON.parse(article.author);
                resolve(article);
            }
        );
    });
}

export function dbRun(statement) {
    return new Promise((resolve, reject) => {
        let promises = [];
        db.serialize(async () => {
            for (let i = 0; i < statement.length; i++) {
                console.log(statement[i]);
                promises.push(
                    new Promise((resolve, reject) => {
                        db.all(statement[i], (err, result) => {
                            if (err) {
                                console.log(err);
                            }
                            console.log({ result });
                            resolve(result);
                        });
                    })
                );
            }
            console.log('dbRun', promises.length);
            await Promise.all(promises).then((...response) => {
                // console.log({ response });
                resolve();
            });
        });
    });
}

export function getAllTag() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT tag.name, COUNT(tag.name) AS count
        FROM article_tag
        LEFT JOIN tag ON article_tag.tag_id = tag.id
        GROUP BY tag.name;`,
            (err, result) => {
                resolve(result);
            }
        );
    });
}

export function getAllCategory() {
    return new Promise((resolve, reject) => {
        db.all('SELECT name FROM category;', (err, result) => {
            resolve(result);
        });
    });
}

export function newArticle(title, slug, status, thumbnail, content, search_content, tag, author) {
    return new Promise((resolve, reject) => {
        let promises = [];
        let statement = `INSERT INTO article (title,slug,status,thumbnail,content,search_content,uploaded_at) VALUES (?,?,?,?,?,?,?)`;
        let params = [title, slug, status, thumbnail, content, search_content, Date.now()];
        let newArticleId;
        // console.log('start');
        db.serialize(() => {
            db.run(statement, params, function (err) {
                if (err) {
                    reject(err.message);
                    return;
                }
                newArticleId = this.lastID;

                for (let i = 0; i < tag?.length; i++) {
                    // console.log('insert tag:', tag[i]);
                    promises.push(
                        new Promise((resolve, reject) => {
                            db.run(`INSERT OR IGNORE INTO tag(name) VALUES('${tag[i]}')`, function (error) {
                                if (error) {
                                    console.log('insert tag:', tag[i], error);
                                }
                                // console.log('inserted tag', tag[i], 'id', this.lastID);
                                db.run(`INSERT INTO article_tag (article_id, tag_id) VALUES (?,(SELECT id FROM tag WHERE name = '${tag[i]}'));`, [newArticleId], function () {
                                    // console.log('inserted article_tag', tag[i]);
                                    resolve();
                                })
                            })
                        })
                    );
                }
                for (let i = 0; i < author?.length; i++) {
                    // console.log('insert author', author[i]);
                    promises.push(
                        new Promise((resolve, reject) => {
                            db.run(`INSERT OR IGNORE INTO author(name) VALUES('${author[i]}')`, function (error) {
                                if (error) {
                                    console.log('insert author', author[i], error);
                                }

                                // console.log('inserted author', author[i], 'id', this.lastID);
                                db.run(`INSERT INTO article_author (article_id, author_id) VALUES (?,(SELECT id FROM author WHERE name = '${author[i]}'));`, [newArticleId], function () {
                                    // console.log('inserted article_author', author[i]);
                                    resolve();
                                })
                            })
                        })
                    );
                }
                Promise.all(promises).then((...responses) => {
                    // console.log('total row inserted:', promises.length, responses.length);
                    console.log(`inserted new article ${newArticleId}`);
                    resolve(newArticleId);
                });
            });
        });
    });
}

export function getHash(username) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT hash FROM user WHERE username = '${username}'`, (error, result) => {
            if (error) {
                console.log(error);
                reject();
                return;
            }
            if (!result) {
                reject();
                return;
            }
            resolve(result.hash);
        });
    });
};

export function signup({ username, hash }) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.get(`SELECT 1 FROM user WHERE username = '${username}'`, (error, result) => {
                if (error) {
                    console.log(error);
                    reject();
                    return;
                }
                if (result) {
                    reject('username exists');
                    return;
                }
                db.run('INSERT INTO user (username, hash) VALUES (?,?)', [username, hash], function (error) {
                    if (error) {
                        console.log(error);
                        reject();
                        return;
                    }
                    resolve();
                });
            });
        });
    });
};
/*
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        article_id INTEGER,
        content TEXT UNIQUE,
        user_id INTEGER,
        created_at INTEGER
        FOREIGN KEY(article_id) REFERENCES article(id),
        */
export function newComment({ articleId, userId, content, createdAt }) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO comment (article_id, user_id, content, created_at) VALUES (?,?,?,?)', [articleId, userId, content, createdAt], (error) => {
            if (error) {
                console.log('newComment', error);
                reject();
                return;
            }
            resolve();
        });
    });
}

/*
(
    SELECT group_concat(author.name, '","')
    FROM article_author
    LEFT JOIN author ON article_author.author_id = author.id
    WHERE article_author.article_id = article.id
) || '"]' AS author

SELECT tag.name, COUNT(tag.name) AS count
        FROM article_tag
        LEFT JOIN tag ON article_tag.tag_id = tag.id
        GROUP BY tag.name;
*/

export function getCommentByPostId(id) {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT comment.*, user.username AS username
            FROM comment
            LEFT JOIN user ON comment.user_id = user.id
            WHERE comment.article_id = '${id}';            
            `,
            (error, comment) => {
                if (error) {
                    console.log('getCommentByPostId', error);
                }
                resolve(comment);
            }
        );
    });
}

export function login(username, password) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            let sql;
            let values;
            sql = 'SELECT * FROM user WHERE username = ?';
            values = [username];
            db.get(sql, [username], async (error, user) => {
                if (error) {
                    console.log(error);
                    reject();
                    return;
                }
                if (!user) {
                    reject();
                    return;
                }
                if (!await bcrypt.compare(password, user.hash)) {
                    reject();
                    return;
                };
                let session_token = crypto.randomUUID();
                sql = 'INSERT INTO login_session (user_id, session_token, expire_timestamp, timestamp) VALUES (?,?,?,?)';
                let timestamp = Date.now();
                let expire_timestamp = timestamp + (24 * 60 * 60 * 1000);
                values = [user.id, session_token, expire_timestamp, timestamp];
                db.run(sql, values, (error) => {
                    if (error) {
                        console.log('insert login_session', error);
                        reject();
                        return;
                    }
                    getUserBySession(session_token).then(user => resolve(user));
                });
            });
        });
    });
}

export function newPostComment({ userId, articleId, comment }) {
    return (new Promise((resolve, reject) => {
        let sql = 'INSERT INTO comment (article_id, user_id, content, created_at) VALUES(?,?,?,?)';
        db.run(sql, [articleId, userId, comment, Date.now()], (error, loginSession) => {
            if (error) {
                console.log('newPostComment', error);
                reject();
                return;
            }
            if (Date.now() > loginSession.expire_timestamp) {
                reject('session expired');
                return;
            }
        });
        resolve();
    }));
}

export function getUserBySession(sessionToken) {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM login_session WHERE session_token = ?';
        db.serialize(() => {
            db.get(sql, [sessionToken], (error, session) => {
                if (error) {
                    console.log('getUserBySession', error);
                    reject();
                    return;
                }
                if (!session) {
                    reject();
                    return;
                }
                let session_token = session.session_token;
                let expire_timestamp = session.expire_timestamp;
                sql = 'SELECT * FROM user WHERE id = ?';
                db.get(sql, [session.user_id], (error, user) => {
                    if (error) {
                        console.log(error);
                        reject();
                        return;
                    }
                    console.log({
                        id: user.id,
                        username: user.username,
                        role: user.role,
                        session_token,
                        expire_timestamp
                    });
                    resolve({
                        id: user.id,
                        username: user.username,
                        role: user.role,
                        session_token,
                        expire_timestamp
                    });
                });
            });
        });
    });
}
