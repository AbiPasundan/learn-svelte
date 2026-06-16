<script>
    import Todo from "./lib/Todo.svelte";

    const todos = [
        {
            id: 1,
            name: "name",
            done: true,
        },
        {
            id: 2,
            name: "no name",
            done: true,
        },
        {
            id: 3,
            name: "nameles",
            done: false,
        },
    ];
</script>

<ul>
    {#each todos as todos}
        <li><Todo {...todos} /></li>
    {/each}
</ul>
