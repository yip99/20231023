import { error } from '@sveltejs/kit';
import bcrypt from "bcrypt";
import { getHash } from '$lib/server/database/index.js';

export async function POST(event) {
    const { username, password } = await (event.request).json();

    let hash = await getHash(username).catch(e => {
        throw error(400, {
            message: 'wrong username/password'
        });
    });

    const match = await bcrypt.compare(password, hash);

    if (!match) {
        throw error(400, {
            message: 'wrong username/password'
        });
    }

    event.cookies.set("auth_token", `${username}`, {
        path: "/",
        maxAge: 60 * 60 * 24,
    });

    return new Response();
};