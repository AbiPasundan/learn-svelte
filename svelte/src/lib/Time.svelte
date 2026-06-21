<script lang="ts">
    const time = (node: any, interval: any) => {
        const text = node.textContent;

        $effect(() => {
            const id = setInterval(() => {
                node.textContent = text + " " + new Date().getTime();
            }, interval);

            return () => clearInterval(id);
        });
    };
</script>

<h1 use:time={600} >Title</h1>
<p use:time={1100} >Title</p>