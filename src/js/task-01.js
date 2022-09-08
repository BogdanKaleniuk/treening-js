const totalCat = document.querySelectorAll('.item');
console.log('Number of categories:', totalCat.length);
const categoryAll = totalCat.forEach(element => {
console.log(`'Category:', ${element.firstElementChild.textContent}`);
console.log(`Elements:, ${element.lastElementChild.children.length}`);
});
