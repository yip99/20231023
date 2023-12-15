import sqlite3 from 'sqlite3';
import bcrypt from 'bcrypt';
import { database_path } from '$env/static/private';
const db = new sqlite3.Database(database_path);
// const db = new sqlite3.Database(':memory:');

export function getAllPublicArticle() {
    return new Promise((resolve, reject) => {
        db.all(
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
            WHERE article.status = 'public'
            GROUP BY article.id;`,
            (error, articles) => {
                if (error) {
                    console.log(error);
                }
                for (let i = 0; i < articles?.length; i++) {
                    articles[i].tag = JSON.parse(articles[i].tag);
                    articles[i].author = JSON.parse(articles[i].author);
                }
                const size = new TextEncoder().encode(JSON.stringify(articles)).length;
                console.log(`All public articles size: ${Math.round(((size / 1024) + Number.EPSILON) * 100) / 100} kb (${articles.length})`);
                resolve(articles);
            }
        );
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
        console.log('start');
        db.run(statement, params, async function (err) {
            if (err) {
                reject(err.message);
                return;
            }
            newArticleId = this.lastID;

            db.serialize(() => {
                for (let i = 0; i < tag?.length; i++) {
                    console.log('insert tag:', tag[i]);
                    promises.push(
                        new Promise((resolve, reject) => {
                            db.run(`INSERT OR IGNORE INTO tag(name) VALUES('${tag[i]}')`, function () {
                                console.log('inserted tag', tag[i]);
                                resolve();
                            });
                        })
                    );
                    promises.push(
                        new Promise((resolve, reject) => {
                            db.run(`INSERT INTO article_tag (article_id, tag_id) VALUES (?,(SELECT id FROM tag WHERE name = '${tag[i]}'));`, [newArticleId], function () {
                                console.log('inserted article_tag', tag[i]);
                                resolve();
                            });
                        })
                    );
                }
                for (let i = 0; i < author?.length; i++) {
                    console.log('insert author', author[i]);
                    promises.push(
                        new Promise((resolve, reject) => {
                            db.run(`INSERT OR IGNORE INTO author(name) VALUES('${author[i]}')`, function () {
                                console.log('inserted author', author[i]);
                                resolve();
                            });
                        })
                    );
                    promises.push(
                        new Promise((resolve, reject) => {
                            db.run(`INSERT INTO article_author (article_id, author_id) VALUES (?,(SELECT id FROM author WHERE name = '${author[i]}'));`, [newArticleId], function () {
                                console.log('inserted article_author', author[i]);
                                resolve();
                            });
                        })
                    );
                }
            });

            console.log('total row to insert:', promises.length);
            await Promise.all(promises).then(() => {
                console.log(`A row has been inserted with rowid ${newArticleId}`);
                resolve(newArticleId);
            });
        });
    });
}

export function search({ query, tag, order, skip, count }) {
    console.log({ query, tag });
    query = query
        .split('')
        .map((char) => {
            return char === "'" ? "\\''" : `\\${char}`;
        })
        .join('');

    return new Promise((resolve, reject) => {
        // let statement = `
        // SELECT article.*,
        // '["' || (
        //     SELECT group_concat(tag.name, '","')
        //     FROM article_tag
        //     LEFT JOIN tag ON article_tag.tag_id = tag.id
        //     WHERE article_tag.article_id = article.id
        //     ) || '"]' AS tag,
        // '["' || (
        //     SELECT group_concat(author.name, '","')
        //     FROM article_author
        //     LEFT JOIN author ON article_author.author_id = author.id
        //     WHERE article_author.article_id = article.id
        // ) || '"]' AS author,
        // (SELECT highlight(article_fts, 2, '<mark>', '</mark>') FROM article_fts WHERE ROWID = article.id AND article_fts MATCH '${query}') AS highlighted_content
        // FROM article
        // WHERE ROWID IN (SELECT ROWID FROM article_fts WHERE article_fts MATCH '${query}'
        // ${order ? 'ORDER BY rank' : ''})
        // AND article.status = 'public'
        // ${typeof skip !== 'undefined' && typeof count !== 'undefined' ? `LIMIT ${skip}, ${count}` : ''};
        // `;

        // let statement = `SELECT
        // article.*,
        // article_fts.rowid,
        // highlight(article_fts, 0, '<mark>', '</mark>') AS highlighted_title,
        // highlight(article_fts, 1, '<mark>', '</mark>') AS highlighted_summary,
        // highlight(article_fts, 2, '<mark>', '</mark>') AS highlighted_content,
        // '["' || (
        //     SELECT group_concat(tag.name, '","')
        //     FROM article_tag
        //     LEFT JOIN tag ON article_tag.tag_id = tag.id
        //     WHERE article_tag.article_id = article.id
        // ) || '"]' AS tag,
        // '["' || (
        //     SELECT group_concat(author.name, '","')
        //     FROM article_author
        //     LEFT JOIN author ON article_author.author_id = author.id
        //     WHERE article_author.article_id = article.id
        // ) || '"]' AS author
        // FROM article_fts
        // LEFT JOIN article ON article.id = article_fts.rowid
        // WHERE article_fts MATCH '${query}'
        // `;
        // let statement = `SELECT
        // *,
        // '["' || (
        //     SELECT group_concat(tag.name, '","')
        //     FROM article_tag
        //     LEFT JOIN tag ON article_tag.tag_id = tag.id
        //     WHERE article_tag.article_id = article.id
        // ) || '"]' AS tag,
        // '["' || (
        //     SELECT group_concat(author.name, '","')
        //     FROM article_author
        //     LEFT JOIN author ON article_author.author_id = author.id
        //     WHERE article_author.article_id = article.id
        // ) || '"]' AS author
        // FROM article
        // WHERE
        // title GLOB '*${query}*' COLLATE NOCASE OR
        // search_content GLOB '*${query}*' COLLATE NOCASE
        // `
        let statement = `
SELECT 
*,
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
`;
        let condition = [];

        if (tag) {
            condition.push(`
article.id in(select article_tag.article_id
    from article_tag
    where article_tag.tag_id in (select tag.id
    from tag
    where tag.name in ('${tag.join("', '")}')))
`);
        }
        if (query) {
            condition.push(`
(title LIKE '%${query}%' ESCAPE '\\' OR 
search_content LIKE '%${query}%' ESCAPE '\\')
`);
        }
        if (condition.length > 0) {
            statement += ' WHERE ';
            statement += condition.join(' AND ');
        }
        console.log(statement);
        db.all(statement, (err, articles) => {
            if (err) {
                reject(err);
                return;
            }
            console.log(typeof articles === 'undefined');
            if (typeof articles === 'undefined') {
                reject();
                return;
            }
            for (let i = 0; i < articles?.length; i++) {
                articles[i].tag = JSON.parse(articles[i].tag);
                articles[i].author = JSON.parse(articles[i].author);
                console.log(articles[i].title);
            }
            const size = new TextEncoder().encode(JSON.stringify(articles)).length;
            console.log(`matched public articles size: ${Math.round(((size / 1024) + Number.EPSILON) * 100) / 100} kb (${articles?.length})`);
            resolve(articles);
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

export function getCommentById(id) {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT comment.*, user.username AS username
            FROM comment
            LEFT JOIN user ON comment.user_id = user.id
            WHERE comment.article_id = '${id}';            
            `,
            (error, comment) => {
                if (error) {
                    console.log('getCommentById', error);
                }
                resolve(comment);
            }
        );
    });
}

export function login(username, password) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.get('SELECT * FROM user WHERE username = ?', [username], async (error, user) => {
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
                let sessionId = crypto.randomUUID();
                db.run('INSERT INTO login_session (user_id, session_id, timestamp) VALUES (?,?,?)', [user.id, sessionId, Date.now()], (error) => {
                    if (error) {
                        console.log('insert login_session', error);
                        reject();
                        return;
                    }
                });
                resolve({
                    id: user.id,
                    username: user.username,
                    role: user.role,
                    sessionId
                });
            });
        });
    });
}