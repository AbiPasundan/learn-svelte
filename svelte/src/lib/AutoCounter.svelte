<script lang="ts">
  let counter = $state<number>(0)
  let interval = $state<number>(1000)

  function increment() {
    interval += 1000;
  }

  $effect(() => {
    const id = setInterval(() => {
       counter++ 
    }, interval);
    return () => clearInterval(id)
  })

</script>

<h1>counter : {counter}</h1>

<button onclick={increment}>increment Interval : {interval}</button>