
const inputRef = document.getElementById('validation-input')
inputRef.addEventListener("blur", handlerInpReq)
function handlerInpReq() {
inputRef.value.length === Number(inputRef.dataset.length) ? 
inputRef.classList.add('valid') :
inputRef.classList.add('invalid')

}
