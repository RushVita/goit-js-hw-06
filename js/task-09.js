function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  container: document.querySelector(".widget"),
  bgColor: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

const { container, bgColor, button } = elements;

// console.log(container);
// console.log(bgColor);
// console.log(button);

button.addEventListener("click", handlerBg);

function handlerBg(evt) {
  const body = container.parentNode;
  // console.log(body);
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = `${randomColor}`;
  bgColor.textContent = randomColor;

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  console.log(randomColor);
}
