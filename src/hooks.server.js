import { init } from '$lib/server/database/init.js';

let initialized = false;

export async function handle({ event, resolve }) {
	if (!initialized) {
		await init();
		initialized = true;
		console.log('initialized');
	}

	const response = await resolve(event);
	return response;
}
