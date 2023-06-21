// function function_name(){
//     //code
// }
// function_name();        //invoke(call)

// function function_name(para_1,para_2){
//     //code              //we can use para_1 and para_2 in this block
// }
// function_name(x,y);        //invoke(call)



// difference between function and arrow function

// 1 :- Syntax
// function f_name(para1,para2,para3) {             //Nornal function 
//     //code
// }
// const f_name = (para1,para2,para3) => {          //Arrow function
//     //code
// }


// 2:-Argument
// function f_name(x,y) {             //Nornal function 
//     console.log(arguments);
//     return x+y;
// }
// f_name(10,20);
// const f_name = (x, y) => {             //Arrow function 
//     console.log(arguments);
//     return x + y;
// }
// f_name(10, 20);          //throw an reference error argument has not defined


// 3 :-New Keyword
// function f_name(name) {
//     this.fname = name;
// }
// let c1= new f_name("Bhaumik");
// console.log(c1);
// const f_name = (name) => {
//     this.fname = name;
// }
// let c1 = new f_name("Bhaumik");
// console.log(c1);


// 4 :- return value
// function add(a, b) {
//     return a + b;
// }
// let ans1 = add(2,3);
// console.log(ans1);
// const add = (a, b) => a + b;
// let ans1 = add(2, 3);
// console.log(ans1);


// 5 :- this keyword
// let f_name = {
//     first_name: "Bhaumik",
//     simple() {
//         const arrow2 = () => {
//             console.log(this.first_name + " -> This arrow function in simple function");
//         }
//         arrow2();
//         console.log(this.first_name + " -> In simple function");
//     },
//     arrow: () => {
//         console.log(this.first_name + " -> This is arrow function");
//     }
// }
// f_name.simple();
// f_name.arrow();


// console.log(add(2, 3));
// function add(a, b) {
//     return a ** b;
// }

// (function () {
//     console.log("Hello World");
// })();

// function add(a, b) {
//     console.log("Hello " + a + " World "+ b);
// }
// add();

// const printName = (fname) => {
//     console.log(fname);
// }
// console.log(printName("Bhaumik"));

// function printName(fname) {
//     console.log(fname);
// }
// console.log(printName("Bhaumik"));           //doubt4

// function add(a, b) {
//     return a + b;
// }
// function multiply(a, b) {
//     return a * b;
// }

// console.log(multiply(10, add(3 , 4)));

// const add = (a, b) => a + b;
// console.log(add(3, 2));

// function add(a, b) {
//     let name = a;
//     let last = b;
// }

// let obj = new add("Bhaumik","Panchal");

// function function_name(){
//     return 1;
// }

// const function_name =function(){
//     return 1;
// }

// const function_name =()=>{
//     return 1;
// }