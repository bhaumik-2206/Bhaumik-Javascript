// ------------------Object----------------------
// let obj1 = { a: 10, b: 20, c: 30 };
// let obj2 = { a: 20, b: 30, c: 40 };
// Object.assign({}, obj1, obj2).c = { a: 20, b: 40 };
// console.log(obj1);

// function assign(obj1, obj2) {
//     for (let value in obj2) {
//         obj1[value] = obj2[value];
//     }
//     return obj1;
// }
// let obj1 = { a: 10, b: 20 };
// let obj2 = { b: 30, c: 40 };
// let obj3 = assign(obj1, obj2);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);


// ------------------Array----------------------
// let obj1 = [{ id: 1 }, { id: 2 }];
// let obj2 = [
//     { id: 1, item: "Mobile Phone" },
//     { id: 2, item: "T.V." },
//     { id: 3, item: "A.C." },
//     { id: 4, item: "A.C." },
// ]
// function getDifferent(obj1, obj2) {
//     let a = obj2.filter(value => {
//         if (!obj1.find(e => e.id == value.id)) {
//             return value;
//         }
//     });
//     return a;
// }
// console.log(getDifferent(obj1, obj2));

// function findNaN(arr) {
//     return arr.map((value, index) => {
//         if (isNaN(value)) {
//             return index;
//         }
//     }).filter(e => Number(e));
// }
// console.log(findNaN([2, NaN, 8, 16, 32]));
// console.log(findNaN([2, 4, NaN, 16, 32, NaN]));
// console.log(findNaN([2, 4, 16, 32]));

// function calculateValidIntegerSum(arr) {
//     return arr.filter(value => typeof value == 'number').reduce((a, c) => a + c, 0);
// }
// console.log(calculateValidIntegerSum([2, "11", 3, "a2", false, 5, 7, 1])); // 18
// console.log(calculateValidIntegerSum([2, 3, 0, 5, 7, 8, true, false])); // 25

// Write a function that takes a currency_code and amount as an argument and returns the amount of money in INR.
// function returnValueOfMoney(currency_code, amount) {
//     let country_code = {
//         USD: 82.08,
//         EUR: 92.18,
//         GBP: 106.91,
//     }
//     return country_code[currency_code] * amount;
// }
// console.log(returnValueOfMoney("USD", 50));

// let arr = [1, 2, 3, 4, 5];
// let a = arr.splice(1, 1, 10, 20);
// console.log(arr);
// console.log(a);

// let arr = [1,4,3,2];
// arr.sort();
// console.log(arr);

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
// function addDashBetweenEven(numbers) {
//     let blank = "";
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 == 0 && numbers[i - 1] % 2 == 0) {
//             blank += "-" + numbers[i];
//         }else{
//             blank += numbers[i]
//         }
//     }
//     return blank;
// }
// console.log(addDashBetweenEven('025468'));
// console.log(addDashBetweenEven('24681826'));

// Write a JavaScript program to find the most frequent item in an array.
// function mostFrequentItem(arr) {
//     let count = 0;
//     let store = 0;
//     arr.forEach(value => {
//         for (let i = 0; i < arr.length; i++) {                               // doubt
//             let a = arr[i];
//             if (value == a) {
//                 count++;
//             }
//         }
//         if (store < count) {
//             store = count;
//         }
//         count = 0;
//     });
//     return store;
// }
// console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

// Write a JavaScript program that accepts a string as input and swaps the case of each character.
// function swapCase(string) {
//     let a = string.split("");
//     return a.map(value => {
//         if(value == value.toUpperCase()){
//             return value.toLowerCase();
//         }else{
//             return value.toUpperCase();
//         }
//     }).join("");
// }
// console.log(swapCase('The Quick Brown Fox'));









// function calculateAllIntegerSum(arr) {
//     return arr.map(value => {
//         if (typeof value == 'number') {
//             return value;
//         } else if (Number(value)) {
//             return value;
//         }
//     }).filter();
// }
// console.log(calculateAllIntegerSum([2, "11", 3, "a2", false, 5, 7, 1]));
// console.log(calculateAllIntegerSum([2, 3, 0, 5, 7, 8, true, false]));