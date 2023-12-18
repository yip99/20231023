import { searchPost } from '$lib/server/database/index.js';
import { json } from '@sveltejs/kit';
export async function GET({ params, url }) {
    let articles;
    let data = {
        query: url.searchParams.get('query'),
        tag: JSON.parse(url.searchParams.get('tag'))
    };
    articles = await searchPost(data);
    return json(articles);
}
