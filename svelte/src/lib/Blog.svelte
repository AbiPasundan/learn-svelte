<script lang="ts">
    import Layout from "./Layout.svelte";
</script>

<Layout title="Title" footer="Footer" >
    {#snippet content()}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit rerum temporibus dolorem cum, quos vel, fugit recusandae perspiciatis debitis similique eos mollitia. Deserunt, dolorem voluptatem. Est, sint ab.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum recusandae harum fugiat quibusdam reiciendis magnam!</p>
        {/snippet}
</Layout>