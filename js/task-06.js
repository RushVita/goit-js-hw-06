const input = document.querySelector("#validation-input");

input.addEventListener("blur", handler);

function handler(evt) {
  if (input.getAttribute("data-length") > input.value.length) {
    input.classList.add("invalid");
  } else {
    input.classList.add("valid");
  }
}
