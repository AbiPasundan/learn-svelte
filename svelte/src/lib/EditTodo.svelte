<script lang="ts">
    type Props = {
        id: number;
        name: string;
        onedit: (id: number, name: string) => void;
    };

    let { id, name, onedit }: Props = $props();

    // function save() {
    //     const input = document.getElementById(String(id));
    //     if (input instanceof HTMLInputElement) {
    //         onedit(id, input.value);
    //     }
    // }
    function save() {
        onedit(id, name)
    }
</script>

{id}
<input type="text" id={String(id)} bind:value={name} />
<button onclick={save}>Save</button>
