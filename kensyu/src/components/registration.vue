<script setup>
import { ref,reactive } from 'vue'
import { useRouter } from 'vue-router'
import { validationForm } from './Validation.js';


const router = useRouter();

// const form = ref({
//     sei: "",
//     mei: "",
//     email: "",
//     password: "",
//     seikana: "",
//     meikana: "",
//     postcode: "",
//     address: "",
//     number: "",
// });
const form = reactive({
    sei: "",
    mei: "",
    email: "",
    password: "",
    seikana: "",
    meikana: "",
    postcode: "",
    address: "",
    number: "",
});

const errors = reactive({});


const validateForm = () => {
    Object.assing(errors, validateForm(form));

    if (Object.keys(errors).length === 0) {
        console.log("送信成功" , form);
    }else {
        console.log("送信失敗", errors);
    };

    console.log("Form submitted:", form);

    // Object.assign(errors, {
    //     sei: form.sei.length < 3 ? "名前は3文字以上必要です" : "",
    //     mei: form.mei.length < 3 ? "名前は3文字以上必要です" : "",
    //     seikana: form.seikana.length < 3 ? "名前は3文字以上必要です" : "",
    //     meikana: form.meikana.length < 3 ? "名前は3文字以上必要です" : "",
    //     email: !form.email.includes("@") ? "メールアドレスが無効です" : "",
    //     password: form.password.length < 6 || form.password.length > 12 ? "パスワードは6~12文字である必要があります" : "",
    //     postcode: form.postcode.length < 7 ? "郵便番号は7桁である必要があります" : "",
    //     address: form.address.length < 5 ? "住所は5文字以上必要です" : "",
    //     number: form.number.length < 10 ? "電話番号は10桁以上必要です" : "",
    // });
    // Add your form submission logic here
};

const Completion = () => {
    const hasErrors = validateForm();
    if (!isValid) {
        console.log("送信成功", form);
    } else {
        console.log("送信失敗", errors);
    }
    // router.push({ name: 'Completion' });
}

const handleEnter = () => {
    console.log("送信中")
}

</script>

<template>
    <div class="registration">
        <p>
            登録内容
        </p>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="sei">姓：</label>
                <input type="text" id="sei" v-model="form.sei" placeholder="山田" @keyup.enter="handleEnter"required />
                <p v-if="errors.sei" class="error"> {{ errors.sei }} </p>
                <label for="mei">名：</label>
                <input type="text" id="mei" v-model="form.mei" placeholder="太郎" required />
            </div>
            <div class="form-group">
                <label for="seikana">セイ：</label>
                <input type="text" id="seikana" v-model="form.seikana" placeholder="ヤマダ" required />
                <label for="meikana">メイ：</label>
                <input type="text" id="meikana" v-model="form.meikana" placeholder="タロウ" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="form.email" placeholder="agobu@gmail.com" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="form.password" required minilength="6" maxlength="12" placeholder="6~12文字のPW"/>
            </div>
            <div class="form-group">
                <label for="postcode">郵便番号：</label>
                <input type="text" id="postcode" v-model="form.postcode" placeholder="160-0023" required />
            </div>
            <div class="form-group">
                <label for="address">住所：</label>
                <input type="text" id="address" v-model="form.address" placeholder="東京都新宿区西新宿7-21-1" required />
            </div>
            <div class="form-group">
                <label for="address2">ビル名や部屋番号</label>
                <input type="text" id="address2" v-model="form.address" placeholder="新宿ロイヤルビル201" required />
            </div>
            <div class="form-group">
                <label for="number">電話番号：</label>
                <input type="text" id="number" v-model="form.number" placeholder="0369086228" required />
            </div>
            <div class="form-group">
                
            </div>
            <div class="form-group">
                
            </div>
            <button type="submit" @click="Completion">登録</button>
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