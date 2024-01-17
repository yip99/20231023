<script>
	import { onMount } from 'svelte';
	export let data;
    export let exp;
	let md;
	let headings = [];
	// $: if (data) {
    //     headings = [];
	// }
    let htmlString = data.content;
    $: if(md) {
        // htmlString = md.render(data.content);
        // md.render(data.content);
        exp = stripHtml(htmlString);
    }
	onMount(() => {
		// md = window.markdownit({
		// 	html: true,
		// 	breaks: true
		// });
		// md.use(window.markdownItAnchor, {
		// 	slugify: (id) => {
		// 		let txt = document.createElement('textarea');
		// 		txt.innerHTML = id;
		// 		return txt.value;
		// 	},
		// 	callback: (title, slug) => {
		// 		headings = [...headings, slug.title];
		// 	}
		// });
        headings = getHeadings();
        // highlightCurrentViewInTOC();
        document.addEventListener('scroll', (event) => {
            let headings = getHeadings();
            for (let i = 0; i < headings.length; i++) {
                let heading = document.querySelector(`a[href="#${headings[i].innerText}"]`);
                if(headings[i].getBoundingClientRect().top >= 0 && (headings[i-1]?.getBoundingClientRect()?.top || -1) < 0) {
                    heading.classList.add('current-view');
                } else {
                    heading.classList.remove('current-view');
                }
            }
        });
	});
    function getHeadings() {
        let headings = [];
        document.querySelectorAll('#article-content > *:is(h1, h2, h3, h4, h5, h6)').forEach(element => {
            headings.push(element);
        });
        return headings;
    }
	function formatDate(timestamp) {
		if (!timestamp) {
			return timestamp;
		}
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
    function stripHtml(html) {
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.innerText || doc.body.textContent || "";
    }
</script>

<section>
	<article>
		<h1>{data.title}</h1>
		<span title="last update: {formatDate(data.updated_at)}">{formatDate(data.uploaded_at)}</span>
		<span>{data.author.join(', ')}</span>
        <img src="{data.thumbnail}" onerror="this.src='https://dummyimage.com/1920x1080/000/fff&text=thumbnail'" alt="thumbnail" />
        <div id="article-content">
            {@html htmlString}
        </div>
	</article>
	<ul id="table-of-content">
        {#each headings as heading, i}
            {@const currentView = heading.getBoundingClientRect().top >= 0 && (headings[i-1]?.getBoundingClientRect()?.top || -1) < 0}
			<li><a href="#{heading.innerText}" class="{currentView ? 'current-view' : ''}">{heading.innerText}</a></li>
		{/each}
	</ul>
</section>

<style>
	section {
		display: flex;
		width: var(--max-width);
		gap: 1em;
	}
	article {
		width: calc(var(--max-width) - 10em);
	}
	#table-of-content > * {
		/* text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap; */
	}

	#table-of-content {
		height: fit-content;
		position: sticky;
		top: 5rem;
		white-space: nowrap;
		font-size: 12px;
		padding: 0;
		margin: 0;
		list-style-type: none;
		margin-left: auto;
		margin-right: 0;
		width: 10em;
	}

	#table-of-content a {
		text-decoration: none;
	}
    a.current-view {
        color: var(--color-fade);
        font-weight: 700;
    }
    a.current-view::before {
        content: '> ';
    }
</style>
