import { getArticleBySlug, getCommentById } from '$lib/server/database/index.js';

export async function load({ params }) {
    let article = await getArticleBySlug(params.slug);
    let comment = await getCommentById(article.id);
    return { article, comment };
}
