//------------------------------1---------------------------
// const names = [
//     { first_name: "Handnm", last_name: "L demo" },
//     { first_name: "Q Wei", last_name: "Alxezx" },
//     { first_name: "Pqwern", last_name: "Ruse" },
//     { first_name: "Wiruyn", last_name: "Ruby" },
//     { first_name: "Erpso", last_name: "Loal" },
//     { first_name: "Demors", last_name: "Poet" },
//     { first_name: "Aleos", last_name: "Lkeu" },
// ]
// let arr = names.filter(x => x.fullname = x.first_name + x.last_name);
// console.log(arr);
// let arr = names.map(value => {
//     value.full_name = value.first_name + " " + value.last_name;            //Add value named full_name and add first_name and last_name in this key in all the object
//     return value;
// });
// console.log(arr);
// for(let value in names){
//     names[value].full_name = names[value].first_name +" "+ names[value].last_name;
// }
// console.log(names);

//------------------------------2---------------------------
// Write a code that adds new key in each object named: isMature
// const users = [
//     { first_name: "Handnm", last_name: "L demo", age: 17 },
//     { first_name: "Q Wei", last_name: "Alxezx", age: 30 },
//     { first_name: "Pdeq Twern", last_name: "Ruse", age: 22 },
//     { first_name: "Widfruyn", last_name: "Ruby", age: 11 },
//     { first_name: "Erdfg Pso", last_name: "Loal", age: 34 },
//     { first_name: "Dedfgmors", last_name: "Poet", age: 60 },
//     { first_name: "Ale4tos", last_name: "Lkeu", age: 16 },
// ]
// for (let value in users) {
//     if (users[value].age >= 18) {                    //Here. we check the condition age is greater than 18 or not if yes than you are mature else you are not
//         users[value].isMature = "yess";
//     }
//     else {
//         users[value].isMature = "Noo";
//     }
// }
// console.log(users);
// let modifyArray = users.map((value, i) => {
//     if (users[i].age >= 18) {                    //Here. we check the condition age is greater than 18 or not if yes than you are mature else you are not
//         value.isMature = "yess";
//         return value;
//     }
//     else {
//         value.isMature = "Noo";
//         return value;
//     }
// });
// console.log(users);
// console.log(modifyArray);

//------------------------------3---------------------------
// let arr = [1, 2, 3, 5];                  //Here we can not use negative value in array index / If we like to use the minnagative value than use array.length-1.
// console.log(arr[-1]);

//------------------------------4---------------------------
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// let flatArray = nestedArray.flat(Infinity);
// console.log(flatArray);
// let newarray = [];
// function flat(arr) {
//     arr.map(value => {
//         if(Array.isArray(value)){
//             flat(value);
//         }else{
//             newarray.push(value);
//         }
//     });
//     return newarray;
// }
// console.log(flat(nestedArray));
// console.log(flat([1,[2,[3,[4,[5,[6,[7,[8,[9,[10]]]]]]]]]]));
// function printNestedArray(array) {
//     if (typeof array != 'object') {
//         console.log(array);
//     } else {
//         for (let key in array) {
//             printNestedArray(array[key]);
//         }
//     }
// }
// printNestedArray(nestedArray);
// let oneArray = nestedArray.flat(Infinity);                   //first we can flat the array we get the all nested array in one aray
// console.log(oneArray);
// for (let value of oneArray) {                                //Here , we print all value of each and every value
//     console.log(value);
// }

//------------------------------5---------------------------
// const nestedObject = {
//     name: "Vishal Kukreja",
//     age: 32,
//     address: {
//         street: "123 Mumbai fashion St",
//         city: "Midtown",
//         state: "MH",
//     },
//     hobbies: ["reading", "drawing", "gardening"]
// };
// function abc(general) {
//     if (typeof general != 'object'){
//         console.log(general);
//     }else{
//         for(let key in general){
//             abc(general[key]);
//         }
//     }
// }
// abc(nestedObject);
// for (let value in nestedObject) {
//     if (Array.isArray(nestedObject[value])) {
//         for (let i = 0; i < nestedObject[value].length; i++) {
//             console.log(nestedObject[value][i]);
//         }
//     } else if (typeof nestedObject[value] === 'object') {
//         for(let second in nestedObject[value]){
//             console.log(nestedObject[value][second]);
//         }
//     } else {
//         console.log(nestedObject[value]);
//     }
// }

//------------------------------6---------------------------
// function checkString(arr) {
//     return arr.some(value => value === Number(value));
// }
// console.log(checkString([1, 2, 3]));
// console.log(checkString(["1", 3, "gh"]));
// console.log(checkString(["a", "3dh", "gh"]));
// console.log(checkString(["1", "a", "h"]));

