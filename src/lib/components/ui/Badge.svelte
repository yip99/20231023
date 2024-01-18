<script>
	let className = undefined;
	export { className as class };
</script>

<span class={className} {...$$restProps}>
    <slot/>
</span>

<style>
    span {
        background-color: var(--color-bg-alt);
        padding: .125rem .625rem;
        border-radius: max(100vw, 100vh);
        width: min-content;
        cursor: default;
        font-weight: 600;
    }
</style>