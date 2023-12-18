import { error } from '@sveltejs/kit';
import { newPostComment } from '$lib/server/database/index.js';
export async function POST({ request }) {
    const data = await request.json();
    await newPostComment({
        articleId: data.articleId,
        userId: data.user.id,
        comment: data.comment
    }).catch(e => {
        throw error(400, {
            message: e
        });
    });;
    return new Response();
}
