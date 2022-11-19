const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', formElSend);

function formElSend(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (email === '' || password === '') {
        alert('Заповнені не всі поля! Заповніть, будь ласка, усі дані!')
        return
    }
    const formData = {
        email,
        password
    }
    console.log(formData);
    formEl.reset()
}
