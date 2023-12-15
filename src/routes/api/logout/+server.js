export async function GET(event) {
    event.cookies.delete('session_id', { path: '/' });
    // event.cookies.delete('user', { path: '/' });

    return new Response();
};