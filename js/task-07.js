const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

console.dir(input);
// span.style.fontSize = '100px';
console.log(span);

input.addEventListener('input', handler);

function handler(evt) {
//    console.log(evt.currentTarget.value);
        span.style.fontSize = `${evt.currentTarget.value}px`;
//    console.log(span.style.fontSize);
    
}