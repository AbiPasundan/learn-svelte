<script lang="ts">
  let count: number = $state(0)
  const increment = () => {
    count += 1
  }
  console.log("hello svelte")
</script>

<button type="button" class="counter" onclick={increment}>
  Count is {count}
</button>
