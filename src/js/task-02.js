const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");
console.log(listEl);

const makeFunctioningredients = options => {
  return options.map(option => {
    const listItemEl = document.createElement('li');
    listItemEl.classList.add('item');
    listItemEl.textContent = option;
  
  return listItemEl
  })
}

const elements = makeFunctioningredients(ingredients);
console.log(elements);
listEl.append(...elements);

