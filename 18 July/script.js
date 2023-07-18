// ------------------------Scope---------------------
// let a = 10;
// function hello() {
//     a = 20;
//     console.log(a);
// }
// hello();
// let a = 10;
// {
//     let b = 20;
//     function hi() {
//         let c = 30;
//         function no() {
//             console.log(a);      //10
//             console.log(b);      //20
//             console.log(c);      //30
//             console.log(d);      // d is not defined
//         };
//         no()
//     }
// }
// hi();

// const a = 10;
// {
//     const a = 20;
//     const b = 20;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);

// {
//     const a = 20;
// }
// a = 30
// console.log(a);



// ------------------------Function-------------------
// function first() {
//     let a = ab = () => 1;
//     return a;
// }
// let a = first();
// console.log(a);     // Here , this is function
// console.log(a());   // Here answer is 1

// function first() {
//     let a = ab = () => {
//         let b = bc = () => {
//             return 10;
//         }
//         return b;
//     }
//     return a;
// }
// let newOne = first();
// console.log(newOne);
// let second = newOne();
// console.log(second);
// console.log(second());

// function abc() {
//     let a = ab = () => 10;
//     console.log(a);
//     return bc();
// }
// function bc() {
//     return z = () => 20;
// }
// let a = abc();
// console.log(a);

// function abc() {
//     const ab = () => 40;
//     abcd(() => ab());
// }
// function abcd(cb) {
//     let a = cb();
//     console.log(a);
// }
// console.log(abc());


// What is the syntax for declaring a JavaScript function called calculateSum that takes two parameters num1 and num2, and returns their sum? (write all four types of functions as we discussed in session)
// With parameter and with return value
// function calculateSum(num1, num2) {
//     return num1 + num2;
// }
// console.log(calculateSum(10, 20));

// With parameter and without return value
// function calculateSum(num1, num2) {
//     console.log(num1 + num2);
// }
// calculateSum(10, 20);

// without parameter and with return value
// function calculateSum() {
//     let num1 = 10;
//     let num2 = 20;
//     return num1+num2
// }
// console.log(calculateSum(10, 20));

// Without parameter and Without return value
// function calculateSum() {
//     let num1 = 10;
//     let num2 = 20;
//     console.log(num1 + num2);
// }
// calculateSum(10, 20);

// Write a function that takes three parameters and returns the maximum number of three.(use ternary operator and if..else as well) (Also make all four types of function as we discussed in session) (total: 8 functions definition)
// With parameter and with return value
// function findMax(a, b, c) {
//     return a > b ? (a > c ? a : c) : (b > c ? b : c);
// }
// console.log(findMax(10, 20, 30));
// function findMax(a, b, c) {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > c) {
//         return b;
//     } else {
//         return c;
//     }
// }
// console.log(findMax(10, 20, 30));

// With parameter and without return value
// function findMax(a, b, c) {
//     console.log(a > b ? (a > c ? a : c) : (b > c ? b : c));
// }
// findMax(10, 20, 30)
// function findMax(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// findMax(10, 20, 30);

// Without parameter and with return value
// function findMax() {
//     let a = 10;
//     let b = 20;
//     let c = 30;
//     return a > b ? (a > c ? a : c) : (b > c ? b : c);
// }
// console.log(findMax());
// function findMax() {
//     let a = 10;
//     let b = 20;
//     let c = 30;
//     if (a > b && a > c) {
//         return a;
//     } else if (b > c) {
//         return b;
//     } else {
//         return c;
//     }
// }
// console.log(findMax());

// Without parameter and without return value
// function findMax() {
//     let a = 10;
//     let b = 20;
//     let c = 30;
//     console.log(a > b ? (a > c ? a : c) : (b > c ? b : c));
// }
// findMax();
// function findMax() {
//     let a = 10;
//     let b = 20;
//     let c = 30;
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// findMax();

// Create a JavaScript function called calculatePrice that takes a two parameter price, discount and returns discounted price. 	(defaultDiscount = 10%)
// function calculatePrice(price, discount = 10) {          // Normal Function
//     return price - (price / discount);
// }
// console.log(calculatePrice(1000));
// const calculatePrice = (price, discount = 10) => {       // Arrow Function
//     return price - (price / discount);
// }
// console.log(calculatePrice(1000));

// What is the syntax for declaring a JavaScript function called calculateMultiply that takes two parameters num1 and num2, and returns their multiplication? (make sure that never give an error if i passed anything) (if not pass anything then return 1)
// function calculateMultiply(num1 = 1, num2 = 1) {
//     return num1 * num2;
// }
// console.log(calculateMultiply(10,5));
// console.log(calculateMultiply());




// -------------------------String--------------------
//at, chatAt, charCodeAt, concat, endsWith, includes, indexOf, lastIndexOf, match, matchAll, padEnd, padStart, replace,replaceAll, search, slice, split, startsWith, substring, toLowerCase, toUpperCase, trim, trimEnd, trimStart
// Write a function that counts the number of vowels in a string.
// function vowels(string) {
//     return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(string);
// }
// function countVowels(string) {
//     let a = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (vowels(string[i])) {
//             a++;
//         }
//     }
//     return a;
// }
// console.log(countVowels("Hello"));

