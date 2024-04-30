let out;
let pr = document.querySelector(".parent");
out = pr.childNodes[3].nextSibling;
pr.childNodes[3].innerText = "Child One"
pr.childNodes[5].innerText = "Child Two"
pr.childNodes[9].innerText = "Child Three"
// console.log(out);


let child = document.querySelector('.child');
let o  = child.parentElement;
o = document.querySelector('.child:nth-child(2').nextSibling.nextSibling;
console.log(o);
