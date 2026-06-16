<script lang="ts">
    let { id, name, done }: {
        id: number;
        name: string;
        done: boolean;
    } = $props();

    const emojis: Record<number, string> = {
        1: "👺",
        2: "👻",
        3: "👾",
        4: "☠️",
    };

    const emoji = emojis[id];
    console.log(emoji);
    
</script>

{emoji}

{#if done}
    <strike> {id} - {name} </strike>
{:else}
    {id} - {name}
{/if}
