// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

// function myFunc1() {
//     console.log("This is my function");
// }
// export default myFunc1;

// function myFunc2() {
//     return "Hello";
// }
// function myFunc1(myFunc2) {
//     console.log(myFunc2);
//     return myFunc2 + "!";
// }
// console.log(myFunc1(myFunc2()));

// [a, b] = [10, 20];
// console.log(a);
// console.log(b);
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest);

// let data = {
//     user: {
//         id: 123,
//         name: 'John Doe',
//         address: {
//             street: '123 Main St',
//             city: 'Example City',
//         },
//     },
// };
// let {
//     user: {
//         id,
//         name,
//         address: { city },
//     },
// } = data;
// console.log(id);
// console.log(name);
// console.log(city);

// function printUser({ name, age }) {
//     console.log(name);
//     console.log(age);
// }
// let user = {
//     name: 'Bob',
//     age: 25,
// };
// printUser(user);

// let arr = {
//     a: 10,
//     b: 20,
//     c: { d: 10, e: 20 },
// }
// let { a : hello } = arr;
// console.log(hello);

// let users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
// ];
// let [, , secondUser] = users;     // Destructuring array of objects
// console.log(secondUser);

// function getCoordinates() {
//     return [10, 20];
// }
// let [x, y] = getCoordinates();
// console.log(x);
// console.log(y);

// let data = {
//     user: {
//         id: 123,
//         name: 'Jane Doe',
//     },
//     items: [1, 2, 3],
// };
// let {
//     user: { id },
//     items: [n1, ...rest],
// } = data;
// console.log(id);
// console.log(n1);
// console.log(rest);

// let people = [
//     { name: 'Alice', age: 30, address: "ahmedabad" },
//     { name: 'Bob', age: 25, address: "ahmedabad" },
//     { name: 'Charlie', age: 40, address: "ahmedabad" },
// ];
// for (let { name, age } of people) {
//     console.log(`${name} => ${age}`);
// }

// function printUserInfo({ user: { firstName = 'Guest first name', lastName = "Guest last name" } }) {
//     console.log(`Name: ${firstName} ${lastName}`);
// }
// let userData = {
//     user: {
//         firstName: 'John',
//         lastName: 'Smith',
//     },
// };
// printUserInfo(userData);

// function getUserInfo() {
//     return {
//         name: 'Raj Bundela',
//         age: 19,
//     };
// }
// let { name: userName, age: userAge } = getUserInfo();
// console.log(userName);
// console.log(userAge);

// let costemerData = [
//     {
//         orderId: '1',
//         items: [
//             { productId: 'p1', quantity: 2, price: 10 },
//             { productId: 'p2', quantity: 1, price: 20 },
//         ],
//         customer: {
//             customerId: 'c1',
//             name: 'Raj',
//         },
//     },
//     {
//         orderId: '2',
//         items: [
//             { productId: 'p1', quantity: 10, price: 501 },
//             { productId: 'p1', quantity: 5, price: 599 },
//         ],
//         customer: {
//             customerId: 'c2',
//             name: 'Bhaumik',
//         },
//     },
//     {
//         orderId: '3',
//         items: [
//             { productId: 'p1', quantity: 15, price: 249 },
//             { productId: 'p2', quantity: 1, price: 199 },
//         ],
//         customer: {
//             customerId: 'c1',
//             name: 'Raj',
//         },
//     },
// ]
// function trandferData(arr) {
//     let a = arr.map(ele => {
//         let b = ele.items;
//         let total = b.reduce((acc, cur) => {
//             return acc + cur.price * cur.quantity;
//         }, 0);
//         return { orderId: ele.orderId, Total: total, customerName: ele.customer.name }
//     });
//     return a;
// }
// console.log(trandferData(costemerData));

// let arr = [
//     {
//         name: 'Raj',
//         subjects: [
//             { subject: 'Math', score: 85 },
//             { subject: 'History', score: 75 },
//         ],
//     },
//     {
//         name: 'Vivek',
//         subjects: [
//             { subject: 'Math', score: 92 },
//             { subject: 'History', score: 56 },
//         ],
//     },
//     {
//         name: 'Bhavik',
//         subjects: [
//             { subject: 'Math', score: 42 },
//             { subject: 'History', score: 59 },
//         ],
//     }
// ]
// function getSomeDataFromArray(arr) {
//     let getData = {
//         TotalStudent: arr.length,
//         TotalScore: {},
//         HighestScoreSub: null,
//         BestPerformer: null,
//     }
//     arr.forEach(ele => {
//         ele.subjects.forEach(value => {
//             if (!getData.TotalScore[value.subject]) {
//                 getData.TotalScore[value.subject] = {
//                     totalScore: 0,
//                     totalCount: 0,
//                 }
//             }
//             getData.TotalScore[value.subject].totalScore += value.score;
//             getData.TotalScore[value.subject].totalCount++;
//         });
//     });
//     return getData;
// }
// console.log(getSomeDataFromArray(arr));

// function analyzeStudentData(students) {
//     const analysis = {
//         totalStudents: students.length,
//         averageScores: {},
//         highestTotalScoreStudent: null,
//         highestAverageScoreSubject: null,
//     };
//     students.forEach(student => {
//         student.subjects.forEach(subject => {
//             if (!analysis.averageScores[subject.subject]) {
//                 analysis.averageScores[subject.subject] = {
//                     totalScore: 0,
//                     count: 0,
//                 };
//             }
//             analysis.averageScores[subject.subject].totalScore += subject.score;
//             analysis.averageScores[subject.subject].count++;
//         });
//         const studentTotalScore = student.subjects.reduce((total, subject) => {
//             return total + subject.score;
//         }, 0);
//         if (
//             !analysis.highestTotalScoreStudent ||
//             studentTotalScore > analysis.highestTotalScoreStudent.totalScore
//         ) {
//             analysis.highestTotalScoreStudent = {
//                 name: student.name,
//                 totalScore: studentTotalScore,
//             };
//         }
//     });
//     let highestAverageScore = 0;
//     for (const subject in analysis.averageScores) {
//         const average =
//             analysis.averageScores[subject].totalScore /
//             analysis.averageScores[subject].count;
//         if (average > highestAverageScore) {
//             highestAverageScore = average;
//             analysis.highestAverageScoreSubject = subject;
//         }
//     }
//     return analysis;
// }
// const analysisResult = analyzeStudentData(arr);
// console.log(analysisResult);