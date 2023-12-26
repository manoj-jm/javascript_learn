//var is function scope hota hai, inside the function var can be used anywhere but not outside  the function scope
//var adds itself to window object [ js use some feature from window which have feater given by browser with js ] which is bad , bec var expose its data
//let const doesn't adds

//browser context api , where window is present
//browser will provide 3 things , 1 browser api , 2 stack ,3 heap

//Execution context : it is a container where the function's code is executed and it's created whenever a function is called , it contains 3 things (variable, sub-functions, (***)LEXICAL ENVIRONMENT)
//LEXICAL ENVIRONMENT : It is a chart in which it knows its particular functions what things it can accessed and what things to not .
//LEXICAL ENVIRONMENT : It is a environment which tells to its function to what to access and what to not i.e, upper function can't acess the its sub-func variable and its sub-function can acess its upper function valve , it is scope chain .

//how to copy the reference using spread operator [...]
// var a = [1,2,3,4,5,2,4,2,1]
// var b = [...a]//whatever wrote next to ... will copy to b // var b = a;
// b.shift()
// console.log(b);

// var obj = {
//     x : " manoj ",
//     y : 23,
//     z : 34.23
// };
// obj.x="roja"

// var obj1 = {...obj}
// obj1.mge = 20;
// console.log(obj1);

//condition statement
//switch()
// switch (2) {
//     case 1:
//         console.log("hi");
//         break;
//     case 2 : console.log("hello");
//         break;
//     default:
//         break;
// }

//loops
// foreach: it used to array to print and it wont change the main array , it make changes in temperory copy
// var a = [1,2,3,4,5,6,7,8,9]
// a.forEach(function(val){
//     console.log(val+2);
// })

//forin : it is used for loop the objects
// var abj = {
//     name : "manu",
//     Age : 20,
//     city : "bangaluru"
// }
// for(var key in abj){
//     console.log(key , ":" ,abj[key]); // name : manu , Age : 20
// }

//callback function : the function which will excute when the task/work is get completed . for eg : when u press the button to see image , then that will to go to backend and complete the task and comeback then this function get executed to say us that task is completed
//Imagine you have a friend, and you want to play a game. You tell your friend, "When you're ready to play, call me back." In this scenario, you are the callback function. Your friend will do their thing, and when they're ready to play, they'll call you back
// setTimeout(() => {
//         console.log("code executed after 5 sec , but in agrmument you should  give in millisec i.e, 1000msec = 1sec");
// }, 5000);//5 second after the function is executed

// function bakeCookies(callback) {
//     // Doing the baking...
//     setTimeout(function() {
//       console.log("Cookies are ready!");
//       callback(); // Calling back the function you provided
//     }, 2000); // Timer set for 2 seconds
//   }

//   function eatCookies() {
//     console.log("Nom nom nom!");
//   }

//   bakeCookies(eatCookies); // Passing eatCookies as a callback

//first class func : in js , there is concept which means u can use the valve
// u can treat them(func) as valve

// def : when the function in that lanuage are treated as normal values , you can save them , you can pass them as arguments to another functions

// setTimeout(function(){})

// var a = function(){
// console.log("hello , this is first class funciton ");
// };
// console.log(a());//u can call the  function as variable

// function abcd(a){
//     a();
// }

// abcd(function(){
//     console.log("sheryians coding school !");// arg is function and that is assign to a parameter , so it become a funciton variable and a()

// })

//how to delete the object's valve
// var a = {
//     name: "manoj", age : 30
// }
// // delete a.age
// console.log(a);

// SESSION 2

//higer order functions : it is a function which Accept a function in parameter or return a function or both
//eg: ForEach method always takes another func inside it, so foreaach is a higher order function

// function ab(val){//ab become higher order function
//     val();
// }
// ab(function(){console.log("hello");})

// //we write this type of function when we do closures
// function abc(){
//     return function(){}
// }

