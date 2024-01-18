<script>
    import Filter from '$lib/components/ui/Filter.svelte';
    import Badge from '$lib/components/ui/Badge.svelte';
    import Pagination from '$lib/components/ui/Pagination.svelte';
</script>

<div>
    <Filter type="example" options={[{name:'example'}]}></Filter>
    <Badge class="red">Secondary</Badge>
    <Pagination currentPage={12} totalPages={166} on:goPage={(event) => {console.log(event.detail)}}></Pagination>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
    }
</style>