<script setup>
import { ref,reactive } from 'vue'
import { useRouter } from 'vue-router'
import Completion from './Completion.vue';
import { validationForm } from './Validation.js';

const router = useRouter();
const errors = reactive({});
const showAlert = ref(true);

const form = reactive ({
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
    tel: "",

});

// エンター機を押した際の処理を記載(対象の項目についても何をするのかを記載すること)
// const handleEnter = () => {
//     console.log("送信中")
// }

function validateField(fieldName) {
    console.log('Validating field:', fieldName)
    console.log('submitForm:', form)
    const allErrors = validationForm(form);
    errors[fieldName] = allErrors[fieldName] || ''
    console.log('errors:', errors)
}


async function fetchAddressFromZip(postcode) {
  const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postcode}`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.results && data.results.length > 0) {
      const result = data.results[0];
      return `${result.address1}${result.address2}${result.address3}`;
    } else {
      return null; // 該当なし
    }
  } catch (err) {
    console.error("郵便番号APIエラー:", err);
    return null;
  }
}

async function handleZipBlur() {
  const address = await fetchAddressFromZip(form.postcode.replace('-', ''));
  if (address) {
    form.address1 = address;
  } else if (form.postcode.length < 1) {
    errors.postcode = "郵便番号を入力してください";
  } else if (form.postcode.length < 7) {
    errors.postcode = "郵便番号は7桁で入力してください";
  } else {
    errors.postcode = "該当する住所が見つかりませんでした";
  }
}

const validateForm = () => {
    console.log("Form submitted:", form);
};

const completion = () => {
    const allErrors = validateForm(form) || {};
    Object.assign(errors, allErrors);

    const hasErrows = Object.keys(errors).length > 0;

    if (hasErrows) {
        localStorage.setItem('registrationForm', JSON.stringify(form));
        console.log('保存完了！');
        router.push({ name: 'Completion' });
    } else {
        console.log('バリデーションエラー、登録できません', allErrors);
    }

    // if (Object.keys(errors).length === 0) {
    //     localStorage.setItem('registrationForm', JSON.stringify(form));
    //     console.log('保存完了！');
    //     router.push({ name: 'Completion' });
    // } else {
    //     console.log('バリデーションエラー、登録できません', allErrors);
    // }
    
}


</script>

<template>
    <div class="registration">
        <h1>
            登録項目
        </h1>
        <!-- <form @submit.prevent="submitForm"> -->
            <div class="form-group">
                <label for="sei">姓：</label>
                <p v-if="errors.sei" class="error"> {{ errors.sei }} </p>
                <input type="text" id="sei" v-model="form.sei"required @blur="() => validateField('sei')"  maxlength="6" placeholder="山田" />
                
                <label for="mei">名：</label>
                <input type="text" id="mei" v-model="form.mei"required @blur="() => validateField('mei')" placeholder="太郎" />
                <p v-if="errors.mei" class="error"> {{ errors.mei }} </p>
            </div>
            <div class="form-group">
                <label for="seikana">セイ：</label>
                <input type="text" id="seikana" v-model="form.seikana" required @blur="() => validateField('seikana')" maxlength="6" placeholder="ヤマダ" />
                <p v-if="errors.seikana" class="error"> {{ errors.seikana }} </p>
                <label for="meikana">メイ：</label>
                <input type="text" id="meikana" v-model="form.meikana" required @blur="() => validateField('meikana')" placeholder="タロウ" />
                <p v-if="errors.meikana" class="error"> {{ errors.meikana }} </p>
            </div>
            <div class="form-group">
                <label for="email">Email：</label>
                <input type="email" id="email" v-model="form.email" required @blur="() => validateField('email')" placeholder="agobu@gmail.com" />
                <p v-if="errors.email" class="error"> {{ errors.email }} </p>
            </div>
            <div class="form-group">
                <label for="password">Password：</label>
                <input type="password" id="password" v-model="form.password" required @blur="() => validateField('password')" minlength="8" maxlength="20" placeholder="8文字以上のPW"/>
                <p v-if="errors.password" class="error"> {{ errors.password }} </p>
            </div>
            <div class="form-group">
                <label for="password">(再確認用)Password：</label>
                <input type="password" id="passwordConfirm" v-model="form.passwordConfirm" required @blur="() => validateField('passwordConfirm')" placeholder="確認用PW"/>
                <p v-if="errors.passwordConfirm" class="error"> {{ errors.passwordConfirm }} </p>
            </div>
            <div class="form-group">
                <label for="postcode">郵便番号：</label>
                <input type="text" id="postcode" v-model="form.postcode" required @blur="() => handleZipBlur('postcode')" maxlength="7" placeholder="1600023" />
                <p v-if="errors.postcode" class="error"> {{ errors.postcode }} </p>
            </div>
            <div class="form-group">
                <label for="address">住所：</label>
                <input type="text" id="address1" v-model="form.address1" required @blur="() => validateField('address1')" placeholder="東京都新宿区西新宿7-21-1" />
                <p v-if="errors.address1" class="error"> {{ errors.address1 }} </p>
            </div>
            <div class="form-group">
                <label for="address2">ビル名や部屋番号：</label>
                <input type="text" id="address2" v-model="form.address2" @blur="() => validateField('address2')" placeholder="新宿ロイヤルビル201" />
                <p v-if="errors.address2" class="error"> {{ errors.address2 }} </p>
            </div>
            <div class="form-group">
                <label for="number">電話番号(自宅)：</label>
                <input type="tel" id="tel1" v-model="form.homeTel" required @blur="() => validateField('homeTel')" placeholder="0369086228"  />
                <p v-if="errors.homeTel" class="error"> {{ errors.homeTel }} </p>
            </div>
            <div class="form-group">
                <label for="number">電話番号(携帯)：</label>
                <input type="tel" id="tel2" v-model="form.tel" required @blur="() => validateField('tel')" placeholder="08069086228" />
                <p v-if="errors.tel" class="error"> {{ errors.tel }} </p>
            </div>
            <div class="form-group">
                
            </div>
            <button type="submit" @click="completion">登録</button>
        <!-- </form> -->
    </div>
</template>

<style scoped>
/* .registration {
    max-width: Auto;
    margin: 0 auto;
    padding: 0 auto;
    border: 1px solid #ccc; 
    border-radius: 5px;
} 
.form-group {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 30px;
} */
.error {
    /* color: red;
    font-size: 12px;
    margin-top: 5px; */
    padding: 10px;
    background-color: #f44336; /* 赤色 */
    color: white;
    font-size: 15px;
    border-radius: 3px;
    margin-bottom: 10px;
    position: relative;
}

/* label {
    display: inline-block;
    width: 100px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
    white-space: nowrap;
}
input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
} */
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