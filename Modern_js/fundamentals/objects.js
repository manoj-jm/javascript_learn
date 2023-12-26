// // A common data structure that holds key/value pairs
// const person = {
//   name: "manoj",
//   age: 20,
//   location: "ballari ",
//   isAbmin: true,
//   address: {
//     street: "parvathi nagar 4th cross , ballari",
//     city: "Ballari",
//     state: "Karnataka",
//     country: "India",
//   },
//   hobbies: ["music", "badminton", "chess", "walking", "reading", 1234],
// };
// console.log(person);
// let m=person.hobbies;
// // m = person.address.state;
// // m = person.address["state"];
// // person.hobbies[2]='hicking'
// // person.age= 21
// // m = person.hobbies;
// // console.log(m);
// // for(let i in person){
// //     console.log(`${i} : ${person[i]}`);
// // }
// // for (let i in person.address) {
// //   console.log(`${i}: ${person.address[i]}`);
// // }

// // for (let i in person.hobbies) {
// //   console.log(i, ":", person.hobbies[i]);
// // }
// //delete the values of the object 
// // delete person.location;
// // delete person.age;
// // delete person.address.city;
// // delete person.address.state;

// // person.hello  = function (){
// //     console.log(`hello ${this.name}`);
// // }
// // person.hello
// // console.log(person);

// let obj = new Object(m)
// // console.log(obj[2]);
// let x;
// // x = Object.keys(person).length;
// // x = Object.values(person).length
// // x = Object.entries(person);
// x = person.hasOwnProperty('name');//true
// console.log(x);


let arrobj = [{
  title:'The lion king',author:'manoj',status:{own:true,reading:false,read:false}
},{
  
  title:'The tiger king',author:'vishwa',status:{own:true,reading:false,read:false}
},{
  
  title:'The king',author:'roja',status:{own:true,reading:false,read:false}
}]
console.log(arrobj)
for(i in arrobj){
// console.log()  
arrobj[i].status.read=true;
}
console.log(arrobj)

//destructe 
let { title:firstbook }=arrobj[0];
console.log(firstbook.replace("lion","tiger"));
//convert the obj into JSON string
let str = JSON.stringify(arrobj);
let o = JSON.parse(str);
console.log(o); 