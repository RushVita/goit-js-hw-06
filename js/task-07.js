const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", handler);
input.value = "16";
function handler(evt) {
  span.style.fontSize = `${evt.currentTarget.value}px`;
}

const list = document.querySelector(".list");
