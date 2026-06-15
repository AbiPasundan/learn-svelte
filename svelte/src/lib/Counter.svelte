<script lang="ts">
  let count = $state<number[]>([])
  let total = $derived(count.reduce((a,b) => a + b, 0))

  function increment() {
    count.push(1)
  }
</script>

<h1>counter : {count.join(" + ")} = {total}</h1>

<button onclick={increment}>add</button>