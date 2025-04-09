export function validationForm(form) {
    const errors = {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/
    const postalCodeRegex = /^\d{3}-\d{4}$/
    const telRegex = /^\d{2,4}-\d{2,4}-\d{4}$/
    const homeTelRegex = /^\d{2,4}-\d{2,4}-\d{4}$/

//　名字確認
    if (!form.sei) {
        errors.sei = "姓は必須です、入力してください"
    } else if (form.sei.length < 1) {
        errors.sei = "姓は1文字以上で入力してください"
    }
// 名前確認
    if (!form.mei) {
        errors.mei = "名は必須です、入力してください"
    } else if (form.mei.length < 1) {
        errors.mei = "名は1文字以上で入力してください"
    }
// 名字のカナ確認
    if (!form.seikana) {
        errors.seikana = "セイは必須です、入力してください"
    } else if (form.seikana.length < 1) {
        errors.seikana = "セイは1文字以上で入力してください"
    }
// 名前のカナ確認
    if (!form.meikana) {
        errors.meikana = "メイは必須です、入力してください"
    } else if (form.meikana.length < 1) {
        errors.meikana = "メイは1文字以上で入力してください"
    }
//メールの確認
    if (!form.email) {
        errors.email = "メールアドレスは必須です、入力してください"
    } else if (!form.email || !emailRegex.test(form.email)) {
        errors.email = "メールアドレスの形式が正しくありません"
    }
//パスワードの確認
    if (!form.password) {
        errors.password = "パスワードは必須です、入力してください"
    } else if (!form.password || !passwordRegex.test(form.password)) {
        errors.password = "8文字以上、英大文字・小文字・数字を含む必要があります";
    }

//パスワード再確認
    if (form.password !== form.passwordConfirm) {
        errors.passwordConfirm = "パスワードが一致しません"
    }
//郵便番号の確認
    // if (!form.postcode) {
    //     errors.postcode = "郵便番号は必須です、入力してください"
    // } else if (form.postcode.length < 1) {
    //     errors.postcode = "郵便番号は1文字以上で入力してください"
    // } else if (form.postalCode === ! "160-0023") {
    //     form.address1 = "東京都新宿区西新宿7-21-1"
    // }
//住所の確認
    if (!form.address1) {
        errors.address1 = "住所は必須です、入力してください"
    } else if (form.address1.length < 1) {
        errors.address1 = "住所は1文字以上で入力してください"
    }
//電話番号(自宅)の確認
    if (!form.homeTel) {
        errors.homeTel = "自宅番号は必須です"
    } else if (!form.number || !phoneRegex.test(form.number)) {
    errors.number = "ハイフンなしの10〜11桁の電話番号を入力してください";
    }
//電話番号(携帯)の確認
    if (!form.tel) {
        errors.tel = "携帯番号は必須です"
    } else if (!form.number || !phoneRegex.test(form.number)) {
    errors.number = "ハイフンなしの10〜11桁の電話番号を入力してください";
    }
    
    return errors;
}