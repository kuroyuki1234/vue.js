<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter();

const labelMap = ref({
  sei: "姓",
  mei: "名",
  seikana: "セイ",
  meikana: "メイ",
  email: "メールアドレス",
  password: "パスワード",
  passwordConfirm: "パスワード確認",
  postcode: "郵便番号",
  address1: "住所",
  address2: "ビル・部屋番号",
    tel: "電話番号",
    telType: "電話番号の種類",
    homeTel: "自宅",
    mobileTel: "携帯",
  
});


const saveForm = ref(JSON.parse(localStorage.getItem('registrationForm') || '{}'));
console.log(saveForm);

const gotoHome = () => {
  router.push({ name: 'Top' });
}


</script>

<template>
  <div class="completion">
    <p class="registration">{{ saveForm.sei }}{{ saveForm.mei }} 様</p>
    <p class="registration">ご登録ありがとうございます！</p>
    <p class="comment">Registration is now complete.</p>
    <p class="complete">以下の内容で登録されました</p>

    <ul class="form-summary">
      <li v-for="(value, key) in saveForm" :key="key" >
        <strong>{{ labelMap[key] || key }}：</strong> {{ value }}
      </li>
    </ul>

    <button class="top" @click="gotoHome">TOPへ戻る</button>
  </div>
</template>

<style scoped>
.completion {
  text-align: center;
  padding: 40px 20px;
  background-color: #fff8f0;
  font-family: "Arial", sans-serif;
  min-height: 100vh;
}

.registration {
  font-size: 32px;
  font-weight: bold;
  color: #444;
  margin: 10px 0;
}

.comment {
  font-size: 18px;
  color: #777;
  margin-bottom: 20px;
}

.complete {
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 30px 0 20px;
  display: inline-block;
}

.form-summary {
  list-style: none;
  padding: 0;
  margin: 0 auto 40px;
  max-width: 500px;
  text-align: left;
}

.form-summary li {
  font-size: 16px;
  padding: 10px;
  border-bottom: 1px dashed #ccc;
}

.form-summary li strong {
  color: #555;
}

.top {
  padding: 12px 30px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.top:hover {
  background-color: #0056b3;
}
</style>