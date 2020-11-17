const liRef = document.querySelectorAll('.item');

console.log(`В списке ${liRef.length} категории`);
liRef.forEach((el, i, arr) => {
  console.log(`Категория: ${el.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${el.lastElementChild.childElementCount}`);
});
