// String

//How to declare
// let first = "This is string";            //with double quote
// let second = 'This is string';           //with single quote
// let third = `This is string`;            //with back tick
// let forth = String("This is String");    //convert into string
// console.log(typeof first , typeof second , typeof third , typeof forth);

//how to get length of string
// let strLength = "This is String";
// console.log(strLength.length);           //get length of string with help of length keyword

//accessing character of string
// let getCharacter = "Bhaumik";
// console.log(getCharacter.charAt(4));     //Accessing the character with help of charAt() method

//Concatenating strings
// console.log("Hello" + " " + "World");
// let firstString = "Raj";
// let secondString = " Bundela";
// console.log(firstString.concat(secondString));   //concatenation of two string with help og concat() method
// let a = "Good"; b = " Morning", c = ",", d = " Guys";
// console.log(a.concat(b, c , d));

// Converting values to string
// let convertValueToString = String(10);
// console.log(typeof convertValueToString);    //convert value to string with String keyword

//Comparing strings
// return 1 if string - 1 is greater than string - 2(in alphabetical order)
// return -1 if string - 1 is less than string - 2(in alphabetical order)
// return 0 if string - 1 is string - 2 are equal in the alphabetical
// let a = "Bhaumik";
// let b = "bhaumik";                  //if string are same but first letter is capital than capital is grater than the small letter
// console.log(a.localeCompare(b));     //we also compare the string with comparison operators
// console.log('a' < 'b');
// console.log('a' > 'b');
// console.log('a' < 'ab');
// console.log('a' == 'b');
// console.log('a' === 'b');
// console.log('a' != 'b');
// console.log('a' !== 'b');



// string methods
//at-charAt
// let getCharacter = "Hello World";
// console.log(getCharacter.at(-1));            //also put negitive value
// console.log(getCharacter.charAt(8));         //get character at 8th index always put positive value

//charCodeAt
// let getcharacterCode = "Hello World";
// console.log(getcharacterCode.charCodeAt(8)); //get charecter code at 8th index / If we put negitive value than print NaN

//concat
// let str1 = "Hello";
// let str2 = " World";
// console.log(str1.concat(str2));              //concat two string with concat method

//endsWith
// let greet = "Good Morning";
// console.log(greet.endsWith("Morning"));      //it return true if trring end with we given in the bracket else return false

//includes
// let includeString = "This is a string";
// console.log(includeString.includes("is"));

//indexOf-and lastIndexOf
// let getIndex = "Hello , Good Morning , Everyone";
// console.log(getIndex.indexOf(","));          //In indexOf return the where index string or character.
// console.log(getIndex.indexOf("o",5));        //If we put two parameter than second parameter is for starting point where the index is started.
// console.log(getIndex.indexOf("hello"));      //If value is not present in string than return -1
// let getLastIndex = "one two three two one"
// console.log(getLastIndex.lastIndexOf("one"));//start searching from last and return index from first

//match
// let text = "This is a string";
// console.log(text.match("is"));               //this return an array if is is present in string else return null
// console.log(text.match("this"));

//matchAll


//padEnd-padStart
// let hello = "hello";
// console.log(hello.padEnd(10, "."));
// console.log(hello.padStart(7));
// "Dog!".padStart(10); // "      Dog!"
// console.log("Dog!".padEnd(14, ' Woof')); // "Dog! Woof Woof"

//replace
// let greet = "Good Morning!";
// console.log(greet.replace("Morning!","Afternoon!"));     //replace the string Morning to Afternoon

//replaceAll
// let p = 'sun is one , moon is one , earth is one';
// console.log(p.replaceAll('one', 'two'));
// console.log(p.replaceAll(' ', ','));

//search
// let searchString = "search for everything";
// console.log(searchString.search("for"));         //this return an index of which we search for

//slice
// let sliceString = "you can slice me with start and end value.";
// console.log(sliceString.slice(4, 10));            //cut the string from index 4 to 10
// console.log(sliceString.slice(6));               //cut the string from index 6 to last index
// console.log(sliceString.slice(-6));
// console.log(sliceString.slice(-6, -1));
// console.log(sliceString.slice(-6, -10));         //empty string
// console.log(sliceString.slice(6, -6));
// console.log(sliceString.slice(-6, 6));           //empty string

//split
// let splitString = "This is a string";
// console.log(splitString.split("s"));             //return an array
// console.log(splitString.split(""));

//startsWith
// let startString = "Hello , Good Morning , Everyone!";
// console.log(startString.startsWith("Hello"));    //it return true if string start with specify string else false
// console.log(startString.startsWith("!" , -1));
// console.log(startString.startsWith("Good" , 9));

//subString
// let sliceSubString = "you can slice me with start and end value.";
// console.log(sliceSubString.substring(4, 10));
// console.log(sliceSubString.substring(10, 4));
// console.log(sliceSubString.substring(6));
// console.log(sliceSubString.substring(-6));
// console.log(sliceSubString.substring(-6, -1));
// console.log(sliceSubString.substring(-6, -10));
// console.log(sliceSubString.substring(6, -6));
// console.log(sliceSubString.substring(-6, 6));

//toLowerCase-toUpperCase
// let f_name = "RAJ";
// console.log(f_name.toLowerCase());               //change the string to lowercase if it is uppercase
// let l_name = "bundela";
// console.log(l_name.toUpperCase());               //change the string to uppercase if it is in lowercase

//trim-trimEnd-trimStart
// let trimString = "       Hello       world         ";
// console.log(trimString.trim());                  //tring is remove white space in last and first
// console.log(trimString);
// console.log(trimString.trimEnd());
// console.log(trimString.trimStart());





//Object

