<script lang="ts">
    import EditTodo from "./lib/EditTodo.svelte";
    import Todo from "./lib/Todo.svelte";

    type Todo = {
        id: number;
        name: string;
        edit: boolean;
    };

    let todos = $state<Todo[]>([]);
    let name = $state("");
    let id: number = 1;

    function add(e: SubmitEvent) {
        e.preventDefault();
        todos.push({ id: id++, name: name, edit: false });
        name = "";
    }

    function remove(id: number) {
        todos = todos.filter((item) => item.id !== id);
    }

    function edit(id: number) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos[i] = { ...todos[i], edit: true };
            }
        }
    }
    function onEdit(id: number, name: string) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos[i] = { id, name, edit: false };
            }
        }
    }
</script>

<form onsubmit={add}>
    <input type="text" id="todo" bind:value={name} />
    <button type="submit">Add</button>
</form>

<ul>
    {#each todos as todo (todo.id)}
        <li>
            {#if todo.edit}
                <EditTodo id={todo.id} name={todo.name} onedit={onEdit} />
            {:else}
                <Todo {...todo} />
                <button onclick={() => edit(todo.id)}>Edit</button>
                <button onclick={() => remove(todo.id)}>Remove</button>
            {/if}
        </li>
    {/each}
</ul>
