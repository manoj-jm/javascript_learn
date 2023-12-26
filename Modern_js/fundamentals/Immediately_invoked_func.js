//IIFE : Immediately invoked function expression
// it is used when we want to declare and call at same time

//IIFE syntax : ()();
(function (name) {
  console.log("hello" + name);
})(" world!");

//function inside iife function
(function () {
  const hello = () => console.log("hello form IIFE ");
  hello();
})();

(function hello() {
  console.log("welcome J Manoj  ");
})();

(function (...arr) {
  console.log(arr);
})({ 1: "one", 2: "two" }, { name: "man" }); // pass n number of par to rest parameter

// challenge 1 :fahrenheit to celsius  c = (f - 32) * 5/9
//arrow function 
const cel = (fah) => (fah - 32) * 5/9;

console.log(`The temperature is ${Math.floor(cel(327))} \xB0C`);//0C


//challenge 2:
const minMax = (ele)=> `min : ${Math.min(...ele)} , max : ${ Math.max(...ele)}`;

console.log(minMax([1,2,3,4,5]));

//challenge 3 :
// iife 
(function (a,b){
  console.log(`The Area of Rectangle is ${a * b }`);
})(5,10);