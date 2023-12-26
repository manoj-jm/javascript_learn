function createEle(n) {
  const div = document.createElement("div");
  div.setAttribute("id", "hello");
  div.style.background = "green";
  div.style.padding = "5px";
  div.style.width = "400px";
  div.style.display = "block";
  div.style.margin = "5px";
  div.style.color = "white";
  const addtext = document.createTextNode(
    `Hello This div ${n} is Created by javaScript!`
  );
  div.appendChild(addtext);
  const ele = document.body.appendChild(div);
  return ele;
}
createEle(1);
createEle(2);
createEle(3);

//create li element
function creatli(lang) {
  const li = document.createElement("li");
  li.innerText = `${lang}`;
  document.querySelector(".language").appendChild(li);
}

creatli("python");
creatli("Java");

// in optimise way

function createoptli(lang){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(lang));
    document.querySelector(".language").appendChild(li);
}
createoptli("typescript");
createoptli("typescript");

//edit
const lastli = document.querySelector("li:last-child");
const newli = document.createElement('li');
newli.appendChild(document.createTextNode("C"));
// document.querySelector(".language").appendChild(newli);//adding new element
lastli.replaceWith(newli)//replacing the element


//remove the element
const li = document.querySelector("li:nth-child(4)");
li.remove();