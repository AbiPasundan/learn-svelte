<script lang="ts">
    type Props = {
        id: number;
        name: string;
        onedit: (id: number, name: string) => void;
    };

    const { id, name, onedit }: Props = $props();

    function save() {
        const input = document.getElementById(String(id));
        if (input instanceof HTMLInputElement) {
            onedit(id, input.value);
        }
    }
</script>

{id}
<input type="text" id={String(id)} value={name} />
<button onclick={save}>Save</button>
