<script lang="ts">
    import { counter } from "../state/counter";

    function increment(): void {
        $counter++;
    }
</script>

<button onclick={increment} >Increment : {$counter} </button>