export function validationForm(form) {
    let errors = {}
//　名字確認
    if (!form.sei) {
        errors.sei = "姓は必須です、入力してください"
    } else if (form.sei.length < 1) {
        errors.sei = "姓は1文字以上で入力してください"
    }
// 名前確認
    if (!form.mei) {
        errors.mei = "名は必須です、入力してください"
    }　else if (form.mei.length < 1) {
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
    } else if (form.email.length < 1) {
        errors.email = "メールアドレスは1文字以上で入力してください"
    }
//パスワードの確認
    if (!form.password1) {
        errors.password = "パスワードは必須です、入力してください"
    } else if (form.password.length < 1) {
        errors.password = "パスワードは1文字以上で入力してください"
    }
//パスワード再確認
    if (!form.passwordConfirm) {
        errors.passwordConfirm = "パスワード確認は必須です、入力してください"
    } else if (form.password !== form.passwordConfirm) {
        errors.passwordConfirm = "パスワードが一致しません"
    }
//郵便番号の確認
    if (!form.postalCode) {
        errors.postalCode = "郵便番号は必須です、入力してください"
    } else if (form.postalCode.length < 1) {
        errors.postalCode = "郵便番号は1文字以上で入力してください"
    }
//住所の確認
    if (!form.address1) {
        errors.address1 = "住所は必須です、入力してください"
    } else if (form.address.length < 1) {
        errors.address1 = "住所は1文字以上で入力してください"
    }
//電話番号(自宅)の確認
    if (!form.homeTel) {
        errors.homeTel = "自宅番号は必須です"
    } else if (form.homeTel.length < 1) {
        errors.homeTel = "自宅番号は1文字以上で入力してください"
    }
//電話番号(携帯)の確認
    if (!form.tel) {
        errors.tel = "携帯番号は必須です"
    } else if (form.tel.length < 1) {
        errors.tel = "携帯番号は1文字以上で入力してください"
    }

    return errors
}