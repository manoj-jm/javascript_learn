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
// console.log(person.address.country);
// // let m=person.hobbies;
// // // m = person.address.state;
// // // m = person.address["state"];
// // // person.hobbies[2]='hicking'
// // // person.age= 21
// // // m = person.hobbies;
// // // console.log(m);
// for(let i in person){
//     console.log(`${i} : ${person[i]}`);
// }
// // // for (let i in person.address) {
// // //   console.log(`${i}: ${person.address[i]}`);
// // // }

// // // for (let i in person.hobbies) {
// // //   console.log(i, ":", person.hobbies[i]);
// // // }
// // //delete the values of the object
// // // delete person.location;
// // // delete person.age;
// // // delete person.address.city;
// // // delete person.address.state;

// // // person.hello  = function (){
// // //     console.log(`hello ${this.name}`);
// // // }
// // // person.hello
// // // console.log(person);

// // let obj = new Object(m)
// // // console.log(obj[2]);
// // let x;
// // // x = Object.keys(person).length;
// // // x = Object.values(person).length
// // // x = Object.entries(person);
// // x = person.hasOwnProperty('name');//true
// // console.log(x);

// let arrobj = [{
//   title:'The lion king',author:'manoj',status:{own:true,reading:false,read:false}
// },{

//   title:'The tiger king',author:'vishwa',status:{own:true,reading:false,read:false}
// },{

//   title:'The king',author:'roja',status:{own:true,reading:false,read:false}
// }]
// console.log(arrobj)
// for(i in arrobj){
// // console.log()
// arrobj[i].status.read=true;
// }
// console.log(arrobj)

// //destructe
// let { title:firstbook }=arrobj[0];
// console.log(firstbook.replace("lion","tiger"));
// //convert the obj into JSON string
// let str = JSON.stringify(arrobj);
// let o = JSON.parse(str);
// console.log(o);

// const todo = { id : 1 , name :"manoj",sub:{name:"j manoj"}};

// const { id: todoId , sub: {name }} = todo;//todoId is rename for id
// // console.log(todoId);
// console.log(name.replace("j","J"));
// console.log(Object.keys(todo).length);
// let str = JSON.stringify(todo)
// console.log(str.length);

//destructure of arrays
// let arr = [ 23,53,87,29,93];
// const [ f,s,...r]= arr;
// console.log(f);
// console.log(arr[0]);
// console.log(r);

//json objects : light weight data interchange formate
// const post = {
//   id: 1,
//   title: "Hello world",
//   body: "HI ! \n How are you all ? ",
// };
// console.log(post);
// const str = JSON.stringify(post);//stringify turns objects into a string, this string is sended to server
// console.log(str);//string formate is for storage purpose
// const str1 = JSON.parse(str);
// console.log(str1.title);//u can acesses after it is parsed

//object challenge

const library = [
  {
    title: "start up",
    author: "park",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "RRR",
    author: "Rajmoli",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "nobita sky utopia",
    author: "win ji",
    status: { own: true, reading: false, read: false },
  },
];

library.forEach((Element) => {
  Element.status.read = true;
});

library.forEach((ele) => {
  console.log(ele);
});

const [{ title: firstbook }] = library;

console.log(firstbook);

//convert into json
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
