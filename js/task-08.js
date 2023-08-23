const elemenst = {
  form: document.querySelector(".login-form"),
};
const { form } = elemenst;
// console.log(form.lastElementChild);
// console.dir(form);

form.addEventListener('submit', handler);

function handler(evt) {
    evt.preventDefault();

    // console.log(evt.currentTarget.elements);
    const { email, password } = evt.currentTarget.elements;
    // console.log(email.value);
    if (email.value === '') {
        return alert('Enter email')
    }
    if (password.value === '') {
        return alert("Enter password");
    }
    const user = {
        name: email.value,
        val: password.value
    }
    
    console.log("Name:", user.name);
    console.log("Value:", user.val);

    form.reset();


}