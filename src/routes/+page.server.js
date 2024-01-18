import { getArticles, getAllTag } from '$lib/server/database/index.js';

export async function load({ params, url }) {
    let numberOfPostToDisplay = 10;
    let offset = 0;
    let tags = await getAllTag();
    let articles;
    let articleCount;
    let data = {
        limit: numberOfPostToDisplay,
        offset
    };
    let query = url.searchParams.get('query');
    if (query) {
        // ({ articles, articleCount } = await getArticles(query));
        // return { articles, articleCount, tags };
        // todo
    } else {
        ({ articles, articleCount } = await getArticles(data));
    }
    return { articles, articleCount, tags, numberOfPostToDisplay, offset };
}
