<script>
	import { onMount } from 'svelte';
	import Article from '../article/Article.svelte';
	let input = {
        title: '',
        thumbnail: '',
        content: '',
        search_content: '',
        uploaded_at: Date.now(),
        updated_at: 0,
        author: [],
    };
	onMount(() => {});
</script>

<section id="editor">
    <!-- <div id="input" contenteditable>Try typing and returning.</div> -->
    <section class="textarea"><textarea id="input-content" bind:value="{input.content}"></textarea></section>
    <section id="preview"><Article data={input} bind:exp="{input.search_content}"/></section>
    <!-- <section id="input-search-content"><textarea id="input-editor" bind:value="{input.content}"></textarea></section> -->
</section>
<section>
    <section class="textarea"><textarea id="input-search-content" bind:value="{input.search_content}"></textarea></section>
    <section>
    </section>
</section>
<section>
    <section>
        <input type="text" name="title" placeholder="title" bind:value="{input.title}"/>
        <input type="text" name="thumbnail" placeholder="thumbnail" bind:value="{input.thumbnail}"/>
        <button>submit</button>
    </section>
    <section>
    </section>
    <!-- <input type="text" name="author" placeholder="author" bind:value="{input.title}"/> -->
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
	section.textarea,
	section#preview {
		width: var(--max-width);
		height: 100%;
	}
	/* #input > *,
	#preview > * {
		width: 100%;
		height: 100%;
		margin: 0;
	} */
    textarea {
        width: 100%;
        height: 100%; 
    }
    /* div {
        border: 1px solid;
    }
    div:focus-visible {
        width: 100%;
		height: 100%;
		margin: 0;
        border: 1px solid var(--color-blossom);
        outline: 0;
    } */
</style>
