// function sum(value) {
//     let a = 10;
//     console.log(value);
//     return a;
// }
// let b = sum("Hello World");
// console.log(b);


// for (let i = 0; i <= 10; i++) {
//     continue;
//     console.log(i + "- Hello");
// }



// function assign(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }
// let obj1 = { a: 15 };
// let obj2 = { b: 20 };
// let obj3 = assign(obj1, obj2);
// obj3.a = 20;
// console.log(obj1);


//a
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1)


//b
// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.c.f = 30;
// console.log(arr1);


//c
// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// obj1.c.f = 30;
// console.log(arr1);


//d
// let obj1 = { a: 23, b: 45 };
// let arr1 = Object.assign([], [{ ...obj1 }]);
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1);


//e
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], arr1);
// arr2[0].c = 5;
// console.log(arr1);


//f
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], [{ ...arr1[0] }]);
// arr2[0].c = 5;
// console.log(arr1);
// console.log(arr2);


//g
// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// obj2.c.h = 67;
// console.log(obj1, obj2, obj3);



// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = { ...obj1 };
// console.log(obj1);
// console.log(obj2);



// let obj1 = { a: 10, b: 20 };
// let obj2 = { b: 30, c: 40 };
// let obj3 = Object.assign([], [{ ...obj1 }], { ...obj2 });
// obj3.c = 200;
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);


// let obj1 = { a: 10, b: 20 };
// let obj2 = Object.assign({}, { ...obj1 }, [{ c: 30 }]);
// obj2[0].c = 40;
// console.log(obj2);


// for (let i = 1; i <= 5; i++) {
//     let pattern = "";
//     for (let j = 1; j <= 5; j++) {
//         pattern += "* ";
//     }
//     console.log(pattern);
// }


// for (let i = 1; i <= 5; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "* "
//     }
//     console.log(pattern);
// }

// for (let i = 5; i >= 1; i--) {
//     let pattern = "";
//     for (let j = i; j >= 1; j--) {
//         pattern += "* "
//     }
//     console.log(pattern);
// }

// let obj1 = {
//     0: { a: 1 },
//     1: { b: 2 },
//     2: { c: 3 }
// }
// let a = Object.values(obj1);
// // for(let value in a){
// //     a[value].img = "some";
// // }
// // console.log(a);
// for (let i = 0; i < a.length; i++) {
//     a[i].img = "Something";
// }
// console.log(a);

// let arr1 = [{ a: 15, b: 20 }, Object.assign({}, { a: 150, b: 200 })];
// arr2 = [{ ...arr1[0] }];
// console.log(arr2);