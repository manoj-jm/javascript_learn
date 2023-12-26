//forEach()
const socials = ["Twitter", "LinkedIn", "Facebook", "Instaagram"];
socials.forEach((n, i) => console.log(i, n));
//objects
const obj = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "facebook", url: "https://facebook.com" },
  { name: "linkedin", url: "https://linkedin.com" },
  { name: "instagram", url: "https://instagram.com" },
];

obj.forEach((item) => console.log(item));

//Filter() it will return new modified array
const meida = ["Twitter", "LinkedIn", "Facebook", "Instaagram"];
let uppercase = meida.filter((item) => item.length < 8);
console.log(uppercase);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = num.filter((i) => {
  return i % 2 !== 0;
});
// const odd = num.filter(i => i%2 !==0);
console.log(odd);
//challenge
const companies = [
  { name: "company one", cat: "finance", start: 1981, end: 2004 },
  { name: "company two", cat: "retail", start: 1981, end: 2004 },
  { name: "company 3", cat: "finance", start: 1981, end: 2004 },
  { name: "company 4", cat: "Technology", start: 1993, end: 2000 },
  { name: "company 5", cat: "finance", start: 1999, end: 2004 },
  { name: "company 6", cat: "retail", start: 1990, end: 2014 },
  { name: "company 7", cat: "Technology", start: 1981, end: 2004 },
  { name: "company 8", cat: "finance", start: 1951, end: 2001 },
];
//filter retail companies
const retail = companies.filter(function (com) {
  return com.cat === "retail";
});
console.log(retail);
//start form 1981
const year = companies.filter((y) => y.start >= 1981 && y.end <= 2004);
console.log(year);
//more than 10 years
const long = companies.filter((l) => {
  return l.end - l.start >= 10;
});
console.log(long);

//Maps : create a new array populated with the result of calling a provided function on every element in the calling  array .

const nu = [1, 2, 3, 4, 5];
const double = nu.map((n) => n * 2);
// console.log(double);

//create an array of company names and category
const comnames = companies.map((c) => {
  return {
    //returning object
    name: c.name,
    category: c.cat,
  };
});
console.log(comnames);
//create an array of company with name and length
const l = companies.map((le) => {
  return {
    name: le.name,
    length: le.end - le.start + " years",
  };
});
console.log(l);

// Chain map methods

const squareAndDouble = nu.map((n) => Math.sqrt(n)).map((sqrt) => sqrt * 2);
console.log(squareAndDouble);

//chaining different methods
const evenDouble = num.filter((number) => number % 2 === 0).map((ns) => ns * 2);
console.log(evenDouble);

//reduce(),it take two para : current and previous value
const sum = num.reduce(function (accumulator, currentvalue) {
  return accumulator + currentvalue;
},0);//initial value is 0=accumulator
console.log(sum);

let cart = [
    { id:1,price:130},
    { id:2,price:120},
    { id:3,price:100},
    { id:4,price:140},
];
let sum_cart = cart.reduce((acc,cur)=>{
    return acc + cur.price;
},0);
console.log(sum_cart);