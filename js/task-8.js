const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const amountRef = document.getElementById('input');
const divRef = document.getElementById('boxes');
divRef.style.display = 'flex';

renderRef.addEventListener('click', renderHendl);
destroyRef.addEventListener('click', removeHendl);
let arr = [];
const createBoxes = function (amount) {
  let x = 20;
  for (let i = 1; i <= amount; i += 1) {
    x += 10;
    const div = document.createElement('div');
     
    div.classList.add('new-box');
    div.style.border = '2px solid blue';
    div.style.width = x + 'px';
    div.style.height = x + 'px';
    div.style.margin = 10 + 'px';
    div.style.background =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
      arr.push(div)
    
  }
  
 divRef.append(...arr);
};



function renderHendl() {
  createBoxes(amountRef.value);
}

function removeHendl() {
  divRef.innerHTML = '';
}
