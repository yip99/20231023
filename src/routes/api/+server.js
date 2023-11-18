import { getAllPublicArticle, getAllTag, search } from '$lib/server/database/index.js';
import { json } from '@sveltejs/kit';
export async function GET({ params, url }) {
    let tags = await getAllTag();
    let articles;
    if (url.searchParams.get('query')) {
        articles = await search(url.searchParams.get('query'));
        return json({ articles, tags });
    }
    if (!articles) {
        articles = await getAllPublicArticle();
    }
    return json({ articles, tags });
}