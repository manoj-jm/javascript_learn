// if statements
if (true) {
  console.log("this block will run , bec it is true");
}
// if-else statements
if (10 == 10) {
  console.log("true");
} else {
  console.log("false");
}
// relation operator
if (10 === "10") {
  console.log("this is true in both value and datatype also ");
} else {
  console.log("this is false in  datatype  ");
}

// shorthand if
if (29 > 2) console.log(`${29} is greater `);

// if-else
const d = new Date();
const hour = d.getHours();
console.log(hour);

if (hour > 6 && hour < 12) {
  console.log("good moring");
  if (hour === 6) console.log("wake up");
} else if (hour > 18 && hour < 21) {
  console.log("good evening");
  if (hour === 21) console.log("dinner time");
} else {
  console.log("good night ");
}

//switch
const month = d.getMonth();
console.log(month);
console.log(d.getDate(), d.getMonth(), d.getFullYear());
switch (month) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("mar");
    break;
  case 4:
    console.log("apl");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("jun");
    break;
  case 7:
    console.log("jul");
    break;
  case 8:
    console.log("aug");
    break;
  case 9:
    console.log("sep");
    break;
  case 10:
    console.log("oct");
    break;
  case 11:
    console.log("nov");
    break;
  case 12:
    console.log("dec");
    break;
  default:
    console.log("not in calender !");
}

//challenge 1 :
const cal = (n1, n2, op) => {
  if (op === "+") return n1 + n2;
  if (op === "-") return n1 - n2;
  if (op === "/") return n1 / n2;
  if (op === "*") return n1 * n2;
  if (op === "%") return n1 % n2;
};

console.log(
  cal(5, 2, "+"),
  cal(5, 2, "-"),
  cal(5, 2, "*"),
  cal(5, 2, "%"),
  cal(5, 2, "/")
);

//Truthy and Falsy values

// falsy values : false,0,'' or "" , null, undegined,NaN
// truthy  : true,' ',[] , {} , function(){},

let email = 'test@gmail.com'
if (email){
  console.log('you passed in an email !');
}

let x = undefined;
console.log(Boolean(x));// falsy

