
// -------------------------Function Declarations and Arrow Functions :-
// function foo() {
//     return "Hello, world!";
// }
// console.log(foo());
// const myFunc = () => {
//     return "Hello, world!";
// }
// console.log(myFunc());
// const myFunc1 = () => "Hello, world!"
// console.log(myFunc1());


// -----------------Template Literals :-
// let myString = `
// Hello world,
// This is for line break
// `;
// console.log(myString);
// let str2 = `it's a very beautiful language "JavaScript"`;    // Use anything between the quotes
// console.log(str2);
// let name = "Raj";
// let age = 19;
// console.log(`Name is ${name} and age is ${age}`);            // Use vatiable like this


// -------------------Short Conditionals: &&, ||, Ternary Operator :-



// -------------------Three Array Methods: .map(), .filter(), .reduce()
// function myFunc1() {
//     const programmers = ["Reed", "John", "Jane"];
//     return programmers.filter((programmer) => !programmer.startsWith("J"))
//         .map((ele) => console.log(ele))
// }
// myFunc2();
// function myFunc2() {
//     let programmers = ["Reed", "John", "Jane"];
//     return programmers.reduce((acc, programmer) => {
//         if (!programmer.startsWith("J")) {
//             return acc.concat(programmer);
//         } else {
//             return acc;
//         }
//     }, [])
//         .map((programmer) => {
//             console.log(programmer);
//         })
// }
// myFunc2();

// Chaning
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers
//     .filter(num => num % 2 === 0)
//     .map(num => num * 2)
//     .reduce((sum, num) => sum + num, 0);
// console.log(result);

let priceArray = [
    { price: 100, quantity: 1 },
    { price: 99, quantity: 2 },
    { price: 199, quantity: 3 },
]
// let a = priceArray.map(ele => {
//     return { ...ele, total: ele.price * ele.quantity };
// });
// console.log(a);



// -------------------Object Tricks: Property Shorthand, Destructuring, Spread Operator :-
// let a = 1;
// let b = 5;
// let c = 8;
// let d = 2;
// let myObj = { a, b, c, d };
// console.log(myObj);
// let name = 'Raj'
// let age = 20
// let location = 'Canada'
// let user = { name, age, location }
// console.log(user)

// Destructuring :-
// let person = {
//     firstName: "Raj",
//     lastName: "Bundela",
//     age: 19
// };
// let { firstName, age } = person;
// console.log(firstName);
// console.log(age);
// let data = {
//     user: {
//         id: 123,
//         name: 'John Doe',
//         address: {
//             street: '123 Main St',
//             city: 'Example City',
//         },
//     },
// };
// let {
//     user: {
//         id,
//         name,
//         address: { city: myCity },   // Change Name like this
//     },
// } = data;
// console.log(id);
// console.log(name);
// console.log(myCity);
// let person = {
//     firstName: "Raj"
// };
// let { firstName, age = 19 } = person;       // Default Value
// console.log(firstName);
// console.log(age);

// Spread/Rest :-
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let finalArray = [...arr1, ...arr2];
// console.log(finalArray);
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
// let obj3 = { d: 30, e: 40 };
// let finalObject = { ...obj1, ...obj2, ...obj3 };
// console.log(finalObject);
// let person = {
//     name: "Alice",
//     age: 30,
//     country: "USA",
//     occupation: "Engineer"
// };
// let { name, age, ...other } = person;
// console.log(name);
// console.log(age);
// console.log(other);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [a, b, ...rest] = arr;           // Use rest in the last position
// console.log(a);
// console.log(b);
// console.log(rest);
// let user = {
//     name: "Raj",
//     age: 19,
// };
// let more = {
//     age: 50,
//     country: "USA",
// };
// let secondUser = {
//     ...user,
//     ...more,
//     laptop : "HP",
// };
// console.log(secondUser);

//---------------------------Promises + Async/Await Syntax :-
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise resolved!");
    } else {
        reject("Promise rejected!");
    }
});
// myPromise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error);
//     });
// async function checkPromise() {
//     let a = await myPromise;
//     return a;
// }
// console.log(checkPromise());
// checkPromise().then(res => console.log(res)).catch(error => console.log(error));


// -----------------export and import
// import { add, subtract } from './module1.js';
// console.log(add(5, 3));
// console.log(subtract(10, 4));

// import { foo } from './module1.js';
// foo();

// const { myFunc1, myFunc2 } = require("./module1.js");
// myFunc1();
// myFunc2();

// import myObject, { printUser } from "./module1.js";
// let a = myObject;
// printUser(a.fname, a.lname)
// printUser("Bhaumik","Panchal")