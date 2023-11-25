import { getAllPublicArticle, getAllTag, dbRun, search } from '$lib/server/database/index.js';

export async function load({ params, url }) {
	let tags = await getAllTag();
	let articles;
	if (url.searchParams.get('query')) {
		articles = await search(url.searchParams.get('query'));
		return { articles, tags };
	} else {
		articles = await getAllPublicArticle();
	}
	return { articles, tags };
	// if (url.searchParams.get('query')) {
	//     return await new Promise((resolve, reject) => {
	//         let articles = search(url.searchParams.get('query'));
	//         console.log({ articles });
	//         resolve({ articles, tags });
	//     });
	// }
	// return await new Promise((resolve, reject) => {
	//     let articles = getAllPublicArticle();
	//     resolve({ articles, tags });
	// });
}
