<script context="module">
	const modules = import.meta.glob('./*/+page.svelte');
    let pages = Object.keys(modules);
	pages = pages.map((path) => path.replace('./', '').replace('/+page.svelte', ''));
    pages = pages.filter(page => page !== 'login');
	pages.unshift('');
</script>

<script>
    import { goto } from "$app/navigation";
    import { user } from '$lib/store/user.js';
	  import '../index.css';
    export let data;
    // $: if(data?.user) $user = data.user;
    $user = data.user;

    async function logout() {
        await fetch('/api/logout');
        user.set();
        await goto('/');
    }
</script>

<svelte:head>
	<!-- <link id="stylesheet" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css" type="text/css" /> -->
    <script src="https://cdn.jsdelivr.net/npm/markdown-it/dist/markdown-it.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/markdown-it-anchor/dist/markdownItAnchor.umd.min.js"></script>
</svelte:head>

<nav>
	<div class="nav-left">
        {#each pages as page}
		<a href="/{page}">{page === '' ? 'home' : page}</a>
	{/each}
    </div>
	<div class="nav-center">
    </div>

	<div class="nav-right">
        {#if $user}
		    <a href="#" on:click="{logout}">logout</a>
        {:else}
		    <a href="/login">login</a>
        {/if}
    </div>
</nav>
<main>
	<slot />
</main>
<footer></footer>

<style>
    nav {
		display: flex;
        justify-content: space-between;
		position: sticky;
		top: 0;
		background-color: var(--color-bg);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    nav > * {
		display: flex;
		gap: 2em;
    }
	.nav-left {
		/* z-index: 1; */
		/* width: var(--max-width); */
		/* height: 3rem; */
		/* height: 100%; */
		/* align-items: center; */
		/* padding: 0 1rem; */
		/* margin: 0 auto; */
		/* justify-content: space-between; */
		/* margin: 0 auto; */
	}
	nav a {
		text-decoration: none;
	}
	:global(main) {
		margin-top: 1em;
	}
</style>
