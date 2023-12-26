//promise creation
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,network call
    setTimeout(() => {
        console.log('Async task is completed');
        resolve();
    }, 1000);
})
//promise consumption
promiseOne.then(function(){
    console.log("promise consumed , which is connected to resolve");
})

//another way to create and consumption
new Promise(function(res,rej){
    setTimeout(function(){

        console.log("async task 2");
        res();
    },1000)
}).then(function(){
    console.log("Promise 2 resolved");
})

const Promisethree = new Promise(function(res,rej){
    setTimeout(() => {
       res({name : "manoj",age : 20 , course : 'CSE'});
    }, 1000);

})

Promisethree.then(function(user){// user is to acess the value inside the resolve function
    console.log(user.name);
})

//4th promise
const PromiseFour = new Promise(function (res, rej) {
  let error = false;
  if (!error) {
    res({ name: "roja", age: 20 });
  } else {
    rej("something went wrong!");
  }
});

// PromiseFour.then((user)=>{
//     console.log(user);
//     return user.name;// u cant return the value.
// }).then(function(na){
// console.log(na);
// }).catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log("Finaly promise either resolve or rejected !");
// })

// using async function and try  catch
async function consumePromise() {
  try {
    let response = await PromiseFour;
    console.log(response);
    console.log(response.name);
  } catch (er) {
    console.log(er);
  }
}

consumePromise();