// let arr1 = [1, 2, 3];
// let arr2 = ["1", 3, "gh"];
// let arr3 = ["a", "3dh", "gh"];
// let arr4 = ["1", "a", "h"];
// checkString(arr1);
// checkString(arr2);
// function checkString(value) {                                           //first we check the condition if number stricly number than return true.
//     if (value === Number(value)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(arr1.map(checkString).some(value => value === true));       //The map function return full array with boolean value(true or false).
// console.log(arr2.map(checkString).some(value => value === true));       //then the all value check if in array one value are true than print true else false
// console.log(arr3.map(checkString).some(value => value === true));
// console.log(arr4.map(checkString).some(value => value === true));

//------------------------------7---------------------------
// const numbers = [1, 2, 3, 4];
// let a = numbers.map(String);
// console.log(a);

//------------------------------8---------------------------
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);

//------------------------------9---------------------------
let array = [
    {
        id: "0001",
        type: "donut",
        name: "Cake",
        ppu: 0.55,
        batters: {
            batter: [
                { id: "1001", type: "Regular" },
                { id: "1002", type: "Chocolate" },
                { id: "1003", type: "Blueberry" },
                { id: "1004", type: "Devil's Food" },
            ],
        },
        topping: [
            { id: "5001", type: "None" },
            { id: "5002", type: "Glazed" },
            { id: "5005", type: "Sugar" },
            { id: "5007", type: "Powdered Sugar" },
            { id: "5006", type: "Chocolate with Sprinkles" },
            { id: "5003", type: "Chocolate" },
            { id: "5004", type: "Maple" },
        ],
    },
    {
        id: "0002",
        type: "donut2",
        name: "Raised",
        ppu: 0.55,
        batters: {
            batter: [{ id: "1001", type: "Regular" }],
        },
        topping: [
            { id: "5001", type: "None" },
            { id: "5002", type: "Glazed" },
            { id: "5005", type: "Sugar" },
            { id: "5003", type: "Chocolate" },
            { id: "5004", type: "Maple" },
        ],
    },
    {
        id: "0003",
        type: "donut3",
        name: "Old Fashioned",
        ppu: 0.55,
        batters: {
            batter: [
                { id: "1001", type: "Regular" },
                { id: "1002", type: "Chocolate" },
            ],
        },
        topping: [
            { id: "5001", type: "None" },
            { id: "5002", type: "Glazed" },
            { id: "5003", type: "Chocolate" },
            { id: "5004", type: "Maple" },
        ],
    },
    {
        id: "0004",
        type: "donut1",
        name: "Old Fashioned",
        ppu: 0.55,
        batters: {
            batter: [{ id: "1001", type: "Regular" }],
        },
        topping: [
            { id: "5001", type: "None" },
            { id: "5002", type: "Glazed" },
            { id: "5003", type: "Chocolate" },
            { id: "5004", type: "Maple" },
        ],
    },
];

// let filterChocolate = array.filter((value) =>
//   value.topping.findIndex((value) => (value.type == "Chocolate")) !== -1
// );
// console.log(filterChocolate);

// let filterSugar = array.filter((value) =>
//   value.batters.batter.findIndex((value) => (value.type == "Regular")) !== -1
// );
// console.log(filterSugar);

// console.log(filterChocolate);
// let filterChocolate = array.filter(value=>value.topping.find(value=>value.type=="Chocolate"));
// console.log(filterChocolate);

//1-filter donuts based on which have topping  Chocolate
// let filterChocolate = array.filter((value) =>
//   value.topping.findIndex((value) => (value.type == "Chocolate")) !== -1
// );
// console.log(filterChocolate);
// let filterChocolate = array.filter(value=>value.topping.find(value=>value.type=="Chocolate"));
// console.log(filterChocolate);

// let toppingChocolate = array.filter(value => value.topping.filter(topping => topping.type == "Chocolate").length);
// console.log(toppingChocolate);

// function toppingChocolate(array) {
//     let a = array.filter((value, index, arr) => {
//         let topping = value.topping;
//         for (let i = 0; i < topping.length; i++) {
//             if (topping[i].type == "Chocolate") {
//                 console.log(value.type + ":");
//                 console.log(value);
//             }
//         }
//     });
//     console.log(a);
// }
// toppingChocolate(array);

//2-filter donuts based which have batter type is regular and topping have Chocolate
// let choAndRegular = array.filter(value=>value.batters.batter.find(value=>value.type="Regular") && value.topping.find(value=>value.type=="Chocolate"));
// console.log(choAndRegular);

