<script context="module">
	const modules = import.meta.glob('./*/+page.svelte');
	const pages = Object.keys(modules).map((path) => path.replace('./', '').replace('/+page.svelte', ''));
	pages.unshift('');
</script>

<script>
	import '../index.css';
</script>

<svelte:head>
	<!-- <link id="stylesheet" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css" type="text/css" /> -->
</svelte:head>

<nav>
	{#each pages as page}
		<a href="/{page}">{page === '' ? 'home' : page}</a>
	{/each}
	<div class="nav-right" />
</nav>

<slot />

<style>
	nav {
		/* width: var(--max-width); */
		display: flex;
		gap: 2em;
		/* z-index: 1; */
		position: sticky;
		top: 0;
		/* height: 3rem; */
		/* height: 100%; */
		/* align-items: center; */
		/* padding: 0 1rem; */
		/* margin: 0 auto; */
		/* justify-content: space-between; */
		background-color: var(--color-bg);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		/* margin: 0 auto; */
	}
	nav a {
		text-decoration: none;
	}
	:global(main) {
		margin-top: 1em;
	}
</style>
