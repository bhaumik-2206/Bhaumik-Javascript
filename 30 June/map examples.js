
// Array.map Questions
//1
// let arr1 = [10, 20, 30, 40, 50];
// let a = arr1.map(value => value);                        //Get the value of perticular index with first parameter
// console.log(a);

//2
// let arr1 = [10, 20, 30, 40, 50];
// let a = arr1.map((value,index) => index);                //Get the Index of all array values in second parameter
// console.log(a);

//3
// let arr1 = [10, 20, 30, 40, 50];
// let a = arr1.map((value, index, arr) => arr);            //map run 5 time and print arr 5 times and this is stored in another array.with third parameter
// console.log(a);

//4
// let arr1 = ["Hello", 1020, null, undefined, false, true];                   //null and undefined does not print an value
// let a = arr1.map((value, index, arr) => { return value + " " + index + " " + arr });            //If we start the curly bracket than we write the return keyword and than return value , index or an array
// console.log(a);

//5
// let arr = ["raj", "bhaumik", "vansh"];
// let a = arr.map(value => value.toUpperCase());               //Does not change the Original array.
// console.log(a);
// console.log(arr);

//6
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];                   //Here , we square all number and print in a new array
// let a = arr.map(value => value ** 2);
// console.log(a);

//7
// let arr = [1, 2, 3, 4, 5];
// let a = arr.map(value => value > 3);                         //check the condition if condition is true than add true else false
// console.log(a);                                              //[ false, false, false, true, true ]

//8
// let arr = [{ a: 1, b: 2 },{ a: 1, b: 2 },{ a: 1, b: 2 }];
// let a = arr.map(value => value.c = 3);                       //add new object property in nested object this is change original array because his object have same reference.
// console.log(a);
// console.log(arr);

//9
// let arr = [10, 20, 30, 40, 50];
// let a = arr.map((value, index, arr) => {                     //doubt
//     console.log("1-", arr);
//     arr.pop();
//     console.log(arr);
// });
// console.log(a);
// console.log(arr);

//10
// let arr = ["raj", "bhaumik", "vansh"];
// let a = arr.map(value => {
//     return value.slice(0, 1).toUpperCase() + value.slice(1)          //return the value in arrow function with curly bracket
// });
// console.log(a);

//11
// let arr = ["raj", "bhaumik", "vansh"];
// function toUppercase(value) {
//     return value.slice(0, 1).toUpperCase() + value.slice(1);         //Function make outside the map function
// }
// let a = arr.map(toUppercase);
// console.log(a);

//12
// let arr = ["raj", "bhaumik", "vansh"];
// let a = arr.map(value => value.length);
// console.log(a);

//13
// let arr = ["raj", "bhaumik", "vansh"];
// let a = arr.map(function (value) {
//     return value.length;
// });
// console.log(a);

//14
// let arr = ["hello", "hii", "good Morning"];
// let a = arr.map(value => [{ value }]);
// console.log(a);

//15
// let arr = [12, 34, "hello"];
// let a = arr.map(value => [value]);
// console.log(a);

//16
// let arr = [10, 20, 30, 40, 50];
// let a = arr.map((value, index, arr) => arr[arr.length - 1 - index]);
// console.log(a);

//17
// const names = [
//     { first_name: "Handnm", last_name: "L demo" },
//     { first_name: "Q Wei", last_name: "Alxezx" },
//     { first_name: "Pqwern", last_name: "Ruse" },
//     { first_name: "Wiruyn", last_name: "Ruby" },
//     { first_name: "Erpso", last_name: "Loal" },
//     { first_name: "Demors", last_name: "Poet" },
//     { first_name: "Aleos", last_name: "Lkeu" },
// ]
// function addFullName(value) {
//     return value.full_name =  value.first_name + " " + value.last_name;
// }
// let newObject = names.map(addFullName);
// console.log(newObject);
// console.log(names);

//18
// let arr = [[10, 20], [30, 40], [50, 60]];
// let a = arr.map((value,index,arr) => arr.flat());
// console.log(a);

// 19
// let arr = [1, 2, 3, 4, 5];
// let a = arr.map(value => {                           //square of each even number
//     if (value % 2 == 0) {
//         return value ** 2;
//     } else {
//         return value;
//     }
// });
// console.log(a);
// console.log(arr);

//20
// let arr = [1, 2, 3, { a: 10, b: 20 }, 4, 5];
// const arrowFunction = (value, index) => value;
// let a = arr.map(arrowFunction);
// console.log(a);

//21
// let arr = [1, 2, null, undefined, true, false];
// let a = arr.map((value, index) => {
//     if (value === null || value === undefined) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(a);
// let b = a.filter(value => {
//     if (value === true) {
//         return value;
//     }
// });
// console.log(b);
// console.log(b.length);

//22
// let arr = ["raj", "bhaumik", "vansh"];
// let a = arr.map((value, index) =>arr.reverse());
// console.log(a);

//23
