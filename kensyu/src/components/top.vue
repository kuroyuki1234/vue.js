<script setup>
import { ref } from 'vue'
import Registration from './registration.vue';
import { useRouter } from 'vue-router'

const registration = () => {
     window.location.href = '/registration';
    // window.location.href = 'https://chatgpt.com/';
}


</script>

<template>
    <div class="top">
        <!-- <h1>Welcome to the Top Component</h1>
        <p>This is a placeholder for your content.</p> -->
        <h1>顧客登録画面</h1>
        <div class="explanation"></div>
        <p>
            お客様の情報を登録する場合は”登録する”を選択！
        </p>
        <button type="submit" @click="registration">登録する</button>
    </div>
</template>

<style scoped>
.top {
    text-align: center;
    margin-top: 20px;
}
.explanation {
    font-size: 18px;
    margin-bottom: 20px;
    color:aquamarine;

}
button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:focus {
    background-color: #ffcc00;
}
h1 {
    color: #7d2626;
    font-size: 24px;
    margin-bottom: 10px;
}

</style>