// constructor function : analogy biscuit factory , in which we have a biscuit mold which press on dough to get the same shape of the biscuit and those biscuits are created with new keyword and they are called instances

//definition : A function which whenever invoked with "new" keyword, Returns An object , if we use "this" keyword inside that function , it returns An oject with all of the properties and methods mentioned inside that function with this keyword ,such function is called as constructor function
//eg1:
// function  moldOfBiscuit(){//consturctor function
//     this.width = 12;//this will point to window
//     this.height = 22;
//     this.color = "brown";
//     this.taste = "sugary";
// }

// var bis1 = new moldOfBiscuit();//new keyword infront of function call makes a new blank object and returns to the bis1 variable
//eg2:
// function circularButton(color){
//     this.radius = 2;
//     this.color = color;
//     this.icon = false;
//     this.pressable = true;
// }

// //instances
// let redbtn = new circularButton("red");//redbtn is object
// let greenbtn = new circularButton("green");

//New keyword : there will be blank object {  }
// function abcde(){
//     this.age = 20;
// }

// new abcde();//{ age: 20  }

//iife +> immediately invoked function expression and variable inside will become privet automatically

//getter function is used to get the valve of the  privet variable and not outside accessable
// var ans = (function () {
//   var age = 12;
// return {
//   getter: function () {
//     console.log(age);
//   },
//   setter: function () {
//     age = 20; //valve get updated
//   },
// };
// })();

//prototype: this are the helper function which is provided by javaScript to an object when we create them , many properties and methods are already available to use built by js creators inside prototype of every object

//prototype inheritence : to transfer the property from parent to childrens,  to do the same thing in js with the help of "prototype" (one extraa propertty always given by js to every object ) is called prototype inheritence

// var human = {
//   name: "homesepian ",
//   canfly: false,
//   canTalk: true,
//   canWalk: true,
// };
// var manoj = {
//   canMakeAmazingWebsites: true,
//   canMakeTeach: true, //but manoj can't talk
// };

// manoj.__proto__ = human; // this means through "prototype" the manoj object get properties  from human object (parent), now manoj can also canTalk , and canWalk

//This keyword : special keyword in js which changes it's valve in different context
//global scope is like outside { }
// console.log(this); // gives the window ( globle object )
// in function scope , the valve of this key is window
//in method ( the function inside the object / behaviour ) scope
// var obj = {
//   xyz: function () {
//     console.log(this); // valve is object obj
//   },
//};
//imp : in any method , "this" keyword always refers to parent object
// summary : global => window , function => window , method => object
//EVENT LISTENERS
// var button = document.querySelector("button");
// button.addEventListener("click", function () {
//   console.log(this); // this is points to whatever written before addEventListener ie, button
//   this.style.color = "red";
//   this.style.backgroundColor = "yellow";
//   this.style.border = "2px none";
// });

//interview imp :
//call ,apply ,bind => this function are help to explicitly point the this valve from its actual valve to required valve .
// call :
// function abcd(a, b, c) {
//   console.log(this, a, b, c);
// }
// var obj = { age: 20 };

// abcd.call(obj); // here the this will point to "obj" instead of pointing to window
// abcd.call(obj, 1, 2, 3); //parameter should pass after "this" keyword's valve passed

//apply :
// same here as call but , while passing parameter, apply only allow to pass two parameter , first pass this ,and array (if the valve is more than one parameter ), imp note is that array is won't pass here , only valve inside the array will get passed
// abcd.apply(a=obj,[1,2,3]);

//usecase of call apply bind : simply whenever you want to execute a function but u want to this valve should points to other valve from its valve , then use call apply bind

//bind ( used in react ): it binds the function abcd and obj , and it wont display that they bind , we have to save it in variable and call thet variable()
// var bindFunc = abcd.bind(obj);
// bindFunc();

//pure and impure functions
// pure function is any function which has these 2 features
//1.it should always return same output for same input
//2.it will never change / update the valve of a global variable.
   