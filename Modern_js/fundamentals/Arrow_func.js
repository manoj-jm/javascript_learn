// function add(a,b){
//     return a + b;
// }

//Arrow function syntax
const arrow = (a, b) => {
  return a + b;
};
console.log(arrow(2, 4));

//Arrow function will implicitly return
const imp = (a, b) => a * b;
console.log(imp(5, 4)); //20 which will return by imp function

// for single parameter , we don't need () for it
const sig = (a) => a; // return hello manoj , even without () and return keyword to return the value of a
console.log(sig("hello manoj"));

//Returning an object
const createObj = (wish) => ({
  name: "manoj",
  age: 20,
  studing: "BE",
  for_manoj: wish,
});
console.log(createObj("all the very best manoj"));


// Arrow in callback function
const num = [ 1,3,4,2,1,23,4];
num.forEach((n)=>console.log(n));
