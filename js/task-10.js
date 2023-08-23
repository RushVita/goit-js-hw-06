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

function handlerCreate(evt) {
  const numbElem = controls.firstElementChild.value;
  // console.log(numbElem);
  function createBoxes(amount) {
    for (let i = 0; i < numbElem; i++) {
      const size = i * 10 + 30;

      box.insertAdjacentHTML("beforeend", `<div> </div>`);
      box.lastElementChild.style.backgroundColor = getRandomHexColor();
      box.lastElementChild.style.width = `${size}px`;
      box.lastElementChild.style.height = `${size}px`;

    }
  }
  createBoxes(numbElem);
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes(evt) {
  box.innerHTML = "";
}