// let choAndRegular = array.filter(value=>value.batters.batter.find(value=>value.type="Regular") && value.topping.find(value=>value.type=="Chocolate"));
// console.log(choAndRegular);

// let regularWithChocolate = array.filter(value =>value.topping.filter(topping => topping.type == "Chocolate").length && value.batters.batter.filter(batter => batter.type == "Regular").length);
// console.log(regularWithChocolate);

// function regularWithChocolate(arr) {
//     let arr2 = arr.filter(value => value.batters.batter.some(batter => batter.type === 'Regular') && value.topping.some(topping => topping.type === 'Chocolate'))
//     return arr2;
// }
// console.log(regularWithChocolate(array));

//3- filter donuts based on which have topping chocolate and Sugar
// let choAndSugar = array.filter(value=>value.topping.find(value=>value.type=="Chocolate")&&value.topping.find(value=>value.type=="Sugar"));
// console.log(choAndSugar);

// let choAndSugar = array.filter(
//   (value) =>
//     value.topping.findIndex((value) => value.type == "Chocolate") &&
//     value.topping.findIndex((value) => value.type == "Sugar") !== -1
// );
// console.log(choAndSugar);

// let chocolateAndSugar = array.filter(value => value.topping.filter(topping => topping.type === 'Chocolate').length && value.topping.filter(topping => topping.type === 'Sugar').length);
// console.log(chocolateAndSugar);

// function chocolateAndSugar(arr){
//     let arr2 = arr.filter(value => value.topping.some(topping => topping.type === 'Chocolate') && value.topping.some(topping => topping.type === 'Sugar'));
//     return arr2;
// }
// console.log(chocolateAndSugar(array));

//4
// function ppuGet(array) {
//     let a = array.filter(value => value.ppu > 0.5);
//     console.log(a);
// }
// console.log(ppuGet(array));

//5
// function printAllBatters(array) {
//     let a = array.map(value => value.batters);
//     return a;
// }
// console.log(printAllBatters(array));

//6 - filter donuts based on which have 2 and more than 2 batter in it
// function filterBatters(array) {
//     let a = array.filter(value => value.batters.batter.length >= 2);
//     console.log(a);
// }
// filterBatters(array);



//------------------------------10---------------------------
// let string1 = "George Raymond Richard Martin";
// let string2 = "george raymond Richard Martin"
// function getFirstChar(string) {
//     let a = string.split(" ");
//     return a.map(value => value.charAt(0).toUpperCase()).join("");
// }
// console.log(getFirstChar(string1));
// console.log(getFirstChar(string2));



//------------------------------11---------------------------
// let string = "Every developer likes to mix kubernetes and javascript";
// function addNumber(string) {
//     let a = string.split(" ");
//     return a.map(value => {
//         if (value.length <= 3) {
//             return value;
//         } else {
//             return value.charAt(0) + value.slice(1, value.length - 1).length + value.charAt(value.length - 1);
//         }
//     }).join(" ");
// }
// console.log(addNumber(string));



//------------------------------12---------------------------
// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
// ];

//12-a
// function getCategory(acc) {
//     return acc.reduce((acc, cur) => {
//         acc[cur.category] = (acc[cur.category] || 0) + 1;
//         return acc;
//     }, {})
// }
// console.log(getCategory(products));

// function count(arr) {
//     let emptyObject = {};
//     arr.forEach(value => {
//         let keyName = value.category;
//         if (emptyObject[keyName]) {
//             emptyObject[keyName]++;
//             count++;
//         } else {
//             emptyObject[keyName] = value;
//         }
//     });
//     return emptyObject
// }
// console.log(count(products));

