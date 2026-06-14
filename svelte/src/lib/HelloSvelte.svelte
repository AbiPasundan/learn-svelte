<script lang="ts">
  import Logo from "./Logo.svelte";

  console.log("hello svelte");
  const name = "svelte";
  const content = "<p>Hello World</p>"
</script>

<style>
  p {
    color: red;
  }
</style>


<p>
  Hello {name}
</p>

{@html content}

<Logo />