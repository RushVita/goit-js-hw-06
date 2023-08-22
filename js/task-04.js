const elements = {
  counter: document.querySelector("#counter"),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

const { counter, decrementBtn, incrementBtn, value } = elements;

// console.log(elements.counter);
// console.log(elements.decrementBtn);
// console.log(elements.incrementBtn);
// console.log(elements.value);

let counterValue = value.textContent;
let akam = 0;
// console.log(counterValue);

decrementBtn.addEventListener("click", handlerClickPlus);
incrementBtn.addEventListener("click", handlerClickMinus);

function handlerClickMinus(evt) {
  evt.preventDefault();

  akam += 1;
  counterValue = akam;
  value.textContent = counterValue;

  //   console.log(evt.currentTarget);
}

function handlerClickPlus(evt) {
  evt.preventDefault();

  akam -= 1;
  counterValue = akam;
  value.textContent = counterValue;
}
