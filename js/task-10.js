function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elements = {
  controls: document.querySelector("#controls"),
  createBtn: document.querySelector("#controls button[data-create]"),
  destroyBtn: document.querySelector("#controls button[data-destroy]"),
  box: document.querySelector("#boxes"),
};
const { controls, createBtn, destroyBtn, box } = elements;

createBtn.addEventListener("click", handlerCreate);
let size = 30;
function handlerCreate(evt) {
  const numbElem = controls.firstElementChild.value;
  const arrDiv = [];
  
  for (let i = 0; i < numbElem; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    arrDiv.push(div);

    size += 10;
  }
  box.append(...arrDiv);
  console.log(arrDiv);
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes(evt) {
  size = 30;
  box.innerHTML = "";
}
