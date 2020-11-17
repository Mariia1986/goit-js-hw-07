const inpRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');
inpRef.addEventListener('input', changeSize);
function changeSize() {
  textRef.style.fontSize = inpRef.value + 'px';
}
