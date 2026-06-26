<script lang="ts">
    import { getContext } from "svelte";

    const counter = getContext<{ count: number }>("counter");
    function increment() {
        counter.count++
    }
</script>

<button onclick={increment} > Increment : {counter.count} </button>