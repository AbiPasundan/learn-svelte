<script>
    import Todo from "./lib/Todo.svelte";

    const todos = $state([
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
    ])

    function remove() {
        todos.shift();
    }
</script>

<button onclick={remove}>Remove</button>

<ul>
    {#each todos as todo (todo.id)}
        <li><Todo {...todo } /></li>
    {/each}
</ul>
