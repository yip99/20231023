<script>
    import { invalidateAll } from '$app/navigation';
    import { formatDate } from '$lib/formatDate.js';
    import { relativeTime } from '$lib/relativeTime.js';
    import { user } from '$lib/store/user.js';

	export let data;
    async function newComment() {
        if(!$user) {
            return;
        }
        let comment = document.querySelector('#input-content').innerHTML;
        let option = {
            method: "POST",
            body: JSON.stringify({user: $user, comment, articleId: data.articleId})
        };
        let response = await fetch('/api/newComment', option);
        
        if(response.ok) {
            await invalidateAll();
        }
    }
</script>

<div class="comments">
    <span>Comment:</span>
    <div class="input">
        <div class="input-content" id="input-content" contenteditable="true"></div>
        <div class="input-foot">
            <a href="#" class="submit" on:click="{newComment}">comment</a>
        </div>
    </div>
    {#each data.comment as comment}
        <div class="comment">
            <div class="comment-head">
                <span class="username">{comment.username}</span>
                <span> | </span>
                <span class="relative-time">{relativeTime(comment.created_at)}</span>
                <span> | </span>
                <span class="created-at">{formatDate(comment.created_at)}</span>
            </div>
            <div class="content">{@html comment.content}</div>
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
