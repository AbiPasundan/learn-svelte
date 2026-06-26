<script lang="ts">
    import { setContext } from "svelte";
    import ContextCounter from "./lib/ContextCounter.svelte";
    const counter = $state({ count: 0 });
    setContext("counter", counter);
</script>

<ContextCounter />
<ContextCounter />
<ContextCounter />
