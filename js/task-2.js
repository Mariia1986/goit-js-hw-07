const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.getElementById('ingredients');
 const liArr =ingredients.map(el => {
  const liEl = document.createElement('li');
 
  liEl.textContent = el;
  return liEl
});

ulRef.append(...liArr);
