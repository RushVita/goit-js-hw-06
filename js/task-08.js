const form = document.querySelector(".login-form");
form.addEventListener("submit", handler);

function handler(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (!email.value || !password.value) {
    return alert("Всі поля повинні бути заповнені!");
  }
  const user = {
    email: email.value,
    password: password.value,
  };
  console.log(user);
  form.reset();
}
