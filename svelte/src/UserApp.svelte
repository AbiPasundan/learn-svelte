<script>
    import UserRow from "./lib/UserRow.svelte";
</script>

<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
        </tr>
    </thead>
    <tbody>
        <UserRow id="1" name="Hello" address="123 main St" />
    </tbody>
</table>