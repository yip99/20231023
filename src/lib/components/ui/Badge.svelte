<script>
	let className = undefined;
	export { className as class };
</script>

<span class={className} {...$$restProps}>
    <slot/>
</span>

<style>
    span {
        background-color: hsl(240 4.8% 95.9%);
        padding: .125rem .625rem;
        border-radius: max(100vw, 100vh);
        width: min-content;
        cursor: default;
    }
</style>