//how to Declare an Object in JS
// let obj = {
//     f_name : "Bhaumik",
//     l_name : "Panchal"
// }
// console.log(obj.f_name);
// console.log(obj.l_name);

//Spread operator


//Accessing Object Properties (all methods)
// let obj = {
//     f_name: "Bhaumik",
//     l_name: "Panchal"
// }
// console.log(obj.f_name);
// console.log(obj["l_name"]);
// let { f_name } = obj; console.log(f_name);
// console.log(Object.keys(obj));               //To find all key return an array
// console.log(Object.values(obj));             //To find all value return an array
// console.log(Object.entries(obj));            //It return key and value both

//JavaScript Nested Objects
// let obj1 = {
//     a: 10,
//     b: 20,
//     c: {
//         d: 30,
//         e: {
//             f: 40,
//             g: 50
//         }
//     }
// }
// console.log(obj1);
// console.log(obj1.c.e.f);


//Destructuring object
// Object to be destructured
// const user = {
//     f_name: "Bhaumik",
//     age: 18,
//     address: "Vandemataram"
// }
// let { f_name, age, address } = user;
// console.log(f_name, age, address);
// let { f_name: your_name, age: ages, address: ghar } = user;
// console.log(your_name, ages, ghar);



//Object Methods

//Object.assign() Method
// const first = { a: 1, b: 2 };
// const second = { b: 5, c: 4 };
// const forth = { c: 50, d: 45 };
// const third = Object.assign(first, second, forth);
// console.log(third);
// const last = Object.assign(first, forth, second);            //Example-1
// console.log(last);

// function PrintName(user) {
//     const obj1 = {
//         fname: "Bhaumik"
//     }
//     user = Object.assign(obj1, user);
//     console.log(`Hello ${user.fname} ${user.lname}`);        //Example With Functions
// }
// PrintName({ lname: "Panchal" });


//Object.is() Method
// let obj1 = {
//     f_name: "Bhaumik",
//     l_name: "Panchal",
//     age: 20
// }
// let obj2 = {
//     l_name: "Bhaumik",
//     f_name: "Panchal",
//     ages: 20
// }
// let same_reference = obj1;
// console.log(Object.is(obj1.f_name, obj2.l_name));       //true
// console.log(Object.is(obj1.age, obj2.ages));            //true
// console.log(Object.is(same_reference, obj1));            //true  
// console.log(Object.is(same_reference, obj2));            //false  
// same_reference = obj2;
// console.log(Object.is(same_reference, obj2));            //Now they are same reference than return true  


//Object.entries() Method
// let object1 = {
//     f_name: "bhaumik",
//     l_name: "Panchal"
// }
// let store = Object.entries(object1);
// console.log(store);
// console.log(store[1]);
// console.log(store[1][1]);

//Object.values() Method
// let object1 = {
//     f_name: "bhaumik",
//     l_name: "Panchal"
// }
// console.log(Object.values(object1));

//Object.keys() Method
// let object1 = {
//     f_name: "bhaumik",
//     l_name: "Panchal"
// }
// console.log(Object.keys(object1));
// console.log(Object.keys("Bhaumik"));
// console.log(Object.keys(100));
// const anObj = { 100: "a", 2: "b", 7: "c" };
// console.log(Object.keys(anObj));





// function sum(a, b) {
//     let value = {
//         a: 10,
//         b: 20
//     }
//     console.log(value.a + value.b);
// }
// sum(100,20);

// function greet(a) {
//     delete a;
//     return a;
// }
// console.log(greet(10));      //delete is used when we used to delete property from an object

// let a = 10;
// delete a;                    //not woprking
// console.log(a);

// let f_name = "Bhaumik";
// let age = 18;
// let user = {
//     f_name: age,            //age is working but f_name is not working
//     [f_name]: age
// }
// console.log(user);

// const user = {
//     f_name:"Bhaumik",        //They ignore this property
//     l_name : "Panchal",
//     age : 18
// }

// const print = JSON.stringify(user , ["l_name","age"])
// console.log(print);

// const square = {
//     num1: 10,
//     function_1() {
//         return this.num1 * this.num1;
//     },
//     func2: () => this.num1 * this.num1
// }
// console.log(square.function_1());
// console.log(square.func2());


// let abc = {
//     a: 10,
//     b: 15
// }
// let a = 15;
// let { a: c, b } = abc;
// console.log(a);

// let abc = {
//     a: 10,
//     b: 15
// }
// let c = 15;
// let { a, b } = abc;
// console.log(c);

// let fullName = {
//     f_name: "Bhaumik",
//     l_name: "Panchal",
//     address: {
//         first: "Chandlodia",
//         second: "Vandemataram",
//         third: {
//             first: "141",
//             second: {
//                 first_2: "59",
//                 second_2: "60"
//             }
//         }
//     }
// }
// let { f_name } = fullName;
// console.log(f_name);
// let { address: { first } } = fullName;
// console.log(first);
// let { address: { third: { second: { second_2 } } } } = fullName;
// console.log(second_2);

// const value = { number: 20 };
// const multiply = (x = { ...value }) => {
//     console.log(x.number *= 2);
// };
// multiply();
// multiply();
// multiply(value);
// multiply(value);

// function change(person) {
//     person.age = 20;
//     person = {
//         fname: "Bhaumik",
//         age: 18
//     };
//     return person;
// }
// const person1 = {
//     fname: "Vansh",
//     age: 20
// }
// const person2 = change(person1);
// console.log(person1);
// console.log(person2);

// var myObject = { name: "Bhaumik", age: 18 };
// console.log(myObject);
// myObject = { name: "Vansh", age: 19 };
// console.log(myObject);

