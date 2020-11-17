const btnDecRef = document.querySelector('[data-action="decrement"]');
const btnIncRef = document.querySelector('[data-action="increment"]');
const valueRef = document.getElementById('value');

btnDecRef.addEventListener('click', handlerFuncDec);
btnIncRef.addEventListener('click', handlerFuncInc);
let counterValue = 0;

function handlerFuncDec() {
  valueRef.textContent = counterValue > 0 ? (counterValue -= 1) : 0;
}

function handlerFuncInc() {
  valueRef.textContent = counterValue += 1;
}
