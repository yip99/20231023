import { getAllPublicArticle, getAllTag, search } from '$lib/server/database/index.js';
import { json } from '@sveltejs/kit';
export async function GET({ params, url }) {
	console.log(url.searchParams);
	let tags = await getAllTag();
	let articles;
	let data = {
		query: url.searchParams.get('query'),
		tag: JSON.parse(url.searchParams.get('tag'))
	};
	if (typeof data.query !== 'undefined') {
		articles = await search(data);
		return json({ articles, tags });
	}
	if (!articles) {
		articles = await getAllPublicArticle();
	}
	return json({ articles, tags });
}
