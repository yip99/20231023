import { getArticles } from '$lib/server/database/index.js';
import { json } from '@sveltejs/kit';
export async function GET({ params, url }) {
    let articles;
    let articleCount;
    let data = {
        query: url.searchParams.get('query'),
        tag: JSON.parse(url.searchParams.get('tag'))
    };
    ({ articles, articleCount } = await getArticles(data));
    return json({ articles, articleCount });
}
