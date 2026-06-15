<script lang="ts">
    let person = $state.raw({
        firstName: "",
        lastName: "",
    })

    function sayHello() {
        person = {
            firstName: (document.getElementById("firstName") as HTMLInputElement).value,
            lastName: (document.getElementById("lastName") as HTMLInputElement).value,
        }
    }
</script>

<div>
    <input type="text" id="firstName" placeholder="First Name">
    <input type="text" id="lastName" placeholder="Last Name">

    <button onclick={sayHello}>Say Hello</button>
    <h1>Hello {person.firstName} {person.lastName}</h1>
</div>
