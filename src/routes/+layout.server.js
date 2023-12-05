export async function load({ cookies }) {
    let data = {};
    let auth_token = cookies.get('auth_token');
    if (auth_token) {
        data.user = {
            username: auth_token // todo
        }
    }

    return data;
}