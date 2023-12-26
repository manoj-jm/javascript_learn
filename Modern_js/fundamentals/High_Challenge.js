const people = [
  {
    fname: "manoj",
    lname: "J",
    age: 20,
    phone: "12345",
    email: "manoj@gmail.com",
  },
  {
    fname: "Lalu",
    lname: "J",
    age: 25,
    phone: "12342345",
    email: "Lalu@gmail.com",
  },
  {
    fname: "Vish",
    lname: "patel",
    age: 40,
    phone: "12345",
    email: "Vish@gmail.com",
  },
  {
    fname: "Usha",
    lname: "M",
    age: 27,
    phone: "12345",
    email: "Usha@gmail.com",
  },
  {
    fname: "Durga",
    lname: "Prasad",
    age: 20,
    phone: "12345",
    email: "Durga@gmail.com",
  },
];

const youngPeople = people.filter(a => {
    if (a.age <= 25){
        return a.age;
    }
}).
filter(function (i){
    return {
        name : `${i.fname} ${i.lname}`,
        email: i.email,
    }
});
console.log(youngPeople);

//challenge2 : add all positive number in array
const arrnum = [12,-83,50,-4,23,-834,323];

const positive_num= arrnum.filter(n=>n>0).reduce((ac,cu)=>{
    return ac + cu;
},0);

console.log(positive_num);

//challenge3:
//map return the a new modified array 
//filter return the new item of the array 
const words = ['coder','programmer','developer'];
const cap_words = words.map(word => word[0].toUpperCase() + word.slice(1));
console.log(cap_words);