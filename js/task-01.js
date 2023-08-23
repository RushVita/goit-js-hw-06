const categories = document.querySelector("#categories");
const children = categories.children;
const allChildren = [...children];

console.log("Number of categories:", allChildren.length);

const items = document.querySelectorAll(".item");
const arrItems = [...items];

arrItems.forEach(function (elem) {
  const last = elem.lastElementChild;
  const child = [...last.children];
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", child.length);
});
