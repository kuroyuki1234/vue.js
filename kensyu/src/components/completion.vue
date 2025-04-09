<script setup>
import { hydrateOnMediaQuery, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const form = ref({
    sei: "",
    mei: "",
    seikana: "",
    meikana: "",
    email: "",
    password: "",
    passwordConfirm: "",
    postcode: "",
    address1: "",
    address2: "",
    homeTel: "",
    tel: ""
});
const Home = () => {
    window.location.href = '/top';
}

const Router = useRouter();

// const Home = () => {
//     this.push({ name: 'top'});
// }

const saveForm = JSON.parse(localStorage.getItem('registrationForm'));
console.log(saveForm);

</script>

<template>
    <div class="completion">
        <p class = "registration">{{ saveForm.sei }}様登録完了いたしました。</p>
        <!-- <h1>登録完了いたしました</h1> -->
        <p>Registration is now complete.</p>
    </div>
    <button class="top"  @click="Home">TOPへ</button>
</template>

<style scoped>
.completion {
    text-align: center;
    padding: 10px;
}
.registration {
    padding: 0%;
    font-size: 30px;
    color: #333;
    font-weight: bold;
    padding: 10px;
    background-color: #ed06bb39; /* 背景色 */
    border-radius: 5px; /* 角丸 */
    border: 1px solid #ccc; /* 枠線 */
}
top{
    padding: 0 ,0 ,0 ,0;
    margin-top: 200px;
    padding: 10px 20px;
    background-color: #4CAF50; /* 緑色 */
    color: white; /* 白色 */
    border: none; /* 枠線なし */
    border-radius: 5px; /* 角丸 */
    cursor: pointer; /* カーソルをポイン5タに */
    font-size: 16px; /* フォントサイズ */
    transition: background-color 0.3s; /* ホバー時のアニメーション */
}
</style>