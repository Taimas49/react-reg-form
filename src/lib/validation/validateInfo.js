export default function validateInfo(values) {
    const errors = {
        name: '',
        email: '',
        phone: '',
    };



    const nameValidation = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})?\s?([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
    const emailValidation = /^[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;
    const phoneValidation = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    if (!nameValidation.test(values.name.trim())) {
        errors.name = 'Введите корректное имя'
    } else {errors.name = ''}

    if (!emailValidation.test(values.email.trim())) {
        errors.email = "Введите корректный email"
    }
    if (!phoneValidation.test(values.phone.trim()) || values.phone.length > 14) {
        errors.phone = "Введите корректный номер телефона"
    }
    return errors
}
