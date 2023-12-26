function sayHello() {
  console.log("hello world !");
}

sayHello();

// function sum(n1, n2) {
//   console.log(n1 + n2);
// }

// sum(2, 4);
// function sub(n1, n2) {
//     return n1-n2;
//   }
  
//   let res = sub(2, 4);
//   console.log(res);


//default parameter 
function register(user = 'bot'){
    return user+" is registered"
}
console.log(register('manoj'));


//rest parameter
function obj(...nums){
    let total = 0;
    for(let i of nums){
        total+=i;
    }
    return total;
}
console.log(obj(1,2,3,4,4,4,5), typeof(obj));

//object as parameter
function login(user=bot){
    return `the ${user.name} is login using ${user.id} id `;
}

const user = {
    id : 3,name:"manoj"
};
console.log(login(user));

//array as parameter
function randomItme(...arr){//whatever i passed is convert into array in rest parameter
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item)
}

// randomItme(1,2,3,4,6,4,5,6,32,6,77,8);


console.log(Math.random() * 12);

//global scope
//overriding the global scope is varible shadowing
