const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liForEach = ingredients.forEach(ingredient => {
  let elemLi = document.createElement('li');
  elemLi.innerHTML = ingredient;
  let ulGo = document.querySelector('ul');
  ulGo.append(elemLi);;
});
console.log(liForEach);