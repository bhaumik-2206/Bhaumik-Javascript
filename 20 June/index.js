// let a = '10';
// let b = '11';
// console.log(a < b);


//----------Assignment Operators--------------
// let a = 40;
// let b = 20;
// a = b;
// console.log(a);
// a += b;
// console.log(a);
// a -= b;
// console.log(a);
// a *= b;
// console.log(a);
// a /= b;
// console.log(a);
// a %= b;
// console.log(a);



//----------Comparison Operators--------------
// let a = 20;
// let b = 20;
// console.log(a == b);          //return true if number are same
// console.log(a != b);          //return true if number are different
// console.log(a === b);         //return true if number and data type are same
// console.log(a != b);

// let x = 20;
// let y = 10;
// console.log(x > y);             //x is greater than y(true)
// console.log(x < y);             //x is not less than y (false)
// x=10;
// console.log(x >= y);             //x is less than and equal to y (true)
// console.log(x <= y);             //x is less than and equal to y (ture)



//----------Logical  Operators--------------
// let age = 18;
// if (age > 16 && age < 22) {
//     console.log('You are in college');
// }
// else {
//     console.log('You are in school');
// }

// let a = 18;
// if (a == 18 || a == 20) {
//     console.log("You are able to drive car.");
// }else{
//     console.log("Noo");
// }


//----------Conditional Operators--------------
// let fname = "b";
// let returnf = fname == 'b' ? true : false;
// console.log(returnf);
// let returnt= fname == 't' ? true : false;
// console.log(returnt);

// let a = 10;
// console.log(typeof Infinity);
// console.log(typeof NaN);
// console.log(typeof Number('100'));
// console.log(typeof Number('This is string but return number'));
// console.log(typeof '100');
// console.log(typeof 12n);

// let a = 10;
// let res = (a++, a++);
// console.log(a);

// let a = 10, b = 20, c = 30, d = 40;
// let res = (d - c, a + b);
// console.log(res);
// console.log(a + b, d - c);                   //print last value in comma

// console.log(10 + 10 + "10");
// console.log("10" + 10 + 10);

// const a = 1 || 3;
// const b = 0 || 1;
// const c = 2 || 1;
// console.log(a, b, c);
// if (a == 2) {
//     console.log(true);
// } else {
//     console.log(false);
// }

let a;                      //undefine and null than return second value
let b = null;               //0,true and false,number, string than return first value 
let c = 10;

console.log(a ?? c);