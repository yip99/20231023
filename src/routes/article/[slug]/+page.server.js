import { getArticleBySlug } from '$lib/server/database/index.js';

export async function load({ params }) {
	let article = await getArticleBySlug(params.slug);
	return { article };
}
