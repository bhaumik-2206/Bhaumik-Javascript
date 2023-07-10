// let a = { a: 10, b: 20 };
// function de({ a, b }) {
//     return a, b;
// }
// console.log(de(a));


// let a = { a: 10, b: 20 };
// let b = { c: 10, d: 20 };
// console.log({ a, b });


// function objectP({ a = 10, b = 20 }) {
//     return a, b
// }
// console.log(objectP({ x: 100, y: 200 }));

// let obj1 = { a: 10, b: 20 };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1);
// console.log(arr2);
// console.log(obj1);

// let obj1 = { a: 10, b: 20, c: { f: 30 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.c.f = 50;
// console.log(arr1);
// console.log(arr2);
// console.log(obj1);

// let obj1 = { a: 10, b: 20 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], [{ ...arr1[0] }]);
// arr2[0].c = 5;
// console.log(arr1);
// console.log(arr2);
// console.log(obj1);

// let obj1 = {
//     fname: "Bhaumik",
//     age: 18,
//     getCity: function () {
//         return this.city;
//     }
// };
// obj1.city = "Ahmedabad";
// console.log(obj1.getCity());

// let key = "fname";
// let myName = "bhaumik";
// let obj = {
//     [key] : myName
// }
// console.log(obj);

// let obj1 = {};
// let obj2 = { a: 10 };
// let obj3 = { b: 20 };
// obj1[obj2] = 30;
// obj1[obj3] = 40;
// console.log(obj1[obj2]);

// let obj = {
//     fname: "Bhaumnik",
//     age: 18
// }
// let obj2 = JSON.stringify(obj, ['age']);
// console.log(obj2);

// function square(number) {
//     return number * number;
// }
// function print(putFunction) {
//     console.log("Square is " + putFunction(10));
// }
// print(square)

// let str = 'hello';
// str[0] = 'H';
// console.log(str);


// Write a function that takes a string as input and returns the longest word in the string.
// let string = "This is a string";
// function longestString(arr) {
//     let b = arr.split(" ");
//     return b.reduce((acc, cur) => cur.length > acc.length ? acc.length : cur.length, 0);
// }
// console.log(longestString(string));

// Implement a function that reverses a string without using the built-in reverse() method.
// let string = "This is a string";
// function myReverse(arr) {
//     let b = arr.split("");
//     let empty = [];
//     for (let i = b.length; i >= 0; i--) {
//         empty.push(b[i]);
//     }
//     return empty.join("");
//     // return arr.split("").reverse().join("");
// }
// console.log(myReverse(string));

// Create a function that counts the number of occurrences of each character in a given string and returns an object with the character as the key and the count as the value.
// function makeObject(string) {
//     let b = string.split("");
//     let obj = {};
//     for (const value in b) {
//         obj[value] = b[value];
//     }
//     return obj;
// }
// console.log(makeObject("Hello"));






// let a = {};
// let b = {};
// console.log(a == b);
// console.log(a === b);

// let a = "";
// let b = "";
// console.log(a == b);
// console.log(a === b);