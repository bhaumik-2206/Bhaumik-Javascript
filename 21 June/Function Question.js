// Question-1
// function sayHello() {
//     console.log("Say Hello");
// }
// sayHello();



// Question-2
//with argument and with return value
// function calculateSum(num1, num2) {
//     return para1 + para2;
// }
// let ans = calculateSum(10, 20);
// console.log(ans);

//with argument and without return value
// function calculateSum(num1, num2) {
//     console.log(num1 + num2);
// }
// calculateSum(10, 20);

//without argument and with return value
// function calculateSum() {
//     let a = 10;
//     let b = 20;
//     let sum = a + b;
//     return sum;
// }
// let ans=calculateSum();
// console.log(ans);

//without argument and without return value
// function calculateSum() {
//     let a=10;
//     let b=20;
//     console.log(a+b);
// }
// calculateSum();



// Question-3
// function printArray(arr) {       //with condole.log();
//     console.log(arr);
// }
// let arr = [10, 20, 30];
// printArray(arr);
// function printArray(arr) {       //with return value
//     return arr;
// }
// let arr = [10, 20, 30];
// let ans = printArray(arr);
// console.log(ans);



//Question-4
// const multiply = function (a, b) {
//     return a * b;
// }
// let ans = multiply(7, 5);
// console.log(ans);


//Question-5
// function myFunction() {
//     console.log("This is a function named myFunction");
// }
// myFunction();



//Question-6
// let squareNumber = (num) => {
//     return num * num;
// }
// let ans = squareNumber(5);
// console.log(ans);


// Question-7
// function getFullName (firstName,lastName) {
//     console.log(firstName + " " + lastName);
// }
// getFullName("Bhaumik","Panchal");


// Question-8
// function calculateArea(length, width) {
//     return length * width;
// }
// let areaRectangle = calculateArea(20, 4);
// console.log(areaRectangle);



// Question-9
// function isEven(num) {
//     if (num % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let ans1 = isEven(3);
// let ans2 = isEven(-3);
// console.log(ans1);
// console.log(ans2);


// Question-10
//Turnary Operators-with argument and with return value
// function maxNumber(num1, num2, num3) {
//     let maximum = (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);
//     return maximum;
// }
// let ans1 = maxNumber(10, 20, 30);
// console.log(ans1);

//Turnary Operators-with argument and without return value
// function maxNumber(num1, num2, num3) {
//     console.log((num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3));
// }
// maxNumber(10, 20, 30);

//Turnary Operators-without argument and with return value
// function maxNumber(num1, num2, num3) {
//     num1 = 10, num2 = 20, num3 = 30;
//     return (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);
// }
// let ans2 = maxNumber();
// console.log(ans2);

//Turnary Operators-without argument and without return value
// function maxNumber(num1, num2, num3) {
//     num1 = 10, num2 = 20, num3 = 30;
//     console.log((num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3));
// }
// maxNumber();

// if-else-with argument and with return value
// function maxNumber(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1;
//     } else if (num2 > num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }
// let ans = maxNumber(10, 20, 30);
// console.log(ans);

// if-else-with argument and without return value
// function maxNumber(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1);
//     }
//     else if (num2 > num3) {
//         console.log(num2);
//     } else {
//         console.log(num3);
//     }
// }
// maxNumber(10, 20, 30);

// if-else-without argument and with return value
// function maxNumber(num1, num2, num3) {
//     num1 = 10, num2 = 20, num3 = 30;
//     if (num1 > num2 && num1 > num3) {
//         return num1;
//     }
//     else if (num2 > num3) {
//         return num2
//     } else {
//         return num3;
//     }
// }
// let ans = maxNumber();
// console.log(ans);

// if-else-without argument and without return value
// function maxNumber(num1, num2, num3) {
//     num1=10,num2=20,num3=30;
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1);
//     }
//     else if (num2 > num3) {
//         console.log(num2);
//     } else {
//         console.log(num3);
//     }
// }
// maxNumber();



// Question-11
// function calculatePrice(price, discount = 10) {
//     return price - ((price * discount) / 100);
// }
// let ans = calculatePrice(1000);
// console.log(ans);
// const calculatePrice = (price, discount = 10) => {
//     return price - ((price * discount) / 100);
// }
// let ans = calculatePrice(1000);
// console.log(ans);



//Question-12
// const isEven = (num) => {
//     if (num % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let ans1 = isEven(3);
// let ans2 = isEven(4);
// console.log(ans1);
// console.log(ans2);


// Question-13
//normal Function-with argument and with return value
// function calculateMultiply(num1, num2) {
//     if (num1 != undefined && num2 != undefined) {
//         return num1 * num2;
//     }
//     else{
//         return 1;
//     }
// }
// let ans1 = calculateMultiply(10, 20);
// console.log(ans1);
// let ans2 = calculateMultiply();
// console.log(ans2);

//normal Function-with argument and without return value
// function calculateMultiply(num1, num2) {
//     if (num1 != undefined && num2 != undefined) {
//         console.log(num1 * num2);
//     }
//     else {
//         console.log(1);
//     }
// }
// calculateMultiply(10, 20);
// calculateMultiply();

//normal Function-without argument and with return value
// function calculateMultiply(num1, num2) {
//     num1 = 10, num2 = 20;
//     if (num1 != undefined && num2 != undefined) {
//         return num1 * num2;
//     }
//     else {
//         return 1;
//     }
// }
// calculateMultiply();

// //normal Function-without argument and without return value
// function calculateMultiply(num1, num2) {
//     if (num1 != undefined && num2 != undefined) {
//         console.log(num1 * num2);
//     }
//     else {
//         console.log(1);
//     }
// }
// calculateMultiply();

//Array Function-with argument and with return value
// const calculateMultiply = (num1, num2) => {
//     if (num1 != undefined && num2 != undefined) {
//         return num1 * num2;
//     }
//     else{
//         return 1;
//     }
// }
// let ans1 = calculateMultiply(10, 20);
// console.log(ans1);
// let ans2 = calculateMultiply();
// console.log(ans2);

//Array Function-with argument and without return value
// const calculateMultiply = (num1, num2) => {
//     if (num1 != undefined && num2 != undefined) {
//         console.log(num1 * num2);
//     }
//     else {
//         console.log(1);
//     }
// }
// calculateMultiply(10, 20);
// calculateMultiply();

//Array Function-without argument and with return value
// const calculateMultiply = (num1, num2) => {
//     num1 = 10, num2 = 20;
//     if (num1 != undefined && num2 != undefined) {
//         return num1 * num2;
//     }
//     else {
//         return 1;
//     }
// }
// calculateMultiply();

// Array Function-without argument and without return value
// const calculateMultiply = (num1, num2) => {
//     if (num1 != undefined && num2 != undefined) {
//         console.log(num1 * num2);
//     }
//     else {
//         console.log(1);
//     }
// }
// calculateMultiply();



// Question-14
// function greet () {

// }



// Question-15
// function exponent(num, power = 2) {
//     return num ** power;
// }
// let ans1 = exponent(4);
// console.log(ans1);
// let ans2 = exponent(4,3);
// console.log(ans2);









// function calculateMultiply(num1, num2) {
//     if (num1 == undefined && num2 == undefined) {
//         return 1;
//     }
//     else {
//         return num1 * num2;
//     }
// }
// let ans1 = calculateMultiply(10, 20);
// console.log(ans1);
// let ans2 = calculateMultiply();
// console.log(ans2);