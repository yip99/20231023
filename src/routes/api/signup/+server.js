import { error } from '@sveltejs/kit';
import bcrypt from "bcrypt";
import { signup } from '$lib/server/database/index.js';
const saltRounds = 10;

export async function POST({ request }) {
    const { username, password } = await request.json();

    await bcrypt.hash(password, saltRounds).then(async function (hash) {
        await signup({ username, hash }).catch(e => {
            throw error(404, {
                message: e
            });
        });
    });
    return new Response();
};