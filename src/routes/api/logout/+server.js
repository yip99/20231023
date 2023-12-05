export async function GET(event) {
    event.cookies.delete('auth_token', { path: '/' });
    event.cookies.delete('user', { path: '/' });

    return new Response();
};