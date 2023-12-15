import { error, json } from '@sveltejs/kit';
import { login } from '$lib/server/database/index.js';

export async function POST(event) {
    const { username, password } = await (event.request).json();
    let user = await login(username, password).catch(e => {
        throw error(400, {
            message: 'wrong username/password'
        });
    });

    event.locals.user = user;
    event.cookies.set('session_id', `${user.sessionId}`, {
        path: "/",
        maxAge: 60 * 60 * 24,
    });

    return json(user);
};