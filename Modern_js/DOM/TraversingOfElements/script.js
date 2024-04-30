let output;

let parent = document.querySelector(".parent");

let last;
last = parent.lastElementChild;

let child = document.querySelector(".child");
child.parentElement.style.border = "2px solid #ccc";
child.parentElement.style.padding = "2px"
// sibling element
let secondelement = document.querySelector('.child:nth-child(2)');
output = secondelement.parentElement.style.backgroundColor = '#ccc';
console.log(secondelement);
