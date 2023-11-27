<script>
	import { onMount } from 'svelte';
	import Article from '../article/Article.svelte';
	let input = {
        title: '',
        thumbnail: '',
        content: '',
        uploaded_at: 0,
        updated_at: 0,
        author: [],
    };
	onMount(() => {
		// document.querySelector('#input-editor').addEventListener('input', (event) => {
		// 	input = event.target.value;
		//     console.log(input);
		// });
	});
</script>
<section id="editor">
    <div id="input" contenteditable>Try typing and returning.</div>
    <!-- <section id="input"><textarea id="input-editor" bind:value="{input.content}"></textarea></section> -->
    <section id="preview"><Article data={input}/></section>
    <!-- <section id="input-search-content"><textarea id="input-editor" bind:value="{input.content}"></textarea></section> -->
</section>

<style>
	#editor {
		display: flex;
		gap: 1em;
		width: 100%;
		height: 100%;
		/* margin: 1em; */
		box-sizing: border-box;
		justify-content: center;
	}
	div#input,
	section#preview {
		width: var(--max-width);
		height: 100vh;
	}
	#input > *,
	#preview > * {
		width: 100%;
		height: 100%;
		margin: 0;
	}
    textarea {
        width: 100%;
        height: 100%; 
        box-sizing: border-box;
    }
    div {
        border: 1px solid;
    }
    div:focus-visible {
        width: 100%;
		height: 100%;
		margin: 0;
        border: 1px solid var(--color-blossom);
        outline: 0;
    }
</style>
