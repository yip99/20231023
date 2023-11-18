<script>
	import { onMount } from 'svelte';
	import Article from './Article.svelte';

	let md5 = ``;
	let fuseOption = {
		keys: ['content'],
		includeScore: true,
		includeMatches: true,
		// minMatchCharLength: keyword.length,
		findAllMatches: true,
		shouldSort: false,
		// threshold: 0.0,
		// ignoreLocation: true,
		useExtendedSearch: true
	};
	let toSearch = [
		{
			content: md5
		}
	];
	onMount(() => {
		let v = 'a';
		let str1 = '${v}';
		let str2 = `${str1}`;
		console.log(str2);
		document.querySelector('#input-search').addEventListener('input', (event) => {
			// console.log(event.target);
			search(event.target.value || '');
		});
		let headings = {};
		let md = window.markdownit({
			html: true,
			breaks: true
		});
		md.use(window.markdownItAnchor, {
			slugify: (id) => {
				let txt = document.createElement('textarea');
				txt.innerHTML = id;
				return txt.value;
			},
			callback: (token, info) => {
				if (['h1', 'h2'].includes(token.tag)) {
					headings[info.title] = { token, info };
				}
			},
			tabIndex: false
		});
		// renderMd(md5);
		// renderTableOfContent(headings);
		const fuse = new Fuse(toSearch, fuseOption);
		// const fuse = new Fuse(['10', '1100', '0011', '0010', '101010'], fuseOption);

		function renderMd(text) {
			document.querySelector('article#markdown-render').innerHTML = md.render(text);
		}
		function renderTableOfContent(headings) {
			document.querySelector('#main-right').innerHTML = `
      <ul id="table-of-contents">
              ${Object.values(headings)
								.map(({ token, info }) => `<li><a href="#${info.slug}">${info.title}</a></li>`)
								.join('')}
      </ul>`;
		}
		function search(query) {
			let searchResult = fuse.search(`${query}`);
			console.log(query, searchResult);
			if (searchResult.length === 0) {
				renderMd(md5);
				return;
			}
			let highlighted;
			for (let i = 0; i < searchResult.length; i++) {
				highlighted = searchResult[i].matches[0].value;
				for (let j = searchResult[i].matches[0].indices.length - 1; j >= 0; j--) {
					// console.log(searchResult[i].matches[0].indices[j]);
					// console.log(searchResult[i].item.substring(0, searchResult[i].matches[0].indices[j][0]) + searchResult[i].item.substring(searchResult[i].matches[0].indices[j][1]));
					// console.log(searchResult[i].item.substring(0, j[0]) + ' ' + searchResult[i].item.substring(i + 1));
					highlighted = highlight1(highlighted, searchResult[i].matches[0].indices[j][0], searchResult[i].matches[0].indices[j][1] + 1);
				}
			}
			renderMd(highlight2(searchResult)[0].content);
			// renderMd(highlighted);;
		}
	});
	function highlight1(text, start, end) {
		return text.slice(0, start) + '<mark>' + text.slice(start, end) + '</mark>' + text.slice(end);
	}
	function highlight2(fuseSearchResult) {
		const set = (obj, path, value) => {
			const pathValue = path.split('.');
			let i;

			for (i = 0; i < pathValue.length - 1; i++) {
				obj = obj[pathValue[i]];
			}

			obj[pathValue[i]] = value;
		};

		const generateHighlightedText = (inputText, regions = []) => {
			let content = '';
			let nextUnhighlightedRegionStartingIndex = 0;

			regions.forEach((region) => {
				const lastRegionNextIndex = region[1] + 1;

				content += [inputText.substring(nextUnhighlightedRegionStartingIndex, region[0]), `<mark>`, inputText.substring(region[0], lastRegionNextIndex), '</mark>'].join('');

				nextUnhighlightedRegionStartingIndex = lastRegionNextIndex;
			});

			content += inputText.substring(nextUnhighlightedRegionStartingIndex);

			return content;
		};

		return fuseSearchResult
			.filter(({ matches }) => matches && matches.length)
			.map(({ item, matches }) => {
				const highlightedItem = { ...item };

				matches.forEach((match) => {
					set(highlightedItem, match.key, generateHighlightedText(match.value, match.indices));
				});

				return highlightedItem;
			});
	}
</script>

<main>
	<section id="main-center">
		<input type="text" id="input-search" />
		<!-- <article id="markdown-render" /> -->
		<Article data={md5}/>
	</section>
	<section id="main-right" />
</main>

<style>
	main {
		display: flex;
        /* width: var(--max-width); */
	}

	/* :global(#table-of-contents) {
		height: fit-content;
		position: sticky;
		top: 5rem;
		white-space: nowrap;
		font-size: 12px;
		padding: 0;
		margin: 0;
		list-style-type: none;
	}

	:global(#table-of-contents a) {
		text-decoration: none;
	} */
	/* :global(p:has(time:first-child)) {
		position: relative;
        padding-left: 5em;
	}

	:global(time:first-child) {
        position: absolute;
		left: 0;
	} */
	/* :global(p:has(time:first-child), li) {
		display: flex;
		gap: 1em;
	} */

	/* :global(p:not(:last-child)) {
		padding-left: 20px;
	} */
</style>
