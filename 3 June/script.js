// let arr = ["bhaumik", "Raj", "Vansh", "sachin"];
// console.log(arr.filter(value => value[0] == value[0].toUpperCase()));

// let arr = [
//     { a: 10, b: 20, c: [{ a: 11, b: 21, d: ['p', 'q'] }] },
//     { a: 12, b: 18, c: [{ a: 8, b: 25, d: [1, 2, 'p'] }] },
//     { a: 16, b: 29, c: [{ a: 5, b: 10, d: ['q', 'r', 's'] }] },
//     { a: 15, b: 20, c: [{ a: 11, b: 21, d: [5] }] }
// ]

// console.log(arr.filter(value => value.c.filter(item => item.d.filter(value => value == 'p').length).length));

// let arr = [{ a: 15, b: [15, 20] }, { a: 15, b: 15 }];
// let arr2 = arr.map(value => {
//     if (Array.isArray(value.b)) {
//         let abc = value.b.map(value => value * 2);
//         return { ...value,b:abc};
//     } else {
//         return value;
//     }
// });
// console.log(arr2);

// let a = [1, 2, 3, 4, 5];
// let b = a.find(value => {});
// console.log(b);

// let a = [];
// let b = a.map((value) => value);
// console.log(b);

// let num = [1, 2, 3, 4, 5];
// let newNum = num.map((value,index, arr) => arr[value + 1]);
// console.log(newNum);

// let num = [{ a: 15 }, { c: { b: 20 } }];
// let newArr = num.map((value) => value?.b.map((value) => value * 2));
// console.log(newArr); //error

// let obj = { a: 10, b: 20, c: 10 };
// function abc({ a, b }) {
//     return { a, b };
// }
// console.log(abc(obj));

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.forEach(value => console.log(value + 1)));
// console.log(arr);

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-3, 4));
// console.log(arr.slice(-3, -1));
// console.log(arr.slice(-2, -5));           //[]-empty array
// console.log(arr.slice(5, 2));             //[]-empty array

// splice :- parameter:-start , deleteitems , itemname...
// let arr = ["Bhaumik", "rudra", "Vansh"];
// arr.splice(2, 0, "Raj");
// console.log(arr);

// let arr = ["Bhaumik", "rudra", "Vansh"];
// arr.splice(1, 0, "Raj", "Raj", "Raj", "Raj", "Raj", "Raj", "Raj", "Raj", "Raj", "Raj", "Raj", "Raj", "Raj", "Raj", "Raj", "Raj");
// console.log(arr);

// let arr = ["Bhaumik", "rudra", "Vansh"];
// arr.splice(-1, -2, "Raj","Sachin","Raj","Sachin");                       //parameter:-start , deleteitems , itemname...
// console.log(arr);


// let arr = [10, 20, 30, 40, 50];
// console.log(arr.findLastIndex(value => value > 30));

// let names = ["Raj", "Bhaumik", "Rudra", "Vansh", "Riddhi", "Ayushi"];
// let obj = {};
// names.forEach(value => {
//     let keyName = value[0].toUpperCase();
//     if (obj[keyName]) {
//         obj[keyName].push(value);
//     } else {
//         obj[keyName] = [value];
//     }
// });
// console.log(obj);

// let keyName = [];
// for (let i = 0; i < names.length; i++) {
//     keyName.push(names[i].charAt(0));
// }
// let ans = {};
// for (let i = 0; i < names.length; i++) {
//     if(keyName[i] == names[i].charAt(0)){
//         return
//     }
// }

// for (let i in names) {
//     name1.push(names[i].charAt(0));
//     ans[name1[i]] == names[i];
// }
// console.log(ans);

// {
//     a:["ayushi"],
//     b:["bhaumik"],
//     r : ["raj","riddhi","rudra"],
//     v:["vansh"]
// }





// let nestedArray = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];
// // console.log(nestedArray.flat(5));
// let newarray = [];
// function flatArray(arr, depth = 1) {
//     arr.map(value => {
//         if (Array.isArray(value) && depth > 0) {
//             flatArray(value, depth - 1);
//         } else {
//             newarray.push(value);
//         }
//     });
//     return newarray;
// }
// console.log(flatArray(nestedArray,5));