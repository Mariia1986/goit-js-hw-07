
const liRef = document.querySelectorAll('.item')

liRef.forEach((el, i, arr)=>{
    console.log(`В списке ${arr.length} категории`);
    console.log(`Категория: ${el.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${el.lastElementChild.childElementCount}`)
})