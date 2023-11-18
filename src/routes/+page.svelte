<script>
	import { onMount } from 'svelte';
	export let data;
	// onMount(() => {});
	function formatDate(timestamp) {
		let date = new Date(timestamp);
		let output = '';
		output += `${date.getFullYear()}`.padStart(4, '0') + '-';
		output += `${date.getMonth() + 1}`.padStart(2, '0') + '-';
		output += `${date.getDate()}`.padStart(2, '0') + ' ';
		// output += `${date.getHours()}`.padStart(2, '0') + ':';
		// output += `${date.getMinutes()}`.padStart(2, '0') + ':';
		// output += `${date.getSeconds()}`.padStart(2, '0');
		return output;
	}
	let searchResult;
	let timer;
	function search({ target: { value } }) {
		if (value === '') {
			searchResult = undefined;
			return;
		}
		clearTimeout(timer);
		timer = setTimeout(async () => {
			let response = await fetch(`./api?query=${value}`);
			searchResult = await response.json();
			console.log(searchResult.articles);
		}, 500);
	}
	function sleep(ms) {
		return new Promise(function (resolve) {
			setTimeout(resolve, ms);
		});
	}
</script>

<svelte:head>
	<title>Index</title>
</svelte:head>

<main>
	<section id="main-center">
		<div id="search">
			<div><span>Search:</span><input type="text" placeholder="" id="input-search" on:input={search} /></div>
			<!-- <div>Search: <input type="text" placeholder="" name="input-search" /></div> -->
			<div><span>Tag:</span><input type="text" placeholder="" id="input-tag" /></div>
		</div>
		<table id="articles">
			<!-- <tr> -->
			<!-- <th name="title">Title</th> -->
			<!-- <th name="author">Author</th> -->
			<!-- <th name="uploaded-at">Uploaded at</th> -->
			<!-- </tr> -->
			{#if searchResult?.articles}
				{#each searchResult.articles as article}
					<tr>
						<td name="title" title={article.title}><a href="/article/{article.slug}">{@html article.title}</a></td>
						<!-- <td name="author" title={article.author?.join(', ')}>{article.author?.join(', ')}</td> -->
						<td name="tag">
							{#each article.tag as tag}
								<a href="#">{tag}</a>
							{/each}
						</td>
						<td name="uploaded-at">{formatDate(article.uploaded_at)}</td>
					</tr>
					<tr class="matched">
						<td colspan="3" class="matched">{@html article.search_content}</td>
					</tr>
				{/each}
			{:else}
				{#each data.articles as article}
					<tr>
						<td name="title" title={article.title}><a href="/article/{article.slug}">{article.title}</a></td>
						<!-- <td name="author" title={article.author?.join(', ')}>{article.author?.join(', ')}</td> -->
						<td name="tag">
							{#each article.tag as tag}
								<a href="#">{tag}</a>
							{/each}
						</td>
						<td name="uploaded-at">{formatDate(article.uploaded_at)}</td>
					</tr>
				{/each}
			{/if}
		</table>
	</section>
</main>

<!-- #articles {
    /* width: 100%; */
    max-width: 100%;
    /* text-overflow: ellipsis; */
    /* overflow: hidden; */
    /* white-space: nowrap; */
    table-layout: fixed;
}
#articles * {
    /* width: 100%; */
    /* max-width: 100%; */
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
#articles * {
    /* width: 100px; */
    /* max-width: 100px; */
    /* width: fit-content; */
    /* word-break: break-all; */
}
tr th:first-child,
tr td:first-child {
    width: 70%;
    /* word-break: break-all; */
}
tr th:not(:first-child),
tr td:not(:first-child) {
    /* width: fit-content; */
    /* word-break: break-all; */
} -->

<style>
	main {
		/* width: var(--max-width); */
	}
	input {
		background-color: var(--color-bg);
		border: 0;
		border-radius: 0;
	}
	#search > div {
		display: flex;
	}
	#search > div > span {
		width: 5em;
	}
	#search > div > input {
		width: 100%;
	}
	#search > div > input:focus {
		outline: none;
		border-bottom: 1px solid var(--color-blossom);
	}

	#search > div > input {
		/* width: 100%; */
		border-bottom: 1px solid var(--color-bg-alt);
	}
	table {
		table-layout: fixed;
	}
	table *:not(.matched) {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	table [name='uploaded-at'] {
		width: 15%;
	}
	[name='tag'] {
		display: flex;
		gap: 0.5em;
	}
</style>
