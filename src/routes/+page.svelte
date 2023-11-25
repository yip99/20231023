<script>
	// import { onMount } from 'svelte';
	export let data;
	let fuse;
	let query = '';
	let filteredTags = [...data.tags.map((tag) => tag.name)];
	let searchResult;
	let timer;
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
	async function search() {
		clearTimeout(timer);
		// if (value === '') {
		// 	searchResult = undefined;
		// 	return;
		// }
		await new Promise((resolve, reject) => {
			timer = setTimeout(async () => {
				let response = await fetch(`/api?${new URLSearchParams({query,tag:JSON.stringify(filteredTags)}).toString()}`);
				searchResult = await response.json();
                resolve();
			}, 0);
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
		let fuseResult = fuse.search(`'"${query}"`);
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
	function allTagsToggle({ target: { value } }) {
		if (value === 'all') {
			filteredTags = [...data.tags.map((tag) => tag.name)];
			// search();
		}
		if (value === 'none') {
			filteredTags = [];
		}
	}
	// $: console.log(query);
	// $: console.log(filteredTags);
	// $: if (query || filteredTags) {
	// 	search();
	// };
</script>

<svelte:head>
	<title>Index</title>
</svelte:head>

<section id="main-center">
	<div id="search">
		<div><span>Search:</span><input type="text" placeholder="" id="input-search" bind:value={query} on:input={search} /></div>
		<!-- <div><span>Tag:</span><input type="text" placeholder="" id="input-tag" /></div> -->
		<div class="filter">
			<div class="filter-all-toggle">
				<p>Tags</p>
				<label id="label-tag-all">
					<!-- All({data.tags.reduce((n, { count }) => n + count, 0)})s -->
					All({Object.keys(data.tags).length})
					<input
						type="text"
						value="all"
						on:click={allTagsToggle}
						on:click={(event) => {
							allTagsToggle(event);
							search();
						}}
						hidden
					/>
				</label>
				<label id="label-tag-none">
					None
					<input
						type="text"
						value="none"
						on:click={allTagsToggle}
						on:click={(event) => {
							allTagsToggle(event);
							search();
						}}
						hidden
					/>
				</label>
			</div>
			<div class="filter-tags">
				{#each data.tags as tag}
					<label id="label-tag-{data.tags}">
						{tag.name}({tag.count})
						<input type="checkbox" name="checkboxTag" value={tag.name} bind:group={filteredTags} on:change={search} hidden />
					</label>
				{/each}
			</div>
		</div>
	</div>
	<table id="articles">
		<!-- <tr> -->
		<!-- <th name="title">Title</th> -->
		<!-- <th name="author">Author</th> -->
		<!-- <th name="uploaded-at">Uploaded at</th> -->
		<!-- </tr> -->
		{#each searchResult?.articles || data?.articles as article}
			<tr>
				<td name="title" title={article.title}>
					<a href="/article/{article.slug}">{@html article.title}</a>
					<div name="tags">
						{#each article.tag as tag}
							<span name="tag" title={tag}>{tag}</span>
						{/each}
					</div>
				</td>
				<!-- <td name="author" title={article.author?.join(', ')}>{article.author?.join(', ')}</td> -->
				<!-- <td name="tag">
{#each article.tag as tag}
<span title={tag}>{tag}</span>
{/each}
</td> -->
				<td name="uploaded-at">{formatDate(article.uploaded_at)}</td>
			</tr>
			{#if /<mark>.+<\/mark>/.test(article.search_content)}
				<tr class="matched">
					<td colspan="3" class="matched">
						{#each article.search_content.split('\n') as search_content_line}
							{#if /<mark>.+<\/mark>/.test(search_content_line)}
								{@html search_content_line}<br />
							{/if}
						{/each}
					</td>
				</tr>
			{/if}
		{/each}
	</table>
</section>

<style>
	#main-center {
		width: var(--max-width);
	}
	input {
		background-color: var(--color-bg);
		border: 0;
		border-radius: 0;
	}
	#search > div {
		display: flex;
	}
	.filter {
		/* flex-wrap: wrap; */
		gap: 1em;
	}
	.filter label {
		font-weight: 400;
	}
	.filter-tags {
		flex-wrap: wrap;
		display: flex;
		gap: 0 1em;
	}

	label[id^='label-tag-']:has(:checked) {
		color: var(--color-blossom);
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
		/* table-layout: fixed; */
	}
	table *:not(.matched) {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	table [name='uploaded-at'] {
		width: 15%;
	}
	[name='tags'] {
		/* display: flex; */
		/* gap: 0.5em; */
	}
	span[name='tag']:not(:last-child):after {
		content: ', ';
		white-space: pre;
	}
</style>
