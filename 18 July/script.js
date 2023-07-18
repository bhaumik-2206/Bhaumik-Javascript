// --------------------------Object-------------------
// let car = {
//     brand: "BMW",
//     model: "X5",
//     color: "red",
// }
// for (const key in car) {
//     console.log(key + " is " + car[key]);
// }



//--------------------------Array-------------------------
// let a;
// console.log(typeof a);

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// function removeDuplicateValue(numbers) {
//     return numbers.filter((value, index) => numbers.indexOf(value) === index);
// }
// console.log(removeDuplicateValue(numbers));

// function union(arr1, arr2) {
//     let concat = [...arr1, ...arr2];
//     return concat.filter((value, index) => concat.indexOf(value) === index).sort((a, b) => a - b);
// }
// console.log(union([1, 2, 3], [100, 2, 1, 10])); //[ 1, 2, 3, 10, 100 ]

// let arr = [1, 2, 3, 4, 5];
// let sumOfSquare = arr.reduce((acc, cur) => acc + cur ** 2, 0);
// console.log(sumOfSquare);

// let donut = [
//     {
//         id: "0001",
//         type: "donut1",
//         name: "Cake",
//         ppu: 0.55,
//         batters: {
//             batter: [
//                 { id: "1001", type: "Regular" },
//                 { id: "1002", type: "Chocolate" },
//                 { id: "1003", type: "Blueberry" },
//                 { id: "1004", type: "Devil's Food" },
//             ],
//         },
//         topping: [
//             { id: "5001", type: "None" },
//             { id: "5002", type: "Glazed" },
//             { id: "5005", type: "Sugar" },
//             { id: "5007", type: "Powdered Sugar" },
//             { id: "5006", type: "Chocolate with Sprinkles" },
//             { id: "5003", type: "Chocolate" },
//             { id: "5004", type: "Maple" },
//         ],
//     },
//     {
//         id: "0002",
//         type: "donut2",
//         name: "Raised",
//         ppu: 0.55,
//         batters: {
//             batter: [{ id: "1001", type: "Regular" }],
//         },
//         topping: [
//             { id: "5001", type: "None" },
//             { id: "5002", type: "Glazed" },
//             { id: "5005", type: "Sugar" },
//             { id: "5003", type: "Chocolate" },
//             { id: "5004", type: "Maple" },
//         ],
//     },
//     {
//         id: "0003",
//         type: "donut3",
//         name: "Old Fashioned",
//         ppu: 0.55,
//         batters: {
//             batter: [
//                 { id: "1001", type: "Regular" },
//                 { id: "1002", type: "Chocolate" },
//             ],
//         },
//         topping: [
//             { id: "5001", type: "None" },
//             { id: "5002", type: "Glazed" },
//             { id: "5003", type: "Chocolate" },
//             { id: "5004", type: "Maple" },
//         ],
//     },
//     {
//         id: "0004",
//         type: "donut4",
//         name: "Old Fashioned",
//         ppu: 0.55,
//         batters: {
//             batter: [{ id: "1001", type: "Regular" }],
//         },
//         topping: [
//             { id: "5001", type: "None" },
//             { id: "5002", type: "Glazed" },
//             { id: "5003", type: "Chocolate" },
//             { id: "5004", type: "Maple" },
//         ],
//     },
//     {
//         id: "0005",
//         type: "donut5",
//         name: "Old Fashioned",
//         ppu: 0.49,
//         batters: {
//             batter: [
//                 { id: "1001", type: "" },
//                 { id: "1001", type: "Maple" },
//                 { id: "1001", type: "Glazed" },
//             ],
//         },
//         topping: [
//             { id: "5001", type: "None" },
//             { id: "5002", type: "Glazed" },
//             { id: "5003", type: "Chocolate" },
//             { id: "5004", type: "Maple" },
//         ],
//     },
// ];

// -------------------------filter donuts based on which have topping  Chocolate
// function filterChocolate(arr) {
//     return arr.filter(value => value.topping.find(e => e.type === "Chocolate")).map(v => v.type);
// }
// console.log(filterChocolate(donut));

// function filterChocolate(arr) {
//     return arr.filter(value => value.topping.find(e => e.type === "Chocolate"));
// }
// console.log(filterChocolate(donut));

// -------------------------filter donuts based which have batter type is regular and topping have Chocolate
// function filterChoReg(arr) {
//     return arr.filter(value => value.topping.find(e => e.type === "Chocolate") && value.batters.batter.find(e => e.type === "Regular"));
// }
// console.log(filterChoReg(donut));

// function filterChoReg(arr) {
//     return arr.filter(value => value.topping.find(e => e.type === "Chocolate") && value.batters.batter.find(e => e.type === "Regular")).map(value=>value.type);
// }
// console.log(filterChoReg(donut));

// ---------------------------filter donuts based on which have topping chocolate and Sugar
// function filterChoSug(arr) {
//     return arr.filter(value => value.topping.find(e => e.type === "Chocolate") && value.topping.find(e => e.type === "Sugar"));
// }
// console.log(filterChoSug(donut));

//-------------------------------filter donuts based on ppu > 0.5
// function ppuFilter(arr) {
//     return arr.filter(value => value.ppu > 0.50);
// }
// console.log(ppuFilter(donut));

// -------------------------------bring all batters for all donuts in single array
// function battersInOneArray(arr) {
//     return arr.map(value=>value.batters)
// }
// console.log(battersInOneArray(donut));

// ---------------------------------filter donuts based on which have 2 and more than 2 batter in it
// function filterMoreThanTwoBatters(arr) {
//     return arr.filter(value => value.batters.batter.length >= 2);
// }
// console.log(filterMoreThanTwoBatters(donut));


// Implement a function that checks whether a given string is a palindrome (reads the same forwards and backwards).
// function checkIsPalindrome(string) {
//     let a = string.split('').reverse().join("");
//     return string === a ? true : false;
// }
// console.log(checkIsPalindrome('level'));
// console.log(checkIsPalindrome('Hello'));

// const books = [
//     { "title": "Book 5", "author": "Author 5", "price": 14.99 },
//     { "title": "Book 1", "author": "Author 1", "price": 10.99 },
//     { "title": "Book 4", "author": "Author 4", "price": 9.99 },
//     { "title": "Book 2", "author": "Author 2", "price": 15.99 },
//     { "title": "Book 3", "author": "Author 3", "price": 12.99 },
// ]
// function sortByTitle(arr) {
//     return arr.sort((a, b) => {
//         if (a.title > b.title) {
//             return 1;
//         } else if (a.title < b.title) {
//             return -1;
//         } else {
//             return 0;
//         }
//     });
// }
// console.log(sortByTitle(books));
// function average(arr) {
//     return arr.reduce((acc, cur) => cur.price + acc, 0)/arr.length;
// }
// console.log(average(books));

// Implement a function that takes a string and returns an object with each unique word in the string as a key and the number of occurrences of that word as the value.
let string = "This is a new sentence. we are learning Javascript";
function returnAnObject(string) {
    return string.split("");
}
console.log(returnAnObject(string));