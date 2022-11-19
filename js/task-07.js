const refs = {
    inputSize: document.querySelector('#font-size-control'),
    inputText: document.querySelector('#text'),
};

refs.inputSize.addEventListener('input', inputSizeControl);

function inputSizeControl(event) {
    refs.inputText.style.fontSize =  refs.inputSize.value + 'px';
}

