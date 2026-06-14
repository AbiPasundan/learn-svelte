<script lang="ts">
  console.log("hello svelte")
  const name = "svelte"
  const src = "https://avatars.githubusercontent.com/u/125271650?v=4"
</script>

<style>
    p {
        color: red;
    }
</style>

<p>
  Hello {name}
</p>

<img {src} alt="name">