// 12-b
// function averagePrice(products) {
//     let a = 0;
//     let b = 0;
//     let c = 0;
//     let d = 0;
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].category == "Clothes") {
//             a += products[i].price;
//             b++;
//         } else if (products[i].category == "Electronics") {
//             c += products[i].price;
//             d++;
//         }
//     }
//     return { Clothes: a / b, Electronics: c / d }
// }
// let aveObject = averagePrice(products);
// console.log(aveObject);
// function averagePrice(arr) {
//     let a = arr.reduce((acc, cur) => {
//         let keyName = cur.category;
//         if (acc[keyName]) {
//             acc[keyName].push(cur.price)
//         } else {
//             acc[keyName] = [cur.price];
//         }
//         return acc;
//     }, {});
//     return a;
// }
// console.log(averagePrice(products));


//------------------------------13---------------------------
// // 13-a
// const employees = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
//     { name: "David", salary: 70000, department: "BCA" },
// ];


// function averageSalary(arr) {
//     let salaryit = arr.filter(value=>{
//         if(value.department=="IT"){
//             return value.salary;
//         }
//     }).map(value=>value.salary);
//     let salaryhr = arr.filter(value=>{
//         if(value.department=="HR"){
//             return value.salary;
//         }
//     }).map(value=>value.salary);
//     let a = 0;
//     for (let i = 0; i < salaryit.length; i++) {
//         a+=salaryit[i];
//     }
//     let b = 0;
//     for (let i = 0; i < salaryhr.length; i++) {
//         b+=salaryhr[i];
//     }
//     return {IT :a/salaryit.length , HR : b/salaryhr.length};
// }
// console.log(averageSalary(employees));

//1. count the average salary of each department
// function averageSalary(employees) {
//     let a = 0;
//     let b = 0;
//     let c = 0;
//     let d = 0;
//     for (let i = 0; i < employees.length; i++) {
//         if (employees[i].department == "HR") {
//             a += employees[i].salary;
//             b++;
//         } else if (employees[i].department == "IT") {
//             c += employees[i].salary;
//             d++;
//         }
//     }
//     return { IT: a / b, HR: c / d }
// }
// let aveObject = averageSalary(employees);
// console.log(aveObject);

// 13-b
// function averagePrice(arr) {
//     let a = arr.reduce((acc, cur) => {
//         let keyName = cur.department;
//         if (acc[keyName]) {
//             acc[keyName].push(cur.salary)
//         } else {
//             acc[keyName] = [cur.salary];
//         }
//         return acc;
//     }, {});
//     return a;
// }
// console.log(averagePrice(employees));

// let obj = {};
// function addDepartment(arr) {
//   arr.forEach((value) => {
//     let keyName = value.department;
//     if (obj[keyName]) {
//       obj[keyName].push(value.salary);
//     } else {
//       obj[keyName] = [value.salary];
//     }
//   });
//   console.log(obj);
// }
// let result = addDepartment(employees);
// console.log(result);



//------------------------------14---------------------------
// let names = ["Raj", "Bhaumik", "Rudra", "Vansh", "Riddhi", "Ayushi", "Sachin", "Krishna", "Jeel", "Bhakti", "Prakhar", "Dhruval"];
// function groupByAlphabet(arr) {
//     return arr.reduce((acc, cur) => {
//         let keyName = cur.charAt(0).toUpperCase();
//         if (acc[keyName]) {
//             acc[keyName].push(cur)
//         } else {
//             acc[keyName] = [cur];
//         }
//         return acc;
//     }, {});
// }
// console.log(groupByAlphabet(names));

// let names = ["Raj", "Bhaumik", "Rudra", "Vansh", "Riddhi", "Ayushi","Sachin","Krishna","Jeel","Bhakti","Prakhar","Dhruval"];
// let obj = {};
// names.forEach(value => {
//     let keyName = value[0].toUpperCase();
//     if (obj[keyName]) {
//         obj[keyName].push(value);
//     } else {
//         obj[keyName] = [value];
//     }
// });
// console.log(obj);

// let names = ["Raj", "Bhaumik", "Rudra", "Vansh", "Riddhi", "Ayushi", "Sachin", "Krishna", "Jeel", "Bhakti", "Prakhar", "Dhruval"];
// let obj = {};
// names.forEach(value => {
//   let keyName = value[value.length-1].toUpperCase();
//   obj[keyName] = obj[keyName] || []
//   obj[keyName].push(value);
// });
// console.log(obj);

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

//------------------------------15---------------------------
// Without Depth
// let nestedArray = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];
// let newarray = [];
// function flatArray(arr) {
//     arr.map(value => {
//         if (Array.isArray(value)) {
//             flatArray(value);
//         } else {
//             newarray.push(value);
//         }
//     });
//     return newarray;
// }
// console.log(flatArray(nestedArray));

// With Depth
// let nestedArray = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];
// let newarray = [];
// function flatArray(arr, depth = 1) {
//     arr.map(value => {
//         if (Array.isArray(value) && depth > 0) {
//             flatArray(value, depth - 1);
//         } else {
//             newarray.push(value);
//         }
//     });
//     return newarray;
// }
// console.log(nestedArray.flat(5));
// console.log(flatArray(nestedArray, 5));



//------------------------------16---------------------------
// let arr = [1, 2, 3, 4, 5];
// function map(array) {
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//       result.push(arr[i]);
//     }
//     return result;
//   }
//   console.log(map(arr));

// let arr = [1, 2, 3, 4, 5];
// function myMap(value, callback) {
//   let emptyArray = [];
//   for (let i = 0; i < value.length; i++) {
//     emptyArray.push(callback(value[i], i, value));
//   }
//   return emptyArray;
// }
// let result = myMap(arr, function (num) {
//   return num * 2;
// });
// console.log(result);



//------------------------------17---------------------------
// function myFilter(array) {
//     let temp = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]>2) {
//             temp.push(array[i]);
//         }
//     }
//     return temp;
// }
// let arr = [1, 2, 3, 4, 5];
// let a = myFilter(arr)
// console.log(a);

// let arr = [1, 2, 3, 4, 5];
// function myMap(value, callback) {
//   let emptyArray = [];
//   for (let i = 0; i < value.length; i++) {
//     if (callback(value[i], i, value)) {
//       emptyArray.push(value[i]);
//     }
//   }
//   return emptyArray;
// }
// let result = myMap(arr, function (num) {
//   return num <3;
// });
// console.log(result);



//------------------------------18---------------------------
const input = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
];
// --------1------reduce---------
// function groupData(arr) {
//     return arr.reduce((acc, cur) => {
//         let keyName = cur.name.charAt(0).toUpperCase();
//         if (acc[keyName]) {
//             acc[keyName].push(cur);
//         } else {
//             acc[keyName] = [cur];
//         }
//         return acc;
//     }, {});
// }
// console.log(groupData(input));
// function groupDepartment(arr) {
//     return arr.reduce((acc, cur) => {
//         let keyName = cur.department;
//         if (acc[keyName]) {
//             acc[keyName].push(cur);
//         } else {
//             acc[keyName] = [cur];
//         }
//         return acc;
//     }, {});
// }
// console.log(groupDepartment(input));

