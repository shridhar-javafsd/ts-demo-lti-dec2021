// tsc 06-type-safety.ts 
// node 06-type-safety.js 
// javascript file 
// node delete-types-js.js 
// javascript is a dynamically typed language 
// type safety - a perticular variable should accept 
// only a specific type of values 
// let num;
// console.log(typeof (num)); // undefined
// console.log(num); // undefined
// num = 10;
// console.log(typeof (num)); // number 
// console.log(num); //  10 
// num = "abc";
// console.log(typeof (num)); // string 
// console.log(num); // abc 
// num = false;
// console.log(typeof (num)); // boolean  
// console.log(num); // false 
// typescript - 
// only forces type safety to javascript 
var num10;
console.log(typeof (num10)); // undefined
console.log(num10); // undefined
num10 = 10;
console.log(typeof (num10)); // number 
console.log(num10); //  10 
num10 = "abc";
console.log(typeof (num10)); // number 
console.log(num10); //  10 
