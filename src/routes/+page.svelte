<script>
	import { onMount } from 'svelte';
	export let data;
	let fuse;
	onMount(() => {});
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
	async function search({ target: { value } }) {
		clearTimeout(timer);
		if (value === '') {
			searchResult = undefined;
			return;
		}
		await new Promise((resolve, reject) => {
			timer = setTimeout(async () => {
				let response = await fetch(`./api?query=${value}`);
				searchResult = await response.json();
				resolve();
			}, 300);
		});
		console.log(searchResult.articles);

		fuse = new Fuse(searchResult.articles, {
			keys: ['title', 'search_content'],
			includeScore: true,
			includeMatches: true,
			// minMatchCharLength: keyword.length,
			findAllMatches: true,
			shouldSort: false,
			// threshold: 0.0,
			// ignoreLocation: true,
			useExtendedSearch: true
		});
		let fuseResult = fuse.search(`'${value}`);
		for (let i = 0; i < fuseResult.length; i++) {
			let index = fuseResult[i].refIndex;
			for (let j = 0; j < fuseResult[i].matches.length; j++) {
				let key = fuseResult[i].matches[j].key;
				for (let k = fuseResult[i].matches[j].indices.length - 1; k >= 0; k--) {
					// console.log(index, key, fuseResult[i].matches[j].indices[k]);
					searchResult.articles[index][key] = highlight(searchResult.articles[index][key], fuseResult[i].matches[j].indices[k][0], fuseResult[i].matches[j].indices[k][1] + 1);
				}
			}
		}
	}
	function highlight(text, start, end) {
		return text.slice(0, start) + '<mark>' + text.slice(start, end) + '</mark>' + text.slice(end);
	}
</script>

<svelte:head>
	<title>Index</title>
</svelte:head>

<main>
	<section id="main-center">
		<div id="search">
			<div><span>Search:</span><input type="text" placeholder="" id="input-search" on:input={search} /></div>
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
                        {#if /<mark>.+<\/mark>/.test(article.search_content)}
                            <td colspan="3" class="matched">
                                {#each article.search_content.split('\n') as search_content_line}
                                    {#if /<mark>.+<\/mark>/.test(search_content_line)}
        						      {@html search_content_line}<br>
                                    {/if}
                                {/each}
                            </td>
                        {/if}
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

<style>
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
