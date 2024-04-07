// // Arrays are special type of objects or data structure which is used to store the muiltiple values.
let arr = [223, 22, 32, 42, null, 4, 5345, 35, "j manoj ", 3423, 424, 234];
// console.log(arr);
// console.log(arr.length);
// arr.push(23); // adding element at last
// arr.pop(); // removing element at last
// arr.unshift(56); // adding element at first index of array
// arr.shift(); // removing element at first index of array
// console.log(typeof arr); //object
// arr.push("hello");
// console.log((arr[-1] = "manoj"));
// console.log(arr);

// for (let i in arr) {
//   console.log(arr[i], typeof arr[i]);
// }
let a = [33, 42, 5, 67, 68, 2, "hello"];
// console.log(a);
// console.log(a.length);
// console.log(a.sort());
// console.log(a.reverse());//[ 'hello', 68, 67, 5, 42, 33, 2 ]
// console.log(a.includes("hello"));
// console.log(a.includes(23));
// console.log(a[0]);
// console.log(a);
// console.log(a.indexOf(67));
// console.log(a.slice(2));
// console.log(a.splice(1,2),a);
// console.log(a);
// console.log(a.splice(-1),a);// delete the last element
// console.log(a.splice(2,1));// delete 5 from the array a
// console.log(a.slice(1,3));
// console.log(a);

// array nesting , concat and spread
let x;
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8, 9, 10];
// arr1.push(arr2);
// x = arr1[3]

// x = [arr1,arr2];
// // x = x[0][2]
// x=x[1][3]

// x = arr1.concat(arr2)
// x=x[9]
// spread operator
// x = [...arr1,...arr2]
//flatten array
// const a = [1,2,[3,4],5,[6,7],9]
// x = a.flat()

// static method of array
// x = Array.isArray([1,2,3]);//true
// x = Array.from("hello , world")
// x = Array.from('1234')

//challenge 1
// console.log(arr1);
// x1 = arr1.length+1
// x = arr1.push(x1)
// x = arr1.unshift(0)
// x=arr1.reverse()

//challenge-2
// arr2.splice(0, 1);
// let arr3 = arr1.concat(arr2);
// console.log(arr3);


/**
 * challenge -2
 * let arr3 = [...arr1,...arr2]
 * arr3.splice(5,1)
 * console.log(arr3)
 */

