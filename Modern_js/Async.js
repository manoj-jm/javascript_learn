// synchronous js : untill first task/instruction complete , next task won't takes place
// asynchronous js : multiple task can take place at single time , and which one will complete first , second and so on .. can get track
// how to know which is Async :if we making :- setTimeout, setInterval , promises , fetch ,axios,XMLHTTPrequest , othe than this , it is synchronous
// setTimeout(callback,timeinms)
//eg1:
// console.log("hey");
// setTimeout(() => {}, 2000);
// console.log("hey2"); //immediatly execute , which is asynchronous
// //eg2:
// console.log("hey");
// setTimeout(() => {
//   console.log("hey2"); //here , we make it synchronous, means after 2 sec , this statment execute
// }, 2000); //since the code inside function is run after 2 sec , that's y it is called callback func and these func always get execute after they get the answer

// const { setImmediate } = require("async");

//js is not asynchronous: js is single tread , if a and b are two task , then some part of a will run and some part of b and some part of a and so on , like this fastly both task will get execute
// async is more than two task will takes place, but js is not async
// whatever in main stack will give output , whatevere in side stack will behind the scenes processing will takes place ,and when its processing complete it will taken and came into main stack
//synch code will go into main stack
// when async code will come to main stack from side stack, it will only checked when main stack is empty and check whether its answer is came ?
//EventLoop(imp):it will take and come the code form side stack to main stack
// console.log("hey");
// console.log("hey2");
// setTimeout(function () {
//   console.log("hey3");
// }, 0);
// console.log("hey4");
//out : hey ,hey2,hey4,hey3 { bec hey3  is in async code which will go into side stack and  hey4 in main stack and when main stack is empty , then hey4  will get into main and it will run    }

//callbacks function:async it will send a request and complete that request and that answer will get by then catch, callbaks, async await.
//callbacks ,it is a function , it will only run when async code completion .
// setTimeout(function () {}, 2999); //function () is callback

// promises :
// let ans = new Promise((resolve, reject) => {
//   // ans variable can be in three state : pending (when func called till there it should be called as pending ), if called and that function is execute as per it say  , then variable will enter into resolve state , if not ans will enter into reject state
//   if (false) {
//     return resolve();
//   } else {
//     return reject();
//   }
// });

// ans
//   .then(function () {
//     console.log("resolved state of ans ");
//   })
//   .catch(function () {
//     console.log("reject stated of ans which is catched");
//   });

//eg:

// let ans = new Promise((resolve, reject) => {
//   // ans variable can be in three state : pending (when func called till there it should be called as pending ), if called and that function is execute as per it say  , then variable will enter into resolve state , if not ans will enter into rejevt state
//   var n = Math.floor(Math.random() * 10);
//   if (n < 6) {
//     return resolve();
//   } else {
//     return reject();
//   }
// });

// ans
//   .then(function () {
//     console.log("below  ");
//   })
//   .catch(function () {
//     console.log("reject stated of ans which is catched");
//   });


