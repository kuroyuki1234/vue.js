<script>
export default {
    name: "Registration",
    data() {
        return {
            form: {
                username: "",
                email: "",
                password: "",
            },
        };
    },
    methods: {
        submitForm() {
            console.log("Form submitted:", this.form);
            // Add your form submission logic here
        },
    },
};
</script>

<template>
    <div class="registration">
        <h1>Registration</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="form.username" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="form.password" required />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<style scoped>
.registration {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.form-group {
    margin-bottom: 15px;
}
label {
    display: block;
    margin-bottom: 5px;
}
input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}
button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #0056b3;
}
</style>