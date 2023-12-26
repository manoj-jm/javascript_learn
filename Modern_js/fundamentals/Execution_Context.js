//happens behind the scenes
// When you run the javaScript , a special environment is created to handle the transformation and execution of the code This is called Execution context. It contains the currently running code and everything that aids in its execution
// there is gloabal EC as well as function EC for EVERY function invoked
//               MEMORY                                       |         execution(code)
// name : "manoj"                                             |
// x : 100                                                    |  This is the thread of execution .
// fn:{...}                                                   |   Each Line of code is executed line by line.
// This is variable environment that STORES all of variables  |
// and functions as key :value pairs in memory                |

// Two phases

// memory creation phase:
// 1.create the global object (browser = window,Node.js = global)
// 2.create the 'this' object and bind to global obj
// 3.setup memory heap for store var and func references
// 4. store variable in global execution context and set to "Undefined"
// 5. code inside the func is store inside the memory

//Execution phase:
//1.excute code line by line 2.create a new execution context for each function call

//"C:\Users\manub\OneDrive\Pictures\Screenshots\functin_EC_ inside_global_EC.png"
// debug this below code in browser
const x = 100;
const y = 40;
function getSum(n1, n2) {
  let sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(23, 21);
