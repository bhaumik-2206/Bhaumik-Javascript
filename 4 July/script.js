// let a = [15, 16, 17, 18, 19].reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
// );
// console.log(a);

// let arr = [
//     { a: 10 },
//     { a: 20 },
//     { a: 20 }
// ]
// let result = arr.reduce((acc, curr) => acc + curr.a, 0);
// console.log(result);

// let arr = [1, 2, 3, , 4];
// let a = arr.reduce((acc,cur)=>acc+cur);
// console.log(a);

// let arr = [1, 2, 3, null , 4];
// let a = arr.reduce((acc,cur)=>acc+cur);
// console.log(a);

// let arr = [1, 2, 3, undefined , 4];
// let a = arr.reduce((acc,cur)=>acc+cur);
// console.log(a);

// let arr = [1, 2, 3, true, false, 4];
// let a = arr.reduce((acc, cur) => acc + cur);
// console.log(a);

// let arr = [1, 2, 3, 4, 5];
// let a = arr.reduce((acc, cur, index) =>console.log(acc + cur + " = " + index));
// console.log(a);

// let arr = [
//     { price: 10 },
//     { price: 20 },
//     { price: 30 },
//     { price: 40 },
//     { price: 50 },
//     { price: 60 },
//     { price: 70 },
//     { price: 80 },
//     { price: 90 },
//     { price: 100 },
// ]
// const totalPrice = arr.reduce((total, current, index, array) => {
//     // console.log("total is = " + total);
//     // console.log("Current Value is = " + current.price);
//     // console.log("index is = " + index);
//     // console.log(array[index].price, " This is an array");
//     // console.log(array , "this is array");
//     return total + current.price;
// }, 0);
// console.log(totalPrice);



// let arr = [1, 2, 3, 4, 5];
// let a = arr.reduce((total, current, index, array) => {
//     console.log(total);
//     console.log(current, "current");
//     console.log(index, " Index is");
//     return total + current
// }, 0);
// console.log(a);


// let names = [
//     { fname: "Bhaumik", age: 18 },
//     { fname: "vivek", age: 19 },
//     { fname: "vansh", age: 40 },
//     { fname: "raj", age: 18 },
// ]
// let result = names.reduce((newObject, personName) => {
//     let age = personName.age;
//     if (newObject[age] == null) {
//         newObject[age] = []
//     }
//     newObject[age].push(personName)
//     return newObject
// }, {});
// console.log(result);


// let names = ["Raj", "Bhaumik", "Rudra", "Vansh", "Riddhi", "Ayushi", "Sachin", "Krishna", "Jeel", "Bhakti", "Prakhar", "Dhruval"];
// let result = names.reduce((acc, cur) => {
//     let keyName = cur[0].toUpperCase();
//     if (acc[keyName] == null) {
//         acc[keyName] = [];
//     }
//     acc[keyName].push(cur);
//     return acc;
// }, {});
// console.log(result);


// let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// let uniqueAgeGroup = ageGroup.reduce(function (p, c) {
//     if (p.indexOf(c) === -1) {
//         p.push(c);
//     }
//     return p;
// }, []);
// console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]

// let arr = [1, 2, 3, 4, 5];
// function sum(acc,cur) {
//     return acc+cur;
// }
// console.log(arr.reduce(sum,10));

let names = [
    { name: "raj", age: 19 },
    { name: "bhaumik", age: 18 },
    { name: "vansh", age: 35 },
    { name: "sachin", age: 60 },
    { name: "rudra", age: 12 },
    { name: "prakhar", age: 5 }
]
let highestAge = names.reduce((acc, cur) => {
    if (cur.age > acc) {
        return cur.age;
    }
    return acc;
}, 0);
// console.log(highestAge);
let getName = names.filter(value=>{
    if(value.age == highestAge){
        return value.name;
    }
});
console.log(getName);




// let arr = [{ a: 10 }, { a: 20 }, { a: 30 }, { a: 40 }, { a: 50 }];
// for (let i = 0; i < arr.length; i++) {
//     arr[i].a *= 2;
// }
// console.log(arr);
// let arr1 = arr.map(value => { value.a * 2; return value });
// console.log(arr1);