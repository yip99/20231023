<script>
	import { onMount } from 'svelte';
	import Article from '../Article.svelte';
	export let data;
</script>

<main>
	<section id="main-center">
		<Article data="{data.article}" />
	</section>
</main>

<style>
	main {
		display: flex;
		/* width: var(--max-width); */
	}
</style>
