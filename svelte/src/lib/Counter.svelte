<script lang="ts">
  let count = $state<number[]>([])
  // let total = $derived(count.reduce((a,b) => a + b, 0))
  let total = $derived.by(() => {
    let total = 0
    for (let i = 0; i < count.length; i++) {
      total += count[i];
    }
    return total
  })

  function increment() {
    count.push(1)
  }
</script>

<h1>counter : {count.join(" + ")} = {total}</h1>

<button onclick={increment}>add</button>