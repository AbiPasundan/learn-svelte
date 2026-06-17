<script lang="ts">
    import Todo from "./lib/Todo.svelte";

    type Todo = {
        id: number;
        name: string;
    };

    let todos = $state<Todo[]>([
        {
            id: 1,
            name: "1",
        },
    ]);

    let id = 0;

    function add(e: SubmitEvent) {
        e.preventDefault();
        const input = document.getElementById("todo") as HTMLInputElement;
        todos.push({ id: id++, name: input.value });
        input.value = "";
    }

    function remove(id: any) {
        todos = todos.filter(item => item.id !== id)
    }
</script>

<form onsubmit={add}>
    <input type="text" id="todo" />
    <button type="submit"> Add </button>
</form>

<ul>
    {#each todos as todo (todo.id)}
        <li><Todo {...todo} /></li>
        <button onclick={() => remove(todo.id)}>Remove</button>
    {/each}
</ul>
