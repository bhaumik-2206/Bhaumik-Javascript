// let obj1 = {
//     fname: "Bhaumik",
//     lname: "Panchal"
// }
// console.log(obj1.hasOwnProperty('fname'));

// let person = {
//     name: 'John',
//     age: 30,
//     greet: function () {
//         console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
//     }
// };
// person.greet(); .

// let a={ a: 1, b: 2 };
// let b={ a: 1, b: 2 };
// console.log();
// console.log(a == b);
// console.log(a === b);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = { a: [6, 7, 8, 9, 10] };
// arr4 = [6, 7, 8, b = { c: 10, d: 20 }]
// let arr3 = Object.assign(arr1, arr2, arr4);
// console.log(arr3);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let arr3 = Object.assign(arr1,arr2);
// console.log(arr3);

// arr4 = [1, 2, 3, b = { c: 10, d: 20 }]
// arr5 = [6, 7, 8, c = { c: 10, d: 20 }]
// let arr6 = Object.assign(arr4, arr5);
// console.log(arr6);

// const browserType = "mozilla";
// let a = browserType[browserType.length - 1];
// console.log(a);

// const tagline = "Hii Hello";
// console.log(tagline.search("H"));
// console.log(tagline.search("He"));
// console.log(tagline.indexOf("He"));
// console.log(tagline.indexOf("H"));

// const vansh = "Hello my name is vansh!";
// let a = vansh.replace("vansh!",vansh.slice(vansh.length - 6).toUpperCase());
// console.log(a);

// function capitalize_Words(pass_string) {
//     let arr = pass_string.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length - 1) + arr[i].charAt(arr[i].length - 1).toUpperCase();
//     }
//     console.log(arr.join(' '));
// }
// console.log(capitalize_Words('js string exercises'));


// let arr1 = "Bhaumik";
// let arr2 = [6, 7, 8, 9, 10];
// let arr2 = { a: [6, 7, 8, 9, 10] };
// let arr3 = Object.assign(arr1, arr2);
// let arr4 = Object.assign(arr2, arr1);
// console.log(arr3);
// console.log(arr4);


// function assign(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }
// let obj1 = { a: 15 };
// let obj2 = { b: 20 };
// let obj3 = assign(obj1, obj2);
// obj3.a = 20;
// console.log(obj1);