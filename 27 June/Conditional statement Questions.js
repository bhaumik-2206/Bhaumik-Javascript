//1-Write a code for returning the greeting message as per current time.
// let today = new Date();
// if (today.getHours() >= 6 && today.getHours() < 12) {
//     console.log("Good Morning!");
// } else if (today.getHours() >= 12 && today.getHours() < 16) {
//     console.log("Good Afternoon!");
// } else if (today.getHours() >= 16 && today.getHours() < 19) {
//     console.log("Good Evening!");
// }else{
//     console.log("Good Night!");
// }
// let time = today.getHours() + ":" + today.getMinutes();
// console.log("Time is = "+time);


//2-Write a code for returning the day name based on the digit(like 1 for monday and so on).
// let num = 2;
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

// 3-Pattern
// let pattern = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         pattern += "* ";
//     }
//     pattern += "\n";
// }
// console.log(pattern);

//4:-pattern
// let pattern = "";
// for (let i = 0; i <= 5; i++) {
//     for (let j = 0; j < i; j++) {
//         pattern += "* "
//     }
//     pattern += "\n";
// }
// console.log(pattern);

//4:-pattern
// let pattern = "";
// for (let i = 5; i >= 1; i--) {
//     for (let j = i; j >= 1; j--) {
//         pattern += "* "
//     }
//     pattern += "\n";
// }
// console.log(pattern);

// 6 :- Write a program for returning the number of days in the particular month. For example, getNumberOfDays(1)returns the 31 (1 stands for january)
// function getNumberOfDays(num) {
//     if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) {
//         return 31;
//     }else if (num == 4 || num == 6 || num == 9 || num == 11) {
//         return 30;
//     }else if (num == 2) {
//         return 28;
//     }else{
//         console.log("This is not a month");
//     }
// }
// let totalDays = getNumberOfDays(10);
// console.log(totalDays);


// 7 :- Write a program that prints the 1 to 10.
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// 8 :- Write a function that prints the odd number of given range For example, printOddNumbers(1,10); prints 1,3,5,7,9
// function printOddNumbers(num1, num2) {
//     let num = " ";
//     for (let i = num1; i <= num2; i++) {
//         if (i % 2 == 1) {
//             num += i + ",";
//         }
//     }
//     console.log(num.slice(0, num.length - 1));
// }
// let oddNumber = printOddNumbers(1, 10);

// 9 :- Write a function that prints the even number of given range
// function printEvenNumbers(num1, num2) {
//     let num = " ";
//     for (let i = num1; i <= num2; i++) {
//         if (i % 2 == 0) {
//             num += i + ",";
//         }
//     }
//     console.log(num.slice(0, num.length - 1));
// }
// let oddNumber = printEvenNumbers(1, 10);

// 10
// const names = [
//     { first_name: "Asndnm", last_name: "L demo" },
//     { first_name: "Qpweui", last_name: "Alxezx" },
//     { first_name: "Pqwern", last_name: "Ruse" },
//     { first_name: "Wiruyn", last_name: "Ruby" },
//     { first_name: "Erpso", last_name: "Loal" },
//     { first_name: "Demors", last_name: "Poet" },
//     { first_name: "Aleos", last_name: "Lkeu" },
// ]
// for (let i = 0; i < names.length; i++) {
//     names[i].full_name = names[i].first_name + ' ' + names[i].last_name;
//     // console.log(names[i].full_name);
// }
// console.log(names);