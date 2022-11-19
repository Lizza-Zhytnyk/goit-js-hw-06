const refs = {
    input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('blur', inputValidation)

const validLength = Number(refs.input.dataset.length);

function inputValidation(event) {
    refs.input.classList.remove("invalid")
    if (refs.input.value.length === validLength) {
        refs.input.classList.add("valid");
    } else {
        refs.input.classList.add("invalid");
    }
}