// import allData from "./module 1.js";
// import {printAllData} from "./module 2.js";
// document.getElementById('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (e.target.fname.value.trim() != "" && e.target.lname.value.trim() != "") {
//         allData.push({
//             fname: e.target.fname.value,
//             lname: e.target.lname.value
//         });
//         console.log(allData);
//         printAllData(allData,document.getElementById('table'));
//     }
//     e.target.reset();
// });


// import { getDataFromAPI, getspecificDataFromAPI } from './module 1.js';
// import { checkNameOfThing } from './module 2.js';
// document.getElementById('form2').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     try {
//         let a = await getDataFromAPI();
//         let getData = checkNameOfThing(a, e.target.inputField.value);
//         console.log(getData);
//     } catch (error) {
//         console.log(error);
//     }
//     e.target.reset();
// });
// getspecificDataFromAPI(2).then(ele => console.log(ele));


// import allData from "./module 1.js";
// import { printData } from "./module 2.js";
// let a = 0;
// document.getElementById('formCRUD').addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (e.target.itemName.value.trim() != "" && e.target.quantity.value != "" && e.target.price.value != "") {
//         allData.push({
//             id: ++a,
//             item: e.target.itemName.value,
//             quantity: e.target.quantity.value,
//             price: e.target.price.value,
//             total: parseInt(e.target.price.value) * parseInt(e.target.quantity.value),
//         });
//         printData(allData, document.getElementById('tableCRUD'));
//         // console.log(allData);
//         e.target.reset();
//     }else{
//         alert("Please Ente rthe all Value")
//     }
// });


// // With the help of * import all the data from their file
// import * as operation from "./module 1.js";
// console.log(operation);
// console.log(operation.subtraction(100, 20));
// console.log(operation.addition(100, 20));
// console.log(operation.multiplication(100, 20));
// console.log(operation.division(100, 20));
// console.log(operation.default);