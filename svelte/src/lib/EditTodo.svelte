<script lang="ts">
    type Props = {
        id: string;
        name: string;
        onedit: (id: string, name: string) => void;
    };

    const { id, name, onedit }: Props = $props();

    function save() {
        const input = document.getElementById(id);
        if (input instanceof HTMLInputElement) {
            onedit(id, input.value);
        }
    }
</script>

{id}
<input type="text" {id} value={name} />
<button onclick={save}>Save</button>
