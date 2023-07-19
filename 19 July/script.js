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

// function operationObj(obj) {
//     obj = { ...obj, c: 12 }
//     console.log(obj);
// }
// let a = { x: 34, y: 56 }
// operationObj(a);
// console.log(a);

// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);

// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);

// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);

// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target);

// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;
// console.log(target);

// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source);

// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);

// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === { a: 1, b: 2 });

// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.b = 234;
// console.log(source);

// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(result);

// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(source);

// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result);

// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// target.a[2] = 90;
// console.log(result);

// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target);

// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// for (const key in student) {
//     console.log(key + " " + student[key]);
// }

// function operationObj(obj) {
//     obj = { ...obj, c: 12 }
// }
// let a = { x: 34, y: 56 }
// operationObj(a);
// console.log(a);

// function operationObj(obj) {
//     obj.z = { ...obj, c: 12 }
// }
// let a = { x: 34, y: 56 }
// operationObj(a);
// console.log(a);

// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(source);

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1)

// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.c.f = 30;
// console.log(arr1);
// console.log(obj1);

// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// obj1.c.f = 30;
// console.log(arr1);

// let obj1 = { a: 23, b: 45 };
// let arr1 = Object.assign([], [{ ...obj1 }]);
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1);

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], arr1);
// arr2[0].c = 5;
// console.log(arr1);

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], [{ ...arr1[0] }]);
// arr2[0].c = 5;
// console.log(arr1);

// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// obj2.c.h = 67;
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// let array = [1, 2, 3, 4, 5];
// const [a, b] = array;
// const [a, , b] = array;
// const [a = aDefault, b] = array;         // --
// const [a, b, ...rest] = array;
// const [a, , b, ...rest] = array;
// const [a, b, ...{ pop, push }] = array;
// const [a, b, ...[c, d]] = array;
// console.log(a);
// console.log(b);
// console.log(rest);

// const array = [1, 2, { pop: 'pop value', push: 'push value' }, 4, 5];
// const [a, b, ...{ pop, push }] = array;
// console.log(a);
// console.log(b);
// console.log(pop);
// console.log(push);

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

// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// array1 = [1, 0, 2, 3, 4];
// array2 = [3, 5, 6, 7, 8, 13, 15];
// function sumOfIndexes(arr1, arr2) {
//     let a = [];
//     arr2.forEach((value, index) => {
//         if (arr1[index] == undefined) {
//             a.push(arr2[index]);
//         } else if (arr2[index] == undefined) {
//             a.push(arr1[index]);
//         } else {
//             a.push(arr1[index] + arr2[index]);
//         }
//     });
//     return a;
// }
// console.log(sumOfIndexes(array1, array2));

// Write a JavaScript program to find duplicate values in a JavaScript array.
// function findDuplicate(arr) {
//     let a = [];
//     arr.forEach((value, index) => {
//         for (let i = index + 1; i < arr.length; i++) {
//             if (a.includes(arr[i])) {
//                 return false;
//             } else if (value == arr[i]) {
//                 let b = arr.slice(i, i + 1);
//                 return a = a.concat(b);
//             }
//         }
//     });
//     return a;
// }
// console.log(findDuplicate(['v', 'r', 4, 2, 4, 1, 4, 3, 'v', 'r', 'r']));

//  Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
// function findIndexOfSum(number, sum) {
//     for (let i = 0; i < number.length; i++) {
//         for (let j = i; j < number.length; j++) {
//             if (number[i] + number[j] == sum) {
//                 return i + " " + j;
//             }
//         }
//     }
// }
// console.log(findIndexOfSum([10, 20, 10, 40, 50, 60, 70], 100));

// Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.
// function array_filled(indexes, value) {
//     let empty = [];
//     for (let i = 0; i < indexes; i++) {
//         empty.push(value);
//     }
//     return empty;
// }
// console.log(array_filled(6, 0));
// console.log(array_filled(5, 121));

// Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.
// function array_range(start, total) {
//     let empty = [];
//     for (let i = 0; i < total; i++) {
//         empty.push(start);
//         start++;
//     }return empty;
// }
// console.log(array_range(1, 4));
// console.log(array_range(-6, 4));

// Write a JavaScript function to generate an array between two integers of 1 step length.
// function rangeBetwee(start,end) {
//     let empty = [];
//     for (let i = start; i <= end; i++) {
//         empty.push(i);
//     }
//     return empty;
// }
// console.log(rangeBetwee(4, 7));
// console.log(rangeBetwee(-4, 7));

// let string = "Every developer likes to mix kubernetes and javascript";
// function diffArray(string) {
//     let a = string.split(" ");
//     let maxLength = a.reduce((acc, cur) => acc > cur.length ? acc.length : cur.length, 0);
//     let empty = [];
//     for (let j = 0; j < maxLength; j++) {
//         let main = [];
//         for (let i = 0; i < a.length; i++) {
//             main.push(a[i].charAt(j));
//         }
//         empty.push(main.join(""));
//     }
//     return empty;
// }
// console.log(diffArray(string));

// function getSameElement(arr1, arr2) {
//     let arr = [];
//     arr1.forEach((value,index) => {
//         if(arr2.includes(value)){
//             arr.push(value);
//         }
//     });
//     return arr;
// }
// console.log(getSameElement([1, 2, 3, 4], [3, 4, 5, 6]));

// function medianElement(arr) {
//     arr.sort((a, b) => a - b);
//     let a;
//     if (arr.length % 2 == 0) {
//         let b = (arr[((arr.length / 2) - 1)] + arr[(arr.length / 2)]) / 2;
//         console.log(b);
//         return arr[b];
//     } else {
//         a = Math.floor((arr.length) / 2);
//     }
//     return arr[a];
// }
// console.log(medianElement([5, 2, 8, 1, 3]));
// console.log(medianElement([5, 2, 8, 1]));

// function rotate(arr, number) {
//     let empty = [];
//     let findNumberIndex = arr.findIndex(value => value == number)
//     let a = arr.slice(findNumberIndex + 1);
//     let b = arr.slice(0, findNumberIndex+1);
//     return a.concat(b);
// }
// console.log(rotate([1, 2, 3, 4, 5], 2)); // [3 , 4 , 5 , 1 , 2]

// let arr = ["apple", "banana", "mango", "apple"];
// function removeDuplicate(arr) {
//     let a = [];
//     arr.forEach(value => {
//         value.toLowerCase();
//         if (!a.includes(value)) {
//             a.push(value);
//         }
//     });
//     return a;
// }
// console.log(removeDuplicate(arr));

// let arr = [
//     { id: 6 },
//     { id: 1 },
//     { id: 2 },
//     { id: 3 },
//     { id: 3 },
//     { id: 1 },
// ]
// function removeDuplicateId(arr) {
//     let a = [];
//     arr.forEach(value => {
//         if (!(a.find(e => e.id == value.id))) {
//             a.push(value);
//         }
//     });
//     return a;
// }
// console.log(removeDuplicateId(arr));

// function findkthElement(arr, element) {
//     arr.sort((a, b) => a - b);
//     return arr[arr.length - element];
// }
// console.log(findkthElement([5, 2, 8, 1, 3], 3));

// function table(number) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(number + "*" + i + "=" + i * number);
//     }
// }
// console.log(table(4));

// function multiplyOther(arr) {
//     let a = arr.map(value => {
//         return arr.reduce((acc, cur) => cur == value ? acc : acc * cur, 1);
//     });
//     return a;
// }
// console.log(multiplyOther([1, 2, 3, 4]));


// Write a JavaScript function to find the longest common starting substring in a set of strings
// function findString(arr1) {
//     let a = "";
//     let b = arr1[1].split("");
//     let c = arr1[0].split("");
//     for (let i = 0; i < b.length; i++) {
//         console.log(b[i]);
//         if (b[i] == c[i]) {
//             a += c[i];
//         } else {
//             break;
//         }
//     }
//     return a;
// }
// console.log(findString(['go', 'google']));

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