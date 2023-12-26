//for(initialExpression ; conditionExpression;incrementExpression) {statement}
for (let i = 0; i <= 10; i++) {
  if (i === 9) {
    console.log(i, "is my favorite number");
    continue;
  }
  console.log("number", i);
}

//nested
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}*${j}=${i * j}`);
  }
  console.log();
}

//loop through an array
const num = ["brad", "sam", "sara", "john", "manoj", "roja", "kiran", "prath"];
//forof
console.log("forof");
for (let i of num) {
  console.log(i);
}
//loop through string
let name = "hello manoj !";
for (const i of name) {
  console.log(i);
}
//loop over maps
const map = new Map();
map.set('name1','manoj')
map.set('name2','vish')
for(let [i,j] of map){
  console.log(i,j);
}

//forin
console.log("forin");
for (let i in num) {
  // console.log(i,end='');//0,1,2,3,4,5,6,7,8
  if (num[i] == "roja") {
    continue;
  }
  console.log(i, num[i]);
}
const color = {
  c1 :'red',
  c2 :'white',
  c3 :'yellow',
  c4 :'orange',
  c5 :'blue'
};
console.log(color.c3);
for (let i in color){
  console.log(i,color[i]);
}


//foreach
console.log("forEach()");
num.forEach((i) => {
  // here i is value not index
  // console.log(num[i]); // undfined

  console.log(i); //value
});

//while loop
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//do-while - when we want run block of code to run alteaast one time even when conditionis false
// do {
//   console.log('hello manoj');
// }while(false);
