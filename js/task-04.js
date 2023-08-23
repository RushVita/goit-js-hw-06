const elements = {
  counter: document.querySelector("#counter"),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

const { counter, decrementBtn, incrementBtn, value } = elements;

let counterValue = 0;

decrementBtn.addEventListener("click", handlerClickPlus);
incrementBtn.addEventListener("click", handlerClickMinus);

function handlerClickMinus(evt) {
  evt.preventDefault();
  counterValue += 1;
  value.textContent = counterValue;
}

function handlerClickPlus(evt) {
  evt.preventDefault();
  counterValue -= 1;
  value.textContent = counterValue;
}
