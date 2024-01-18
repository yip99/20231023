<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let currentPage;
    export let totalPages;
</script>

<div class="Pagination">
    <button disabled={currentPage <= 1 ? true : false} on:click="{()=>dispatch('goPage', 1)}">{'<<'}</button>
    <button disabled={currentPage - 1 <= 1 ? true : false} on:click="{()=>dispatch('goPage', Math.max(currentPage - 1, 1))}">{'<'}</button>
    <label>
        <input type="number" min="1" max="{totalPages}" value={currentPage} />/{totalPages}
    </label>
    <button disabled={currentPage >= totalPages ? true : false} on:click="{()=>dispatch('goPage', Math.min(currentPage + 1, totalPages))}">{'>'}</button>
    <button disabled={currentPage >= totalPages ? true : false} on:click="{()=>dispatch('goPage', totalPages)}">{'>>'}</button>
</div>

<style>
    .Pagination {
        display: flex;
        gap: .25rem;
        justify-content: center;
    }
    button {
        background-color: unset;
        color: unset;
        border: unset;
        border-radius: calc(0.5rem - 2px);
    }
    button:hover {
        background-color: var(--color-bg-alt);
        color: var(--color-font);
    }
    button:disabled {
        cursor: default;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
    label, input {
        font-weight: unset;
        margin: 0;
    }
    input {
        padding: 0;
        height: 100%;
        background-color: var(--color-bg);
        height: 100%;
        text-align: right;
    }
    input, input:focus {
        border: 0;
    }
</style>