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
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.55,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" },
                    { "id": "1002", "type": "Chocolate" },
                    { "id": "1003", "type": "Blueberry" },
                    { "id": "1004", "type": "Devil's Food" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5007", "type": "Powdered Sugar" },
                { "id": "5006", "type": "Chocolate with Sprinkles" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    },
    {
        "id": "0002",
        "type": "donut2",
        "name": "Raised",
        "ppu": 0.55,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    },
    {
        "id": "0003",
        "type": "donut3",
        "name": "Old Fashioned",
        "ppu": 0.55,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" },
                    { "id": "1002", "type": "Chocolate" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    },
    {
        "id": "0004",
        "type": "donut1",
        "name": "Old Fashioned",
        "ppu": 0.55,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    }
];


//1-Method-1
// let toppingChocolate = array.filter(value => value.topping.filter(topping => topping.type == "Chocolate").length);
// console.log(toppingChocolate);
//1-Method-2
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

//2-method-1
// let regularWithChocolate = array.filter(value => {
//     if (value.topping.filter(topping => topping.type == "Chocolate").length && value.batters.batter.filter(batter => batter.type == "Regular").length) {
//         return value;
//     }
// });
// console.log(regularWithChocolate);
//3-method-2
// function regularWithChocolate(arr) {
//     let arr2 = arr.filter(value => value.batters.batter.some(batter => batter.type === 'Regular') && value.topping.some(topping => topping.type === 'Chocolate'))
//     return arr2;
// }
// console.log(regularWithChocolate(array));

//3-method-1
// let chocolateAndSugar = array.filter(value => value.topping.filter(topping => topping.type === 'Chocolate').length && value.topping.filter(topping => topping.type === 'Sugar').length);
// console.log(chocolateAndSugar);
// 3-method-2
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
// ppuGet(array);

//5
// function printAllBatters(array) {
//     let a = array.map(value => value.batters);
//     console.log(a);
// }
// printAllBatters(array);

//6
// function filterBatters(array) {
//     let a = array.filter(value => value.batters.batter.length >= 2);
//     console.log(a);
// }
// filterBatters(array);



//------------------------------10---------------------------
// let string1 = "George Raymond Richard Martin";
// let string2 = "george raymond Richard Martin"
// function getFirstChar(string){
//     let a = string.split(" ");
//     let c = "";
//     for (let value in a) {
//         c += a[value].charAt(0).toUpperCase();
//     }
//     console.log(c);
// }
// getFirstChar(string1);
// getFirstChar(string2);


//------------------------------11---------------------------
// let string = "Every developer likes to mix kubernetes and javascript";
// function addNumber(string) {
//     let a = string.split(" ");
//     let c = "";
//     for (let value in a) {
//         if (a[value].slice(1, a[value].length - 1).length === 0) {
//             c += a[value].charAt(0) + a[value].charAt(a[value].length - 1) + " ";
//         } else if (a[value].slice(1, a[value].length - 1).length === 1) {
//             c += a[value].charAt(0) + a[value].slice(1,2) + a[value].charAt(a[value].length - 1) + " ";
//         }
//         else {
//             c += a[value].charAt(0) + a[value].slice(1, a[value].length - 1).length + a[value].charAt(a[value].length - 1) + " ";
//         }
//     }
//     console.log(c);
// }
// addNumber(string);

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
// {Clothes: 4,Electronics: 4}
// function makeNewObject(arrayName) {
//     let newObject = {};
//     let Clothes = arrayName.filter(value => value.category == "Clothes");
//     let Electronics = arrayName.filter(value => value.category == "Electronics");
//     let a = Clothes.length;
//     let b = Electronics.length;
//     newObject.Clothes = a;
//     newObject.Electronics = b;
//     return newObject;
// }
// let newObj = makeNewObject(products);
// console.log(newObj);

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

//------------------------------13---------------------------
// const employees = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
// ];
//13-a
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

//13-b
// function averageSalary(employees) {
//     let obj = {};
//     let HR = [];
//     let IT = [];
//     for (let i = 0; i < employees.length; i++) {
//         if (employees[i].department == "HR") {
//             HR.push(employees[i].salary);
//         } else if (employees[i].department == "IT") {
//             IT.push(employees[i].salary);
//         }
//     }
//     obj = { HR, IT }
//     return obj;
// }
// let aveObject = averageSalary(employees);
// console.log(aveObject);









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