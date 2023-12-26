// const num = new Number(5)
// let x;
// x=num.toExponential()//5e+0
// x=num.toString()// 5 string
// x=num.toFixed(3)//5.000  string representation of decimal
// x=num.toPrecision(3)//5.00
// x=Number.MAX_VALUE//1.7976931348623157e+308
// x= Number.MIN_VALUE  //5e-324
// console.log(x);

// math-object
// console.log(Math);

// let x ;
// x=Math.sqrt(9)
// x=Math.pow(2,3)
// x=Math.max(2,23,24,23,53)
// x=Math.abs(-289)
// x=Math.ceil(32.3)
// x=Math.floor(33.72332)
// x=Math.round(3.2334324)
// x = Math.floor(Math.random()*100 +1)
// // let y = Math.random()*10;
// console.log(x);



//Number challenge
let x;
x = Math.floor(Math.random() * 100 + 1);
let y;
y = Math.floor(Math.random() * 50 + 1);
let s, d, p, q, r, Q;
s = x + y;
d = x - y;
p = x * y;
q = x / y;
r = x % y;
console.log("x :", x, "\ny :", y);
console.log(
  "sum",
  s,
  "\ndifference:",
  d,
  "\nproduct",
  p,
  "\ndivid:",
  q,
  "\nReminder:",
  r
);

