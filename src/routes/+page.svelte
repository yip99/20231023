<script>
	// import { onMount } from 'svelte';
    import Badge from '$lib/components/ui/Badge.svelte';
    import Filter from '$lib/components/ui/Filter.svelte';
    import Pagination from '$lib/components/ui/Pagination.svelte';
    import { formatDate } from '$lib/formatDate.js';
	export let data;
	let fuse;
	let query = '';
	// let filteredTags = [...data.tags.map((tag) => tag.name)];
	let filteredTags = [];
	let searchResult;
	let searchResultCount;
	let timer;
    let numberOfDisplay = 20;
    // $: if(filteredTags) {
    //     search();
    // }
	// onMount(() => {});
	async function search() {
		clearTimeout(timer);
		// if (value === '') {
		// 	searchResult = undefined;
		// 	return;
		// }
		await new Promise((resolve, reject) => {
			timer = setTimeout(async () => {
                let data = {};
                if(query.length) {
                    data.query = query;
                }
                if(filteredTags.length) {
                    data.tag = JSON.stringify(filteredTags);
                }
				let response = await fetch(`/api/searchPost?${new URLSearchParams(data).toString()}`);
				// ({articles: searchResult, articleCount: searchResultCount} = await response.json());
				searchResult = (await response.json()).articles;
                resolve();
			}, 0);
		});

		fuse = new Fuse(searchResult, {
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
					searchResult[index][key] = highlight(searchResult[index][key], fuseResult[i].matches[j].indices[k][0], fuseResult[i].matches[j].indices[k][1] + 1);
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

<section id="main-center">
	<div id="search">
		<div><span>Search:</span><input type="text" placeholder="" id="input-search" bind:value={query} on:input={search} /></div>
		<!-- <div><span>Tag:</span><input type="text" placeholder="" id="input-tag" /></div> -->
		<div class="filter">
            <Filter type="tags" options={data.tags} bind:selected={filteredTags} on:select={search} />
		</div>
	</div>
	<table id="articles">
		<!-- <tr> -->
		<!-- <th name="title">Title</th> -->
		<!-- <th name="author">Author</th> -->
		<!-- <th name="uploaded-at">Uploaded at</th> -->
		<!-- </tr> -->
		{#each searchResult || data?.articles as article}
			<tr>
				<td name="title">
					<a href="/article/{article.slug}" title={article.title}>{@html article.title}</a>
					<div name="tags">
						{#each article.tag as tag}
                            <Badge>{tag}</Badge>
							<!-- <span name="tag" title={tag}>{tag}</span> -->
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
    {#if data?.articleCount > (searchResult?.length || data?.articles.length)}
        <Pagination currentPage={1} totalPages={searchResultCount || data.articleCount} on:goPage={(event) => {console.log(event.detail)}}></Pagination>
    {/if}
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
	span[name='tag']:not(:last-child):after {
		content: ', ';
		white-space: pre;
	}
</style>
