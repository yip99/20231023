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
        border-radius: calc(0.5rem - 2px);
        width: min-content;
    }
</style>