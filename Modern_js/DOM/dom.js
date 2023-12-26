// let out = document.all;
// for (let i in out){
//     console.log(i,'-',out[i]);
// }
// let out = document.documentElement; // gives all elements

// out = document.head.children;

// out = document.doctype;
// // out = document.domain;//domain is deprecated

// out = document.characterSet; //UTF-8
// out = document.contentType; //text/html
// let h = document.querySelector(".heading");
// h.innerHTML = "<strong>manoj</strong>";
// h.style.color = " white ";
// h.style.backgroundColor = "black";
// h.style.display = "inline";
// h.style.padding = "10px";
// h.style.borderRadius = "12px";
// console.log(out);

// console.log(document.querySelector(".heading"));
// console.log(document.querySelector("li:nth-child(2)").innerText);

// //queryselectorAll
// let helo = document.querySelectorAll(".item");
// helo.forEach((item) => {
//   item.style.color = "red";
// });

// let child = document.querySelector(".item");
// console.log((child.nextElementSibling.style.color = "blue"));
// console.log(
//   (child.nextElementSibling.nextElementSibling.style.color = "orange")
// );

// //create and append the element
// let a = document.createElement("div");
// a.className = "manoj";
// a.id = "man";
// a.setAttribute("title", "this is manoj");
// // a.innerText='hello world'
// let text = document.createTextNode("hello");
// a.appendChild(text);
// console.log(a);
// // document.body.appendChild(a)// adding the element to body
// a.style.textDecorationStyle = "dotted";
// document.querySelector("ul").append(a);

//replacing the item
// function replace(){
//     const item = document.querySelector('li:first-child');
//     const li = document.createElement('li');
//     li.textContent = 'Replaced manoj';
//     item.replaceWith(li);
// }

// function replaceSecondItem(){
//     const item = document.querySelector('li:nth-child(3)');
//     item.nextElementSibling.outerHTML = '<li>min</li>'
// }

// function replaceAll(){
// const item = document.querySelectorAll('li');
// // const newItem = document.createElement('button');
// item.forEach(val => {
//     val.outerHTML = '<button>push</button>'
// });
// }
// replace();
// replaceSecondItem();
// replaceAll();

//Remove the elements
// function removing(){
//     document.querySelector('p').remove();
// }
// removing();

// function removingItem(itemnumb){
//     const item = document.querySelector('ul');
//     const li = document.querySelector(`li:nth-child(${itemnumb})`)
//     item.removeChild(li);
// }

// removingItem(1)
const text = document.querySelector(".para");
const itemlist = document.querySelector(".item-list");
const list = document.querySelector(".items");

function run() {
  console.log(itemlist.className);
  text.className = "dark";
  // console.log(text.outerHTML);
  // text.style.backgroundColor = 'red';
  list.forEach((element) => {
    element.style.color = "red";
  });
}

// document.querySelector("button").onclick = run;
console.log(list.childNodes);
const firstitem = list.firstElementChild;
firstitem.nextElementSibling.style.color = "red";
firstitem.nextElementSibling.nextElementSibling.style.color = "darkblue";
console.log(list.lastElementChild);
