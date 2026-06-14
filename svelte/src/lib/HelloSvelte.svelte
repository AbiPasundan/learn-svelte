<script lang="ts">
  import Logo from "./Logo.svelte";

  console.log("hello svelte");
  const name = "svelte";
</script>

<style>
  p {
    color: red;
  }
</style>


<p>
  Hello {name}
</p>

<Logo />