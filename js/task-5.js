const inputNameRef = document.getElementById('name-input');
const outputNameRef = document.getElementById('name-output');

inputNameRef.addEventListener('input', handlerInpName);

function handlerInpName(event) {
  outputNameRef.textContent =
    inputNameRef.value === '' ? 'незнакомец' : event.target.value.trim();
}
