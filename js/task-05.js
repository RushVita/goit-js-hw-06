const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", handlerInput);

function handlerInput(evt) {
    span.textContent = evt.currentTarget.value;
    
}

