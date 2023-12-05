<script>
	import { onMount } from 'svelte';
    import {formatDate} from '$lib/formatDate.js'
    import {relativeTime} from '$lib/relativeTime.js'
	export let data;
	onMount(() => {

	});

</script>

<div class="comments">
    <span>Comment:</span>
    <div class="input">
        <div class="input-content" contenteditable="true"></div>
        <div class="input-foot">
            <a href="#" class="submit">comment</a>
        </div>
    </div>
    {#each data as comment}
        <div class="comment">
            <div class="comment-head">
                <span class="username">{comment.username}</span>|
                <span class="relative-time">{relativeTime(comment.created_at)}</span>|
                <span class="created-at">{formatDate(comment.created_at)}</span>
            </div>
            <div class="content">{comment.content}</div>
        </div>
        {:else}
        <div class="comment">no comments</div>
    {/each}
</div>

<style>
    .input {
        display: flex;
        flex-direction: column;
    }
    .input-content:focus-visible {
        outline: none;
    }
    .input-content {
        margin-bottom: 0.5em;
        border-bottom: 1px solid;
    }
    .input-foot {
        align-self: end;
    }
    .submit {
        width: fit-content;
        font-size: 1.1em;
    }
    .comment-head {
        display: flex;
        gap: 0.5em;
    }
    .comment {
        margin-bottom: 2em;
    }
</style>
