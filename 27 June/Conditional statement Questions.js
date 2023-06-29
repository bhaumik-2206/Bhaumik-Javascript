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

// 10-a
// const names = [
//     { first_name: "Asndnm", last_name: "L demo" },
//     { first_name: "Qpweui", last_name: "Alxezx" },
//     { first_name: "Pqwern", last_name: "Ruse" },
//     { first_name: "Wiruyn", last_name: "Ruby" },
//     { first_name: "Erpso", last_name: "Loal" },
//     { first_name: "Demors", last_name: "Poet" },
//     { first_name: "Aleos", last_name: "Lkeu" },
// ]
// console.log(names.filter(x => x.fullname = x.first_name + x.last_name));
// for (let i = 0; i < names.length; i++) {
//     names[i].full_name = names[i].first_name + ' ' + names[i].last_name;
//     // console.log(names[i].full_name);
// }
// console.log(names);

// 10-b
// function calculate(operator, para1, para2) {
//     switch (operator) {
//         case '+':
//             return para1 + para2;
//             break;
//         case '-':
//             return para1 - para2;
//             break;
//         case '*':
//             return para1 * para2;
//             break;
//         case '/':
//             return para1 / para2;
//             break;
//         case '%':
//             return para1 % para2;
//             break;
//         default:
//             break;
//             console.log("You pass a different parameter");
//     }
// }
// console.log(calculate('+', 5, 6));
// console.log(calculate('-', 10, 6));

// 11
// function getGrade(marks) {
//     if (marks >= 90) {
//         console.log("Grade A");
//     } else if (marks >= 75 && marks < 90){
//         console.log("Grade B");
//     } else if (marks >= 60 && marks < 75){
//         console.log("Grade C");
//     } else if (marks >= 50 && marks < 75){
//         console.log("Grade D");
//     } else if (marks >= 50 && marks < 35){
//         console.log("Grade D");
//     }else{
//         console.log("Fail");
//     }
// }
// console.log(getGrade(90));
// console.log(getGrade(35));

//12 - Write a function that takes a currency_code and amount as an argument and returns the amount of money in INR.
// function return_INR_money(namecurrency_code, amount) {

// }


//13 -  Write a function for reversing the string.
// function reverse_string(pass_string) {
//     let reverseString = "";
//     for (let i = pass_string.length - 1; i >= 0; i--) {
//         reverseString += pass_string[i];
//     }
//     console.log(reverseString);
// }
// reverse_string("Hello");


// 14 - Write a function that takes an object and prints all keys and values in the console
// function printObject(obj) {
//     for (const key in obj) {
//         // console.log("Keys is = " + key + " Value is = " + obj[key]);
//         console.log(key +" = "+ obj[key]);
//     }
// }
// obj1 = { f_name: "Bhaumik", l_name: "Panchal", age: 18 }
// printObject(obj1);

// 15 - Write a function that returns boolean on condition if the string contains a number or not.
// function isStringContainsNum(pass_string) {
//     for (let i = 0; i < pass_string.length; i++) {
//         if (pass_string[i] >= 0 && pass_string[i] <= 9) {
//             return true;
//         }
//     }
//     return false;
// }
// let one = isStringContainsNum("assad"); // false
// let two = isStringContainsNum("agfh1"); // true
// let three = isStringContainsNum("ag1sdf"); // true
// let four = isStringContainsNum("111"); // true
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);


// 16 - Write a function that prints messages based on condition if the string contains a number or not.
// function check_string(pass_string) {
//     function string_number(pass_string) {
//         for (let i = 0; i < pass_string.length; i++) {
//             if (pass_string[i] >= 0 && pass_string[i] <= 9) {
//                 return true;
//             }
//         }
//         return false;
//     }
//     if (pass_string == Number(pass_string)) {
//         return "string is number";
//     }
//     else if (string_number(pass_string)) {
//         return "string contains number";
//     } else {
//         return "string not contains number";
//     }
// }
// console.log(check_string('1212'));
// console.log(check_string('sadfsd'));
// console.log(check_string('sad2q'));

//17 - Write a function that returns the position of the first occurrence of digit in string.
// function isStringContainsNum(pass_string) {
//     for (let i = 0; i < pass_string.length; i++) {
//         if (pass_string[i] >= 0 && pass_string[i] <= 9) {
//             return i;
//         }
//     }
//     return false;
// }
// let one = isStringContainsNum("assad");
// let two = isStringContainsNum("agfh1");
// let three = isStringContainsNum("ag1sdf");
// let four = isStringContainsNum("111");
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);

//18 - Write a function that returns the position of the first capital letter in string. (For this string only contains A-Z, a-z)
// function return_Index(pass_string) {
//     for (let i = 0; i < pass_string.length; i++) {
//         if (pass_string[i] >= 'A' && pass_string[i] <= 'Z') {
//             return i;
//         }
//     }
//     return false;
// }
// let a = return_Index("heLlo");
// console.log(a);

// 19-Modify following code to work perfectly.
// function printOdd(start, end) {
//     for (let i = start; i <= end; i++) {
//         if (i % 2 != 0) {
//             console.log(i);
//         }
//     }
// }
// printOdd(1, 10);

// 20 - Modify following code to work perfectly.
// function printOdd() {
//     let number = 1;
//     let count = 0;
//     while (count < 10) {
//         if (number % 2 !== 0) {
//             console.log(number);
//             count++;
//         }
//         number++;
//     }
//     // for (let i = 1; i <= 20; i += 2) {
//     //     console.log(i);
//     // }
// }
// printOdd();











//Extra - check how many times number are present in the string.
// function isStringContainsNum(pass_string) {
//     let a = 0;
//     for (let i = 0; i < pass_string.length; i++) {
//         if (pass_string[i] >= 0 && pass_string[i] <= 9) {
//             a++;
//         }
//     }
//     return a;
// }
// let one = isStringContainsNum("assad");
// let two = isStringContainsNum("agfh10");
// let three = isStringContainsNum("ag12sdf4");
// let four = isStringContainsNum("11154");
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);