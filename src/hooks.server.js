import { init } from '$lib/server/database/init.js';

let initialized = false;

// import { writable } from "svelte/store";
// import { setContext } from 'svelte';
// 
// const user = writable(0);
// user.set({ username: 'username' });
// setContext('user', user);

export async function handle({ event, resolve }) {
    if (!initialized) {
        await init();
        initialized = true;
        console.log('initialized');
    }

    // const auth_token = event.cookies.get("auth_token");
    // const bearer_token = event.request.headers
    //     .get("Authorization")
    //     ?.split(" ")[1];
    // const token = auth_token ?? bearer_token;

    // if (token) {
    //     event.locals.user = token;
    // }

    const response = await resolve(event);
    return response;
}
// todo