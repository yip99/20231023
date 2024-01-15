<script>
    import Filter from '$lib/components/ui/Filter.svelte';
    import Badge from '$lib/components/ui/Badge.svelte';
</script>

<div>
    <Filter type="example" options={[{name:'example'}]}></Filter>
    <Badge class="red">Secondary</Badge>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
    }
</style>