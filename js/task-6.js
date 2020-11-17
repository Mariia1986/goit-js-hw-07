const inputRef = document.getElementById('validation-input');
inputRef.addEventListener('blur', handlerInpReq);
inputRef.addEventListener('keydown', handlerInp);
function handlerInpReq() {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
}

function handlerInp() {
  inputRef.classList.remove('valid', 'invalid');
}