// --------1------forEach---------
// let obj = {};
// function groupData(arr) {
//   arr.forEach((value) => {
//     let keyName = value.name.charAt(0).toUpperCase();
//     if (obj[keyName]) {
//       obj[keyName].push(value);
//     } else {
//       obj[keyName] = [value];
//     }
//   });
//   console.log(obj);
// }
// let groupTheData = groupData(input);
// console.log(groupData);
// let obj1 = {};
// function groupData(arr) {
//   arr.forEach((value) => {
//     let keyName = value.department;
//     if (obj1[keyName]) {
//       obj1[keyName].push(value);
//     } else {
//       obj1[keyName] = [value];
//     }
//   });
//   console.log(obj1);
// }
// let groupTheData = groupData(input);
// console.log(groupData);


//------------------------------19---------------------------
// let arr1 = [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 }];
// let arr2 = arr1.map(item => item);                //Because the all object have same reference in arr1 and arr2.
// arr2[2].b = 45;
// console.log(arr1);     // [ { a: 34 }, { a: 45 }, { a: 12, b: 45 }, { a: 5 }, { a: 78 } ]
// console.log(arr2);     // [ { a: 34 }, { a: 45 }, { a: 12, b: 45 }, { a: 5 }, { a: 78 } ]


// let arr1 = [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 }];
// let arr2 = arr1.map((item, index, arr) => arr[index].b=45);
// console.log(arr1);                 //Here we add the property in each object
// console.log(arr2);

// let arr1 = [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { b: 78 }];
// let arr2 = arr1.map((item, index, arr) => {arr[index].a = 5;return item});
// console.log(arr1);                 //Here we add the property in each object
// console.log(arr2);

// let arr1 = [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 }];
// let arr2 = arr1.map(item => item);                //Because the all object have same reference in arr1 and arr2.
// arr2.b = 45;
// console.log(arr1);     // [ { a: 34 }, { a: 45 }, { a: 12, b: 45 }, { a: 5 }, { a: 78 } ]
// console.log(arr2);


//------------------------------20---------------------------
// let arr1 = [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 }];
// let arr2 = arr1.map(item => item.a * 2);                         //arr2 is return a different array which is store the (item.a*2) and return a new array.
// console.log(arr1);   //[ { a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 } ]
// console.log(arr2);   //[68, 90, 24, 10, 156]     return a new array in arr2


//------------------------------21---------------------------
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.reduce((a, c) => a + c).map(item => item);
// console.log(arr2);               //We cannot chaining the map function with integer(number)


//------------------------------22---------------------------
// const example = ({ a, b, c }) => {              //Here, we pass only one parameter with key name a,b and c and
//   console.log(a, b, c);
// };
// example(0, 1, 2);                               //Here , we pass three argument (values) 0 , 1 , 2 and function take only one object as argument
// example({ a: 0, b: 1, c: 2 });                  //Here , we solve the problem , example call the object as argument and perform the task.


