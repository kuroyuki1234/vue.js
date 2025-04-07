export function validationForm(submitForm) {
    let errors = {}
    if (!submitForm.sei) errors.sei = "姓は必須です"
    if (!submitForm.mei) errors.mei = "名は必須です"

    return errors
}