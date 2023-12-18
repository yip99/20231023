<script>
	import { onMount } from 'svelte';
	import Article from '../Article.svelte';
	import Comment from '../Comment.svelte';
	export let data;
</script>

<main>
	<section id="main-center">
		<Article data="{data.article}" />
        <Comment data="{{articleId:data.article.id , comment:data.comment}}" />
	</section>
</main>

<style>
	main {
		display: flex;
		/* width: var(--max-width); */
	}
</style>
