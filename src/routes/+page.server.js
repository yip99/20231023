import { getArticles, getAllTag, dbRun, search } from '$lib/server/database/index.js';

export async function load({ params, url }) {
    let tags = await getAllTag();
    let articles;
    let articleCount;
    let query = url.searchParams.get('query');
    if (query) {
        ({ articles, articleCount } = await search(query));
        return { articles, articleCount, tags };
    } else {
        ({ articles, articleCount } = await getArticles());
    }
    return { articles, articleCount, tags };
}
