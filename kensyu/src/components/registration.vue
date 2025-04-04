<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Completion from './completion.vue';



const form = ref({
    sei: "",
    mei: "",
    email: "",
    password: "",
});

let submitForm = () => {
    console.log("Form submitted:", form.value);
    // Add your form submission logic here
}
const completion = () => {
    window.location.href = '/completion';
}
// export default {
//     name: "Registration",
//     data() {
//         return {
//             form: {
//                 username: "",
//                 email: "",
//                 password: "",
//             },
//         };
//     },
//     methods: {
//         submitForm() {
//             console.log("Form submitted:", this.form);
//             // Add your form submission logic here
//         },
//     },
// };
</script>

<template>
    <div class="registration">
        <p>
            登録内容
        </p>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="sei">姓：</label>
                <input type="text" id="sei" v-model="form.sei" required />
                <label for="mei">名：</label>
                <input type="text" id="mei" v-model="form.mei" required />
            </div>
            <div class="form-group">
                <label for="seikana">セイ：</label>
                <input type="text" id="seikana" v-model="form.seikana" required />
                <label for="meikana">メイ：</label>
                <input type="text" id="meikana" v-model="form.meikana" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="form.password" required minilength="6" maxlength="12" placeholder="6~12文字のPW"/>
            </div>
            <div class="form-group">
                <label for="postcode">郵便番号：</label>
                <input type="text" id="postcode" v-model="form.postcode" required />
            </div>
            <div class="form-group">
                <label for="address">住所：</label>
                <input type="text" id="address" v-model="form.address" required />
            </div>
            <div class="form-group">
                <label for="number">電話番号：</label>
                <input type="text" id="number" v-model="form.number" required />
            </div>
            <div class="form-group">
                
            </div>
            <div class="form-group">
                
            </div>
            <button type="submit" @click="completion">登録</button>
        </form>
    </div>
</template>


<style scoped>
.registration {
    max-width: Auto;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.form-group {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
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