//------------------------------23---------------------------
// let arr = [1, 2, 3, 4, 5];
// let sumOfSquare = arr.reduce((acc, cur) => acc + cur ** 2);
// console.log(sumOfSquare);


//------------------------------24---------------------------
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 18, grade: 'B' },
    { name: 'Charlie', age: 19, grade: 'A' },
    { name: 'David', age: 20, grade: 'C' },
];


//----1----
// let sortAge = students.sort((a, b) => a.age - b.age);
// console.log(sortAge);

// let result = students.reduce((acc, cur) => {
//     let age = cur.age;
//     if (acc[age] == null) {
//         acc[age] = []
//     }
//     acc[age].push(cur)
//     return acc
// }, {});
// console.log(result);


//----2----
// let sortGrade = students.sort((a, b) => a.grade < b.grade ? -1 : 1);
// console.log(sortGrade);

// let sortGrade = students.sort((a, b) => {
//     if (a.grade < b.grade) {
//         return -1;
//     }
//     if (a.grade > b.grade) {
//         return 1;
//     }
//     return 0;
// });
// console.log(sortGrade);

// let result = students.reduce((acc, cur) => {
//     let grade = cur.grade;
//     if (acc[grade] == null) {
//         acc[grade] = []
//     }
//     acc[grade].push(cur)
//     return acc
// }, {});
// console.log(result);


//----3----
// let sortName = students.sort((a, b) => a.name < b.name ? -1 : 1);
// console.log(sortName);

// let sortName = students.sort((a, b) => {
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     return 0;
// });
// console.log(sortName);

// let result = students.reduce((acc, cur) => {
//   let name = cur.name;
//   if (acc[name] == null) {
//     acc[name] = []
//   }
//   acc[name].push(cur)
//   return acc
// }, {});
// console.log(result);


//----4----
// function average(arr) {
//     return arr.reduce((acc, cur) => {
//         return acc + cur.age;
//     }, 0) / arr.length;
// }
// console.log(average(students));

// function average(arr) {
//   let length = 0;
//   let sum = arr.reduce((acc, cur) => {
//     length++;
//     return acc + cur.age;
//   }, 0);
//   return (sum / length);
// }
// console.log(average(students));


//----5----
// function sum(arr) {
//     return arr.reduce((acc, cur) => acc + cur.age, 0);
// }
// console.log(sum(students));


//------------------------------25---------------------------
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// let result = nestedArray.reduce((acc, cur) => {
//     if (Array.isArray(cur)) {
//         for (let i = 0; i < cur.length; i++) {
//             acc.push(cur[i]);
//         }
//     } else {
//         acc.push(cur);
//     }
//     return acc
// }, []);
// console.log(result);

// function flat(arr) {
//     let result = arr.reduce((acc, cur) => acc.concat(cur), []);
//     return result;
// }
// console.log(flat(nestedArray));


//------------------------------26---------------------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// function squareEven(arr) {
//     return arr.reduce((acc, cur) => {
//         if (cur % 2 === 0) {
//             acc.push(cur * cur);
//         }
//         return acc;
//     }, []);
// }
// console.log(squareEven(numbers));


//------------------------------27---------------------------
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// function removeDuplicateValue(numbers) {
//     let remove = numbers.reduce((acc, cur) => {
//         if (!acc.includes(cur)) {
//             acc.push(cur);
//         }
//         return acc;
//     }, []);
//     return remove;
// }
// console.log(removeDuplicateValue(numbers));


//------------------------------28---------------------------
// const words = ['apple', 'banana', 'orange'];
// function findFirstA(arr) {
//     return arr.find(value => value.includes('a'));
// }
// console.log(findFirstA(words));


//------------------------------29---------------------------
// const numbers = [2, 4, 6, 8, 9, 10];
// let firstOddNumber = numbers.findIndex(value => value % 2 != 0)
// console.log(firstOddNumber);


//------------------------------30---------------------------
// Write a function that returns the factorial of given number
// function factorial(number) {
//     return (number == 1 || number == 0) ? 1 : number * factorial(number - 1);
// }
// console.log(factorial(5));
// console.log(factorial(7));


//------------------------------31---------------------------
// const people = [
//     { name: 'Alice', age: 18 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 19 },
//     { name: 'David', age: 21 }
// ];
// function findIndexOfA(arr) {
//     return arr.findIndex(value => value.name.charAt() == 'A' && value.age < 20);
// }
// console.log(findIndexOfA(people));

