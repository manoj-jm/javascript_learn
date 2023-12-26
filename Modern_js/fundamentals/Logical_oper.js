// && - will return first falsy value or the last value
let a;
a = 10 > 20 && 200;
console.log(a);

const posts = ["post one"];
posts.length > 0 && console.log(posts[0]);

// || - will return the furst truthy value or the lst value
// ?? - returns the right side operand when the left is null or undfined


// Logical Assignment
// a = a || 10 --> a||=10
// a&&=20
//a??=10
let age = 19;
//ternary operator
let res = age >=18 ? console.log('you can vote '):console.log('not vote');

//multiple statements
let auth = true;
let redirect =  auth ? (console.log("Welcome to Dashboard"),'/dashboard'):(console.log("Access Denied"),'\login');
console.log(redirect);


