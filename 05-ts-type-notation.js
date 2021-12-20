// tsc 05-ts-type-notation.ts
// node 05-ts-type-notation.js
// java int num = 10; // strongly typed 
// TS let num: number = 10; // strongly typed 
// JS let num = 10; // dynamically typed 
// let num = 10;
// let num2: number = 20;
// console.log(num);
// console.log(num2);
// num2 = false;
// console.log(num2);
// type notation is applicable to everything - 
// variables, parameters, arguments, return types, 
// arrays, objects, object properties.. 
// const fun = (num: number, num2: number) => {
//     console.log(num + num2);
// }
// fun();
// fun(10, 20);
// fun(10, 20, 30);
// fun('abc', 'def');
var fun = function (num, num2) {
    // return num + num2;
    return 'abc';
};
console.log(fun(10, 20));
// fun(10, 20);
// fun(10, 20, 30);
// fun('abc', 'def');
