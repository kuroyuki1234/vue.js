<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

const registration = () => {
  router.push({ name: 'Registration' });
}
</script>

<template>
  <div class="top">
    <h1>顧客登録画面</h1>
    <div class="explanation">
      <p>このページでは新規のお客様情報を登録できます。</p>
      <p>以下のボタンから登録フォームへ進んでください。</p>
    </div>
    <button type="button" @click="registration">登録する</button>
  </div>
</template>

<style scoped>
.top {
  max-width: 500px;
  margin: 100px auto;
  padding: 40px;
  text-align: center;
  background-color: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  font-size: 28px;
  margin-bottom: 20px;
}

.explanation {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #555;
}

button {
  padding: 15px 30px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

button:focus {
  outline: none;
  background-color: #ffa500;
}
</style>