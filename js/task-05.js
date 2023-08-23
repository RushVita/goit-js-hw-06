const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", handlerInput);

function handlerInput(evt) {
  if (span.textContent !== "") {
    span.textContent = evt.currentTarget.value;
  } else {
      span.textContent = "Anonymous";
  }
}
