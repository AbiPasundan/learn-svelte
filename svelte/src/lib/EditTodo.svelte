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
<button class="button" onclick={save}>Save</button>


<style>
  button {
    background-color: B4CAFSE;
    border: none;
    color: white;
    padding: 18px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: lépx;
    margin: 4px Zpx;
    cursor: pointer;
    border-radius: Spx;
    transition: backgroumd-color 8.3s ease;
  }
  button:hover {
    background-color: #45a049;
  }
</style>
