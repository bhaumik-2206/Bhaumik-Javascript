// let x = 10;
// let y = "10";
// console.log(x === y);
// if(x==y){
//     console.log("same");
// }else{
//     console.log("diff.");
// }

// {
//     let x = 10;
//     let student = {
//         fname:"Bhaumik",
//         lname:"Panchal"
//     }
//     console.log(student.fname);
// }
// console.log(student.fname);         //Reference Error student is not defined 

// let x = 5;
// let y = 5;
// let z = "10";

// console.log(z + x + y);
// console.log(x + y + z);
// console.log(x + z + y);

// let student = {
//     bhaumik: 18,
//     vanch: 19,
//     rudra: 20
// }

// let fullname = "bhaumik";

// console.log(student[fullname]);

// let student = {
//     bhaumik: 18,
//     vansh: 19,
//     rudra: 20
// }

// let firstname="bhaumik";
// let fullname = ["bhaumik","vansh","rudra"];

// console.log(student[firstname]);
// console.log(student[fullname[1]]);



// let obj1 = {
//     fname: "raj",
//     lname: { one: "p", two: "a" },
//     func: function obj1function() {
//         return 1;
//     },
//     createdate: Date()
// }

// let obj2 = Object.assign({},obj1);
// let obj2 = { ...obj1 };
// obj1.fname = "yash";
// console.log(obj1);
// console.log(obj2);

// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.lname.one="d";

// console.log(obj1);
// console.log(obj2);          //In this case date's data type is turned into string and also lost the function


// let fullname ={
//     "first name" : "Bhaumik",
//     "first-name" : "Bhaumik",
//     "first@name" : "Bhaumik",
//     "first!name" : "Bhaumik",
//     "first.name" : "Bhaumik"
// }

// console.log(fullname["first name"]);
// console.log(fullname["first-name"]);
// console.log(fullname["first@name"]);
// console.log(fullname["first!name"]);
// console.log(fullname["first.name"]);


// {
//     let obj1 = {
//         fname:"Bhaumik",
//         lname:"Panchal"
//     }
//     console.log(obj1);
// }
// console.log(obj1);          //reference error obj1 is not defined


// let obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3'
// };

// let valueToFind = 'value2';

// let key = Object.keys(obj).find(key => obj[key] === valueToFind);

// console.log(key); // Output: key2

// let obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3'
// };
// {
//     console.log(obj.key1);
// }
// function func() {
//     console.log(obj.key1);
// }
// func();

// let n = "name";
// let obj1 = {
//     [n]: "Raj",               //name is variable
//     ["last" + n]: "Panchal",
//     func : function() {
//         console.log(`${this.name}`);
//     }
// }
// obj1.func();
// console.log(obj1.func());
// console.log(obj1);

// let fname = "Bhaumik";
// let lname = "Panchal";
// let age = 18;

// function print(fullname, age) {
//     fullname = fname + " " + lname;
//     return { fullname, age };
// }

// console.log(print());

// let obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3'
// };

// delete obj.key3;
// console.log(obj);

// let obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: {
//         greet:"hello",
//         end:"Bye"
//     }
// };

// delete obj.key3.greet;
// console.log(obj.key3);

// let obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3:["hello","Bye"]

// };

// delete obj.key3[0];
// console.log(obj.key3);




// *****Arithmetic Operators******

// let a = 40;
// let b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** 2);
// console.log(++a);
// console.log(a++);
// console.log(--a);
// console.log(a--);

// let a = 10;
// let b = 20;
// console.log(a != b);
// console.log(a !== b);