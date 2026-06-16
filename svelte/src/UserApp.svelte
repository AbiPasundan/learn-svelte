<script>
    import UserRow from "./lib/UserRow.svelte";

    const user = {
        id: 1,
        name: "John",
        address: "123 main St",
    }
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
        <UserRow {...user} />
    </tbody>
</table>