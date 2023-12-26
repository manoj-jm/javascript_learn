//function declaration
// console.log(rollNo(56));// it hoisted , means function call is before the function definition 
function rollNo(valve){
    return `hello manoj ur rollno is ${valve}`;
}

// let rn = Number(prompt("enter the roll NO : "))
let rn =56;
let roll = rollNo(rn);
console.log(roll);
// Fuction Expression (differet way to declare a function)
const addPlusSign = function(val){
    return '+'+val;
}; // here it has semicolon 
console.log(addPlusSign(50));// it can't be hoisted 


//function declaration can hoisted , whereas function expression can't hoisted 