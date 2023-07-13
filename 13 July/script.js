// Write a Javascript function to get total working days and total weekend in specific year
// function totalWorkingDaysInYear(year) {
//     let totalWorkingDays = 0;
//     let weekend = 0;
//     const startDate = new Date(year, 0, 1);
//     const endDate = new Date(year, 11, 31);
//     for (let date = startDate.getTime(); date <= endDate.getTime(); startDate.setTime(date += (1000 * 60 * 60 * 24))) {
//         if (startDate.getDay() === 0 || startDate.getDay() === 6) {
//             weekend++;
//         } else {
//             totalWorkingDays++;
//         }
//     }
//     return { Working: totalWorkingDays, "Weekend": weekend };
// }
// console.log(totalWorkingDaysInYear(2023));



// Write a JavaScript function to convert a positive number to a negative number.
// function pos_to_neg(number) {
//     return -Math.abs(number);
// }
// console.log(pos_to_neg(15));

// Write a JavaScript function to convert a number to square root
// function sqrt_to_int(number) {
//     return (Math.sqrt(number));
// }
// console.log(sqrt_to_int(17));

// Write a JavaScript function to find maximum number.
// function highest_of_three(...arr) {
//     return Math.max(...arr);
// }
// console.log(highest_of_three(-5, 4, 2));

// Write a JavaScript function to return powers of two values.
// function isPower_of_two(number) {
//     for (let i = 2; i < number; i++) {
//         for (let j = i; j < number; j++) {
//             if (Math.pow(i, j) === number) {
//                 return true;
//             } else if (Math.pow(i, j)  > number ){
//                 break;
//             }
//         }
//     }
//     return false;
// }
// console.log(isPower_of_two(64));
// console.log(isPower_of_two(94));

// Write a JavaScript function to create a random background color.
// function randomBgColor() {
//     let red = Math.ceil(Math.random() * 256);
//     let green = Math.ceil(Math.random() * 256);
//     let blue = Math.ceil(Math.random() * 256);
//     let backgroungColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//     console.log(backgroungColor);
//     document.body.style.background = backgroungColor;
// }
// console.log(randomBgColor());

// Write a JavaScript function to get all prime numbers from 0 to a specified number.
// function primeFactorsTo(number) {
//     let prime = [];
//     for (let i = 0; i < number; i++) {
//         if (number % i == 0) {
//             if (i == 1 || i == number) {
//                 continue;
//             } else {
//                 prime.push(i);
//             }
//         }
//     }
//     return prime;
// }
// console.log(primeFactorsTo(15));



// -----------------------------------
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// console.log(document.body.childNodes);
// console.log(document.body.children);        // textnode and comment node ignore in this

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// let a = Array.from(document.body.children);
// console.log(a);

// let ul = document.body.children[0];
// console.log(ul);
// console.log(ul.nextSibling);
// console.log(ul.children[0].textContent);
// console.log(ul.children[0].nextElementSibling.textContent);

// let table = document.body.children[1];
// console.log(table.tBodies[0]);
// console.log(table.tBodies[0].rows);
// console.log(table.tBodies[0].rows[0]);
// console.log(table.tBodies[0].rows[0].cells);
// console.log(table.tBodies[0].rows[0].cells[0].textContent);
// console.log(table.rows);

console.log(firstTable);