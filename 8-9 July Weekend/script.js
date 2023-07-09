// let arr = ["  raj  ", "  Bhaumik   ", "vansh   ", "   vivek"]
// function stringToUpperCase(arr) {
//     return arr.map(value => value.toUpperCase().trim());
// }
// console.log(stringToUpperCase(arr));


// let numbers = [1, 54, 23, 524, -24, 53, -528, 8,];
// function addEvenNumbers(arr) {
//     return arr.reduce((acc, cur) => cur % 2 == 0 && cur > 0 ? acc + cur : acc, 0);
// }
// console.log(addEvenNumbers(numbers));


// let string = ["hello", "hello", "hello", "hello", "hello"];
// function checkStringLength(arr) {
//     return arr.every((value, index, arr) => {
//         let a = arr[0].length;
//         return value.length === a;
//     });
// }
// console.log(checkStringLength(string));


// let books = [
//     { title: "Arthashastra", author: "Kautilya", bookNumber: 1 },
//     { title: "A Million Mutinies Now ", author: "V.S. Naipaul", bookNumber: 1 },
//     { title: "Satya Na Prayogo", author: "Mahatma Gandhiji", bookNumber: 2 },
//     { title: "Arthashastra", author: "Kautilya", bookNumber: 2 },
//     { title: "Satya Na Prayogo", author: "Mahatma Gandhiji", bookNumber: 1 },
//     { title: "A Million Mutinies Now ", author: "V.S. Naipaul", bookNumber: 2 },
//     { title: "Arthashastra", author: "Kautilya", bookNumber: 3 },
// ]
// function sortBooks(arr) {
//     return arr.sort((a, b) => a.bookNumber - b.bookNumber).sort((a, b) => {
//         if (a.title < b.title) {
//             return -1;
//         }
//         if (a.title > b.title) {
//             return 1;
//         }
//         return 0;
//     });
// }
// console.log(sortBooks(books));


// let data = [
//     { name: "Raj", age: 19 },
//     { name: "Bhaumik", age: 18 },
//     { name: "Vansh", age: 19 },
//     { name: "Vivek", age: 20 },
//     // { name: "Jay"},
// ]
// function returnIfDataMissing(arr) {
//     let a = arr.every(value => value.name && value.age);
//     return a;
// }
// console.log(returnIfDataMissing(data));


// let data = [
//     { name: "Raj", age: 19 },
//     { name: "Bhaumik", age: 18 },
//     { name: "Vansh", age: 19 },
//     { name: "Vivek", age: 20 },
//     { name: "Jay" },
// ]
// function findMissingData(arr) {
//     return arr.filter(value => !value.age);
// }
// console.log(findMissingData(data));


// let array = ['Raj', "Bhaumik", "Vansh", "Jeel", "Krishna", "Sachin", "Rudra", "Prakhar", "Bhakti", "Dhruval", "Pujan", "Meghna"];
// function sliceTheString(arr) {
//     return arr.map(value => {
//         value = value.charAt(0).toUpperCase().charCodeAt();
//         if (value % 2 == 0){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }
// console.log(sliceTheString(array));
// console.log(String.fromCharCode(65));


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function findMax(arr, number) {
//     let a = arr.sort((a, b) => b - a);
//     return a[number - 1];
// }
// console.log(findMax(arr, 3));



// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
// ];
// function getAverage(products) {
//     let result = [];
//     for (let product of products) {
//         let category = product.category;
//         let existingCategory = result.find(item => item.category === category);
//         if (existingCategory) {
//             existingCategory.totalPrice += product.price;
//             existingCategory.count++;
//         } else {
//             result.push({ category: category, totalPrice: product.price, count: 1 });
//         }
//     }
//     for (let categoryObj of result) {
//         categoryObj.average = categoryObj.totalPrice / categoryObj.count;
//         delete categoryObj.totalPrice;
//         delete categoryObj.count;
//     }
//     return result;
// }
// console.log(getAverage(products));


// function pairOfSum(array, sum) {
//     let arr = Array(array).fill().map((v, i) => i + 1);
//     let a = arr.reduce((acc, cur, index, arr) => {
//         for (let i = index; i < arr.length; i++) {
//             if (cur + arr[i] === sum) {
//                 acc.push([cur, arr[i]]);
//             }
//         }
//         return acc;
//     }, []);
//     return a;
// }
// console.log(pairOfSum(10, 17));


// let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// function sortByOddEven(arr) {
//     odd = [];
//     even = [];
//     arr.forEach(value => value % 2 == 0 ? even.push(value) : odd.push(value));
//     odd.sort((a, b) => a - b);
//     even.sort((a, b) => a - b);
//     return odd.concat(even);
// }
// console.log(sortByOddEven(arr));


// let arrString = ["Raj", "Bhaumik", "vansh"];
// function countCharacter(arr) {
//     let a = [];
//     arr.forEach(value => {
//         let b = value.split("");
//         for (let i = 0; i < b.length; i++) {
//             if (!a.includes(b[i])){
//                 a.push(b[i]);
//             }
//         }
//     });
//     return a.length;
// }
// console.log(countCharacter(arrString));










// let numbers = [[2, 3, 51], 10, 2, 3, [4, 5], [6], 34, [2]];
// function sortByLength(arr) {
//     return arr.sort((a, b) => a - b).map(value => { if (value.length == undefined) { return 1 } return value.length }).sort((a, b) => a - b);
// }
// console.log(sortByLength(numbers));