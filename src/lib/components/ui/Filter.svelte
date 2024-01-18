<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let type;
    export let options;
    export let selected = [];
    let search = '';
    let filter;
    $: searchResult = options.filter(({name}) => name.toLowerCase().includes(search.toLowerCase()));
    
	onMount(() => {
        document.addEventListener('click', event => {
            if (!filter?.contains(event.target)) {
                filter.querySelector('input[type=checkbox]').checked = false;
            }
        });
    });
</script>

<div class="filter-{type}" bind:this="{filter}">
    <label>
        + {type}: {selected.length ? selected.join(', ') : 'All'}
        <input type="checkbox" hidden />
    </label>
    <div class="dropdown">
        <div class="search">
            <input type="text" bind:value="{search}" placeholder="search {type}" />
        </div>
        <div class="options">
            {#each searchResult || options as option}
                <label id="option-{option.name}">
                    <input type="checkbox" value={option.name} bind:group={selected} on:change={() => dispatch('select')} />
                    <span>{option.name}</span><!-- {#if option.count} ({option.count}) {/if} -->
                </label>
            {/each}
            {#if searchResult?.length === 0}
                <span>No results found</span>
            {/if}
        </div>
        {#if selected.length}
            <div class="reset">
                <button on:click="{() => {selected = []; search = ''; dispatch('select');}}">
                    Reset
                </button>
            </div>
        {/if}
    </div>
</div>

<style>
    * {
        font-weight: 400;
    }
    [class^='filter-'] {
        position: relative;
        display: inline-block;
        user-select: none;
    }

    [class^='filter-'] > .dropdown {
        width: max-content;
        background-color: var(--color-bg);
    }

    [class^='filter-'] > .dropdown {
        display: none;
    }

    .dropdown {
        border-color: hsl(240 5.9% 90%);
        box-sizing: border-box;
        border: 1px solid #e5e7eb;
        box-shadow: 0 0 #0000,0 0 #0000,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);
        z-index: 1;
    }

    .dropdown input {
        margin: 0;
        vertical-align: middle;
    }

    .dropdown > .search {
        border-bottom: 1px solid #e5e7eb;
    }

    .dropdown > .reset {
        border-top: 1px solid #e5e7eb;
        width: 100%;
    }

    label:has(input:checked)~.dropdown{
        display: block;
        position: absolute;
    }
    label[id^='option-'] {
        padding: 0 0.5rem;
    }
    .reset > button {
        background-color: var(--color-bg);
        color: var(--color-text);
        border: 0;
        width: 100%;
    }
    input[type='checkbox']:focus {
        outline: 0;
    }
</style>