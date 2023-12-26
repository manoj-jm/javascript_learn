let x;
const name = "manoj"
const age = 20;
x = "hello my name is " + name + "and i am "+ age + " years old" 
x =`hello ${name} i am ${age} years old `


//string properties and methods 
const s = new String('hello world')
x =s.length;
// x=s.endsWith();
// x =s.indexOf('l')
// x =s.substring(1,4);
// x=s.slice(1,4)
// x=s.slice(-11,-5)
// x=s.replace("world","manoj")
// x=s.includes('hello')
// x=s.valueOf(1)
let se = 'developer'
x=`${se.charAt(0).toUpperCase()}${se.slice(1)}`;
// y=se.slice(1)
console.log(x);
// console.log(y);