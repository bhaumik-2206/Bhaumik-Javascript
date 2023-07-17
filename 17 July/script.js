// // -----------------------Form Events---------------------
// // submit Event
// let form = document.getElementById('form');
// form.addEventListener('submit', function () {
//     window.alert('Form Submitted');
// });

// // change Event
// let input2 = document.getElementById('input2');
// input2.addEventListener('change', function () {
//     a = input2.value;
//     document.getElementById('span2').innerHTML = a;
// });

// // input Event
// let input = document.getElementById('input');
// input.addEventListener('input', function () {
//     a = input.value;
//     document.getElementById('span').innerHTML = a;
// });

// // focus Event
// let fname = document.getElementById('fname');
// let lname = document.getElementById('lname');
// fname.addEventListener('focus', function () {
//     fname.style.backgroundColor = "lightblue";
// });
// lname.addEventListener('focus', function () {
//     lname.style.backgroundColor = "lightblue";
// });

// // blur Event
// fname.addEventListener('blur', function () {
//     fname.style.backgroundColor = "";
// });
// lname.addEventListener('blur', function () {
//     lname.style.backgroundColor = "";
// });


// let body = document.getElementById('body');
// let change = document.getElementById('change');
// change.addEventListener('click', function () {
//     if (body.className == "black") {
//         body.className == "white";
//         console.log('hello');
//     } else {
//         body.className == "black";
//     }
// })

// let arr = [1, 2, [3, 4, 5], [1, 2], [5, 8]];
// function compare(arr1, arr2) {
//     return arr1.every((value, index) => arr1[index] === arr2[index]);
// }
// function compareWithValue(arr, number) {
//     return arr.some(value => Array.isArray(value) && compare(value, number));
// }
// console.log(compareWithValue(arr, [1, 2]));
// console.log(compareWithValue(arr, [2, 1]));
// console.log(compareWithValue(arr, [5, 8]));

// let arr = [1, 2, [3, 4, 5], [1, 2], [5, 8]];
// function compare(arr1, arr2) {
//     return arr1.every((value, index) => arr1.includes(arr2[index]));
// }
// function compareWithValue(arr, number) {
//     return arr.some(value => Array.isArray(value) && compare(value, number));
// }
// console.log(compareWithValue(arr, [1, 2]));
// console.log(compareWithValue(arr, [3, 4, 5]));
// console.log(compareWithValue(arr, [5, 4, 3]));
// console.log(compareWithValue(arr, [5, 9]));

// function factorChaining(numbers) {
//     for (let i = 0; i < numbers.length - 1; i++) {
//         if (numbers[i + 1] % numbers[i] !== 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(factorChaining([2, 4, 8, 16, 32]));    // Output: true
// console.log(factorChaining([2, 4, 16, 32, 64]));   // Output: true
// console.log(factorChaining([2, 4, 16, 32, 68]));   // Output: false

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [
//     { id: 1, product: "PC" },
//     { id: 4, product: "Notebok" },
//     { id: 7, product: "Laptop" },
// ]
// function filterDiffId(arr1, arr2) {
//     return arr2.filter(value => !arr1.includes(value.id));
// }
// console.log(filterDiffId(arr1,arr2));

// function findMaximumLength(arr) {
//     let a = 0;
//     arr.forEach(value => {
//         if (Array.isArray(value) && a < value.length) {
//             a = value.length;
//         }
//     });
//     return a;
// }
// console.log(findMaximumLength([2, 8, [6], 3, 3, 5, 3, 4, [5, 4], [6]]));
// console.log(findMaximumLength([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]));
// console.log(findMaximumLength([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]], [23, 56]]));
// console.log(findMaximumLength([1, 5, 2, 6, 4, 23, 89]));