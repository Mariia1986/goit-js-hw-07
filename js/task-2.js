const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.getElementById('ingredients');
const liArr=[]
ingredients.forEach(el => {
  
  const liEl = document.createElement('li');
  
  liArr.push(liEl)
  liEl.textContent = el;
});
console.log(liArr.join(''))

// ulRef.append(liArr)