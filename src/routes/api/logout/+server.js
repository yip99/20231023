export async function GET(event) {
    event.cookies.delete('session_token', { path: '/' });
    // event.cookies.delete('user', { path: '/' });

    return new Response();
};