//------------------------------32---------------------------
// function fun_name(arrayOfArray, array) {
//     let result = arrayOfArray.some(value => {
//         let h = [];
//         for (let i = 0; i < value.length; i++) {
//             if (value.includes(array[i])) {
//                 h.push(true);
//             } else {
//                 h.push(false);
//             }
//         }
//         return h.every(e => e == true);
//     });
//     return result;
// }
// function fun_name(arrayOfArray, array) {
//     let result = arrayOfArray.some(value => {
//         let arrayOfIndividual = [];
//         value.forEach((item, index) => {
//             if (item === array[index]) {
//                 arrayOfIndividual.push(true);
//             } else {
//                 arrayOfIndividual.push(false);
//             }
//         });
//         return arrayOfIndividual.every(e => e === true);
//     });
//     return result;
// }
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]));                      //true
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]));                      //true
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]));                    //false
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]));  //true

// function fun_name(arrayOfArray, array) {
//     let arr = arrayOfArray.flat(Infinity);
//     let a = array.map(e => {
//         for (let i = 0; i < arr.length; i++) {
//             if (e == arr[i]) {
//                 return true;
//             }
//         }
//     });
//     let result = a.every(e => e == true)
//     return result;
// }


//------------------------------33---------------------------
// function fun_name(arrayOfArray, array) {
//     let result = arrayOfArray.some(value => {
//         let arrayOfIndividual = [];
//         value.forEach((item, index) => {
//             if (item === array[index]) {
//                 arrayOfIndividual.push(true);
//             } else {
//                 arrayOfIndividual.push(false);
//             }
//         });
//         // console.log(arrayOfIndividual);
//         return arrayOfIndividual.every(e => e === true);
//     });
//     return result;
// }
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]));                        // true
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]));                        // false
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]));                      // false
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]));    // false

// for (let i = 0; i < value.length; i++) {
//     if (value.at(i) === array.at(i)) {
//         arrayOfIndividual.push(true);
//     } else {
//         arrayOfIndividual.push(false);
//     }
// }
// function fun_name(arrayOfArray, array) {
//     let a = arrayOfArray.some(val => val.every((ele, i) => ele == array[i]))
//     return a;
// }

//------------------------------34---------------------------
// Write a JavaScript program to compute the union of two arrays

// function union(arr1, arr2) {
//     let numbers = [...arr1, ...arr2];
//     return numbers.reduce((acc, cur) => {
//         if (!acc.includes(cur)) {
//             acc.push(cur);
//         }
//         return acc;
//     }, []).sort((a, b) => a - b);
// }
// console.log(union([1, 2, 3], [100, 2, 1, 10]));              //[ 1, 2, 3, 10, 100 ]

//------------------------------35---------------------------
// Write a JavaScript function to find the difference between two arrays.
// function difference(arr1, arr2) {
//     arr1 = arr1.flat(Infinity);
//     arr2 = arr2.flat(Infinity);
//     let diffVar = [];
//     arr1.filter(value => arr2.includes(value) ? true : diffVar.push(String(value)));
//     arr2.filter(value => arr1.includes(value) ? true : diffVar.push(String(value)));
//     return diffVar.sort((a, b) => a - b);
// }
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));


//------------------------------36---------------------------
// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
// (FOR NOW CONSIDER THERE ARE ONLY ONE PAIR WHICH IS POSSIBLE SOLUTION)

// function returnSumInteger(array, sum) {
//     let a = array.map((value, index, arr) => {
//         let b = [];
//         let h = value;
//         for (let i = 0; i < array.length; i++) {
//             if (h + array[i] === sum) {
//                 b.push(h, array[i]);
//             }
//         }
//         return b;
//     });
//     return a[1];
// }
// console.log(returnSumInteger([10, 20, 10, 40, 50, 60, 70], 50));

// function returnSumInteger(array, sum) {
//     let a = array.reduce((acc, cur, index, arr) => {
//         for (let i = 0; i < array.length; i++) {
//             if (cur + array[i] === sum) {
//                 acc.push([cur, array[i]]);
//             }
//         }
//         return acc;
//     }, []);
//     return a[1];
// }
// console.log(returnSumInteger([10, 20, 10, 40, 50, 60, 70], 50));

// function pairOfSum(array, sum) {
//     let arr = Array(array).fill().map((v, i) => i + 1);
//     let a = arr.reduce((acc, cur, index, arr) => {
//         for (let i = index; i < arr.length; i++) {
//             if (cur + arr[i] === sum) {
//                 acc.push([cur, arr[i]]);
//             }
//         }
//         return acc;
//     }, []);
//     return a;
// }
// console.log(pairOfSum(10, 17));

//------------------------------37---------------------------
// let arr = [NaN, 0, 15, false, -22, '', undefined, 47, null]
// let result = arr.filter(value => value > 0 || value < 0 ? value : false);
// console.log(result);

