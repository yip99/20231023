<script>
	let className = undefined;
	export let href= undefined;
	export let variant= "default";
	export { className as class };
    console.log({ variant, className });
</script>

<svelte:element
	this={href ? "a" : "span"}
	{href}
    class="base {className}"
	{...$$restProps}>
	<slot />
</svelte:element>

<style>
    .base {
        align-items: center;
        border-radius: calc(0.5rem - 2px);
        border-width: 1px;
        padding-left: .625rem;
        padding-right: .625rem;
        padding-top: .125rem;
        padding-bottom: .125rem;
        font-size: .75rem;
        line-height: 1rem;
        font-weight: 600;
        transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;
        outline: 2px solid transparent;
    outline-offset: 2px;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);
    --tw-ring-color: hsl(var(--ring));
    --tw-ring-offset-width: 2px;
        user-select: none; 
    }
    .default{
        border-color: transparent; 
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
    }
    .secondary{
        background-color: hsl(240 4.8% 95.9% / 1);
    }
    .destructive{
        border-color: transparent; 
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
    }
    .outline{

    }
</style>