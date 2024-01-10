export async function load({ locals }) {
    let data = {};
    if (locals.user) {
        data.user = locals.user
    }

    return data;
}