const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");

// for (let i = 0; i < ingredients.length; i++) {
//   const item = document.createElement("li");
//   list.append(item);
//   item.classList.add("item");
//   item.append(ingredients[i]);
//   console.dir(item);
// }

const li = ingredients.map((elem) => {
  const item = document.createElement("li");
  list.classList.add('item');
  item.textContent = elem;
  
  return item
});

list.append(...li)
  

console.log(li);