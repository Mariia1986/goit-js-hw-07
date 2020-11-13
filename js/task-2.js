const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.getElementById('ingredients');
 ingredients.forEach(el => {const liEl =document.createElement('li');
 liEl.textContent = el;
 ulRef.append(liEl);})

