//----------Conditional Statement--------------//
// let number = "18";
// if (number == 18) {
//     console.log("Number is equal 18");
// }
// else if (number === 18) {
//     console.log("Number is stricly equal 18");
// } else {
//     console.log("Number is not 18");
// }

// let age = 18;
// if (age >= 18) {
//     console.log("Drive Car");
// } else {
//     console.log("Drive Cycle");
// }

// let num = 10;
// if (typeof num !== 'undefined') {
//     console.log("num is defined");
// }
// else {
//     console.log("num is not defined");
// }




//Ternary operator is also a conditional statement 
// let age = 18;
// console.log(age == 18 ? "Age = 18" : "Age != 18");

//Swith case
// let age = 18;
// switch (age) {
//     case 18:
//         console.log("Age is 18");
//         break;
//     case 19:
//         console.log("Age is 19");
//         break;
//     case 20:
//         console.log("Age is 20");
//         break;
//     default:
//         console.log("Age is different");
//         break;
// }

// let num= 2;
// switch (num) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednusday");
//         break;
//     case 4:
//         cnsole.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Wrong Number");
//         break;
// }



// ----------Loops In Javascript--------------//
// For Loop
// for (let i = 0; i <= 50; i++) {
//     console.log(i);
// }

//For-In Loop
// let obj1 = {
//     fname : "Bhaumik",
//     lname:"Panchal"
// }
// for (const name in obj1) {
//     console.log(name);
// }
// for (const name in obj1) {
//     console.log(name , "=" ,obj1[name]);
// }
// let arr = [10, 20, 30, 40, 50];
// for (const arrays in arr) {
//     console.log(arrays);
// }
// for (const arrays in arr) {
//     console.log("At", arrays, "th index value is =", arr[arrays]);
// }    
// for (const a in "object") {
//     console.log(a);
// }


//For Of Loop
// const arr = [10, 20, 30];
// for (let num of arr) {
//   console.log(num);
// }
// for (const a of "object") {
//     console.log(a);
// }
// let obj = {
//     first : "First-1",
//     second : "Second-2",
//     third : "Third-3"
// }
// for (const object in obj) {
//     console.log(object);
// }
// for (const object of Object.values(obj)) {
//     console.log(object);
// }


//While Loop
// let i = 0;
// while (i <= 50) {
//     console.log(i);
//     i++;
// }

//Do-While Loop
// let i = 0;
// do {
//     console.log(i);              //do while loop executed atleast one Time. If condition is true or false.
//     i++;
// } while (i<=50);







// for (let i = 0; i <= 10; i++) {
//     switch (i) {
//         case 0:
//             console.log("This is Zero");
//             break;
//         case 1:
//             console.log("This is One");
//             break;
//         case 2:
//             console.log("This is Two");
//             break;
//         case 3:
//             console.log("This is Three");
//             break;
//         case 4:
//             console.log("This is Four");
//             break;
//         case 5:
//             console.log("This is Five");
//             break;
//         case 6:
//             console.log("This is Six");
//             break;
//         case 7:
//             console.log("This is Seven");
//             break;
//         case 8:
//             console.log("This is Eight");
//             break;
//         case 9:
//             console.log("This is Nine");
//             break;
//         case 10:
//             console.log("This is Ten");
//             break;
//         default:
//             console.log("Numner is Different");
//             break;
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     console.log("Number is = "+i);
// }




// Some Loop Exercises
// Write a JS code to print numbers from 1 to 10
// for (let i = 0; i <=10; i++) {
//     console.log(i);
// }

// Write a JS code to print numbers from 10 to 1
// for (let i = 10; i >=0; i--) {
//     console.log(i);
// }

// Sum Of Numbers
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

//Print Element From an Array
// const arr = [10,20,30,40,50];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// } 
// for(let value of arr){
//     console.log(value);
// }

//Write a JS code to print Even numbers in given array
// for (let i = 0; i<=100 ; i++) {
//     if(i%2==0){
//         console.log("Odd Number Is = "+i);
//     }
// }

//Addition of object's value
// let obj1 = { a: 10, b: 20, c: 30, d: 40, e: 50 }
// let sumObjectValue = 0;
// for (const key in obj1) {
//     sumObjectValue += obj1[key];
// }
// console.log("Sum of the Object value is = " + sumObjectValue);

//Sum of array
// let arr = [10, 20, 30, 40, 50];
// let sumArray = 0;
// for (let array of arr) {
//     sumArray += array;
// }
// console.log(sumArray);