//------------------------------38---------------------------
// function num_string_range(start, end, skip) {
//     let arr = [];
//     if (typeof start === 'number' && typeof end == 'number') {
//         if (start < end) {
//             for (let i = start; i <= end; i += skip) {
//                 arr.push(i);
//             }
//         } else if (start > end) {
//             for (let i = start; i >= end; i -= skip) {
//                 arr.push(i);
//             }
//         }
//     } else if (typeof start === 'string' && typeof end == 'string') {
//         const startCode = start.charCodeAt(0);
//         const endCode = end.charCodeAt(0);
//         for (let i = startCode; i <= endCode; i += skip) {
//             let str1 = String.fromCharCode(i);
//             arr.push(str1)
//         }
//     }
//     return arr;
// }
// console.log(num_string_range('a', 'z', 2));     // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
// console.log(num_string_range('A', 'Z', 2));     // ['A', 'C', 'E', 'G','I', 'K', 'M', 'O','Q', 'S', 'U', 'W','Y']
// console.log(num_string_range(0, -5, 1));        //  [0, -1, -2, -3, -4, -5]
// console.log(num_string_range(0, 25, 5));        //  [0, 5, 10, 15, 20, 25]
// console.log(num_string_range(20, 5, 5));        //  [20, 15, 10, 5]

//------------------------------39---------------------------
// Write a JavaScript function to remove a specific element from an array.
// function remove_array_element(arr, element) {
//     return arr.filter(value => value !== element)
// }
// console.log(remove_array_element([2, 5, 9, 6], 5));

//------------------------------40---------------------------
// Write a JavaScript function to find an array containing a specific element.
// function contains(arr,element) {
//     return arr.includes(element);
// }
// let arr = [2, 5, 9, 6];
// console.log(contains((arr),5));
// console.log(contains((arr),10));


//------------------------------41---------------------------
// function countArray(arr) {
//     return arr.filter(value => Array.isArray(value)).length;
// }
// console.log(countArray(([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]])));
// console.log(countArray(([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]])));

// Write a JavaScript program to count the number of arrays inside a given array.
// function countArray(arr) {
//     let a = arr.reduce((acc, cur) => {
//         if (Array.isArray(cur)) {
//             acc++;
//         }
//         return acc;
//     }, 0);
//     return a;
// }


//------------------------------42---------------------------
// function findMaximumLength(arr) {
    // let max = 0;
    // arr.forEach(value => {
    //     if (Array.isArray(value) && max < value.length) {
    //         max = value.length;
    //     }
    // });
    // return max;
// }
// console.log(findMaximumLength([2, 8, [6], 3, 3, 5, 3, 4, [5, 4], [6]]));
// console.log(findMaximumLength([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]));
// console.log(findMaximumLength([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]], [23, 56]]));
// console.log(findMaximumLength([1, 5, 2, 6, 4, 23, 89]));
// return arr.filter(value => Array.isArray(value)).map(value => value.length).reduce((acc, cur) => acc > cur ? acc : cur, 0);

// Write a JavaScript program to find the maximum length of arrays inside a given array.
// function findMaximumLength(arr) {
//     let a = arr.map(value => {
//         if (Array.isArray(value)) {
//             return value.length;
//         }
//     }).filter(value => Number(value)).reduce((acc, cur) => acc > cur ? acc : cur, 0);
//     return a;
// }

//------------------------------43---------------------------
// Write a JavaScript program to check if an array is a factor chain or not. A factor chain is an array in which the previous element is a factor of the next    consecutive element. The following is a factor chain:
// function factorChaining(arr) {
//     let empty = [];
//     let a = arr.reduce((acc, cur) => {
//         if (cur % acc === 0) {
//             empty.push(true);
//         } else {
//             empty.push(false);
//         }
//         return cur;
//     })
//     return empty.every(value => value === true);
// }
// console.log(factorChaining([2, 4, 8, 16, 32]));         // true
// console.log(factorChaining([2, 4, 16, 32, 64]));        // true
// console.log(factorChaining([2, 4, 16, 32, 68]));        // false






// function myFunction(a) {
//   let f = a[0];
//   let b = a.every(value => value === f);
//   return b;
// }
// console.log(myFunction(['test', 'test', 'test']));
// console.log(myFunction(['10', 10, 10, 10]));


// function assign(obj1, obj2) {
//     for (let value in obj2) {
//         obj1[value] = obj2[value];
//     }
//     return obj1;
// }
// let obj1 = { a: 10, b: 20 };
// let obj2 = { b: 30, c: 40 };
// let obj3 = assign(obj1, obj2);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);



// console.log("".concat({ a: 19 }));