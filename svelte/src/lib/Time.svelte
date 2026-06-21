<script lang="ts">
    const time = (node: any) => {
        const text = node.textContent;

        $effect(() => {
            const id = setInterval(() => {
                node.textContent = text + " " + new Date().toLocaleTimeString();
            }, 1000);

            return () => clearInterval(id);
        });
    };
</script>

<h1 use:time >Title</h1>
<p use:time >Title</p>