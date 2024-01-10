import { init } from '$lib/server/database/init.js';
import { getUserBySession } from '$lib/server/database/index.js';

let initialized = false;

export async function handle({ event, resolve }) {
    if (!initialized) {
        await init();
        initialized = true;
        console.log('initialized');
    }

    const session_token = event.cookies.get("session_token");
    let user = session_token ? await getUserBySession(session_token).catch(error => console.log(error)) : null;
    if (user) {
        event.locals.user = user;
    } else {
        event.cookies.delete('session_token', { path: '/' });
    }
    // const bearer_token = event.request.headers
    //     .get("Authorization")
    //     ?.split(" ")[1];
    // const token = auth_token ?? bearer_token;

    const response = await resolve(event);
    return response;
}
