const inputNameRef = document.getElementById('name-input')
const outputNameRef = document.getElementById('name-output')

inputNameRef.addEventListener("input", handlerInpName)

function handlerInpName(event){
    
    inputNameRef.value === '' ? 
    outputNameRef.textContent='незнакомец' 
    : outputNameRef.textContent = event.target.value; }



