<script>
	import { onMount } from 'svelte';
	import Article from '../article/Article.svelte';
	let input = '';
	onMount(() => {
		// document.querySelector('#input-editor').addEventListener('input', (event) => {
		// 	input = event.target.value;
		//     console.log(input);
		// });
	});
</script>

<main>
	<section id="editor"><textarea id="input-editor" bind:value="{input}"></textarea></section>
	<section id="preview"><Article data="{input}" /></section>
</main>

<style>
	main {
		display: flex;
		gap: 1em;
		width: 100%;
		height: 100%;
		margin: 1em;
		box-sizing: border-box;
		justify-content: center;
	}
	section#editor,
	section#preview {
		width: var(--max-width);
		height: 100%;
	}
	#editor > *,
	#preview > * {
		width: 100%;
		height: 100%;
		margin: 0;
	}
</style>
