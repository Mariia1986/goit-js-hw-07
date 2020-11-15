
const inputRef = document.getElementById('validation-input')
inputRef.addEventListener("blur", handlerInpReq)
inputRef.addEventListener("keydown", handlerInp)
function handlerInpReq() {
inputRef.value.length === Number(inputRef.dataset.length) ? 
inputRef.classList.add('valid') :
inputRef.classList.add('invalid')
// function handlerIn(){
//     inputRef.classList.remove('valid','invalid')
}

function handlerInp(){
    inputRef.classList.remove('valid','invalid')
}