// Print Vowels in given string
// function printVowels(string) {
//     let a = [];
//     for (let i = 0; i < string.length; i++) {
//         if (vowels(string[i])) {
//             a.push(string[i]);
//         }
//     }
//     return a;
// }
// console.log(printVowels("Hello"));

// function is_string(pass_string) {
//     return typeof pass_string == 'string' ? true : false;
// }
// console.log(is_string('w3resource'));
// console.log(is_string([1, 2, 4, 0]));

// function is_Blank(string) {
//     return string.trim() === "" ? true : false;
// }
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));

// function string_to_array(string) {
//     return string.split(" ");
// }
// console.log(string_to_array("Robin Singh"));

// function truncate_string(string, number) {
//     return string.substring(0, number);
// }
// console.log(truncate_string("Robin Singh", 4));

// function protect_email(email) {
//     return email.slice(0,4) + "...." + email.slice(email.indexOf('@'));
// }
// console.log(protect_email("robin_singh@example.com"));
// console.log(protect_email("rajbhundela@example.com"));

// function string_parameterize(string) {
//     return string.toLowerCase().replaceAll(" ","-")
// }
// console.log(string_parameterize("Robin Singh from USA."));

// function capitalize_Words(string) {
//     return string.split(" ").map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(" ");
// }
// console.log(capitalize_Words('js string exercises'));

// function insert(string, add = "", index = 0) {
//     return string.slice(0, index) + add + string.slice(index);
// }
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.', 'JavaScript '));
// console.log(insert('We are doing some exercises.', 'JavaScript ', 18));


// function removeDuplicateValue(string) {
//     let removeString = "";
//     for (let i = 0; i < string.length; i++) {
//         if (removeString.indexOf(string[i]) == -1) {
//             removeString += string[i];
//         }
//     }
//     return removeString;
// }
// console.log(removeDuplicateValue("Hello"));

// let string = "Hello Javascript";
// function getWord(string, character) {
//     let a = string.split(" ");
//     let b = a.filter(value => {
//         return value.includes(character);
//     });
//     return b.join("");
// }
// console.log(getWord(string, 'l'));

// How do you count the number of Letter in a string in JavaScript?
// function countNumberOfWord(string) {
//     return string.split(" ").join("").length;
// }
// console.log(countNumberOfWord("Hello World"));

// Find Longest word in JS
// function findLongestWord(string) {
//     let a = "";
//     let b = 0;
//     string.split(" ").forEach(value => {
//         if (value.length >= b) {
//             b = value.length;
//             a = value;
//         }
//     });
//     return a;
// }
// console.log(findLongestWord("Hello we are learning javascript"));

// Remove HTML tags
// function remobveHTMLTags(string) {
//     return string.slice(string.indexOf(">")+1,string.lastIndexOf("<"));
// }
// console.log(remobveHTMLTags("<h1>Hello World</h1>"));

// let string = "Bhaumik Vansh Jeel Krishna Rudra Sachin Dhruval Bhakti Meghna Pujan Prakhar";
// function randomName(string) {
//     let a = string.split(" ");
//     let r = Math.floor(Math.random() * (a.length - 0) + 0);
//     console.log(r);
//     return a.at(r);
// }
// console.log(randomName(string));

// let string1 = "abcd";
// let string2 = "cdef";
// function differenceBetweenString(str1, str2) {
//     let a = "";
//     for (let i = 0; i < str1.length; i++) {
//         if (!str2.includes(str1[i])) {
//             a += str1[i];
//         }
//     }
//     for (let i = 0; i < str2.length; i++) {
//         if (!str1.includes(str2[i])) {
//             a += str2[i];
//         }
//     }
//     return a;
// }
// console.log(differenceBetweenString(string1, string2));


// function abc(a, b) {
//     for (let i = 0; i <= (Math.pow(a, i)); i++) {
//         if (Math.pow(a, i) == b) {
//             return true;
//         }
//     }
// }
// console.log(abc(3, 9));
// console.log(abc(3, 10));

// function isPower_of_two(a, b) {
//     if( b % a !== 0) return false
//     for (let i = 0; i < b; i++) {
//         console.log(i);
//         if (Math.pow(a, i) == b) {
//             return true;
//         }else if(Math.pow(a, i) > b){
//             return false;
//         }
//     }
//     return false;
// }
// console.log(isPower_of_two(3, 9));
// console.log(isPower_of_two(3, 90));


// let a = 10;
// console.log(a++ + ++a + ++a + a++ + --a + a-- + a++ + ++a); //10 + 12 + 13 + 13 + 13 + 13 + 12 + 14
// console.log((1000000000000000128).toFixed(10));
// console.log(20.25.toExponential(2));
// console.log(typeof 20.23.toFixed(2));
// console.log(typeof 20.23.toExponential(2));
// console.log(typeof 20.23.toLocaleString(2));
// console.log(typeof 20.23.toPrecision(2));
// console.log(typeof 20.23.toString(2));


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
// let string = "This is a new sentence. we are learning Javascript";
// function returnAnObject(string) {
//     return string.split("");
// }
// console.log(returnAnObject(string));
