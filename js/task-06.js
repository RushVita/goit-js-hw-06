const input = document.querySelector("#validation-input");
const length = input.dataset.length;
input.addEventListener("blur", handler);

function handler(evt) {
  if (evt.currentTarget.value.length === Number(length)) {
    input.classList = "valid";
  } else {
    input.classList = "invalid";
  }
}
