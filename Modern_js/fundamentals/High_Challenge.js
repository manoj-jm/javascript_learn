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

let youngPeople = people
  .filter((item) => item.age < 25)
  .map((young) => {
    return {
      name: young.fname + " " + young.lname,
      email: young.email,
    };
  });

console.log(youngPeople);

let numbers = [2, -23, 21, -783, 238];
// add all negative number;
let negativeSum = numbers
  .filter((item) => item < 0)
  .reduce((prev, curr) => {
    return prev + curr;
  }, 0);

console.log(Math.abs(negativeSum)); //806

//challenge 3
const words = ["manoj", "roja", "vishwa"];
let captilazedWords = words.map(
  (person) => person[0].toUpperCase() + person.slice(1, person.length)
);

console.log(captilazedWords);
