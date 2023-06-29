// let arr = [10,20,30,40];
// console.log(arr);

// let arr = ["Bhaumik","Vansh","rudra"];
// console.log(arr);
// console.log(arr[0]);



//Array Methods:-

// -----------------------------1:-Push Method------------------------------
// let number = [10,20,30,40,50];
// let addNumber = number.push("60",undefined);         //In Number
// console.log(addNumber);
// console.log(number);
// number.push(70,true,90,100,false,null);
// console.log(number);

// let string = ["first","Second","Third",30];
// let addString = string.push("Forth",true);            //In String
// console.log(addString);
// console.log(string);
// string.push("Fifth","Sixth",null);
// console.log(string);

// let string1 = ["first","Second","Third"];
// let string2 = ["Forth","Fifth","Sixth"];         //Merging two array with spread operators
// string1.push(...string2,"Seventh");
// console.log(string1);

// let number = [10,20,30,40,50];
// // let newNumber = number.push(func_name);
// let newNumber = number.push(func_name());
// function func_name() {
//     return 60;
// }
// console.log(newNumber);
// console.log(number);


// -----------------------------2:-Pop Method------------------------------
// let number = [10,"20",30,"40",50];
// console.log(number.pop());
// console.log(number.pop());             //remove last element from anm array. and change the length of an array
// console.log(number);

// let string = ["first",20,"Third"];
// let addString = string.pop();            //In String
// console.log(addString);
// console.log(string);

// let arr=[];
// console.log(arr.pop());                    //undefined - array is empty


// -----------------------------3:-Shift Method------------------------------
// let number = [10,20,30,40,50];
// console.log(number.shift());
// console.log(number.shift());             //remove first element from anm array. and change the length of an array
// console.log(number);

// let string = ["first","Second","Third"];             //shift is reverse than pop
// let addString = string.shift("Forth");            //In String
// console.log(addString);
// console.log(string);

// let arr=[];
// console.log(arr.shift());                    //undefined - array is empty


// -----------------------------4:-unShift Method------------------------------
// let number = [10,20,30,40,50];
// let addNumber = number.unshift("60");         //In Number
// console.log(addNumber);
// console.log(number);
// number.unshift(70,80,true,null,100);
// console.log(number);

// let string = ["first","Second","Third"];
// let addString = string.unshift("Forth");
// console.log(addString);
// console.log(string);
// string.unshift("Fifth","Sixth");
// console.log(string);

// let string1 = ["first","Second","Third"];
// let string2 = ["Forth","Fifth","Sixth"];
// string1.unshift(...string2);
// console.log(string1);

// let number = [10,20,30,40,50];
// let newNumber = number.push(func_name());
// // let newNumber = number.unshift(func_name);
// function func_name() {
//     return 60;
// }
// console.log(newNumber);
// console.log(number);

// -----------------------------5:-Foreach Method------------------------------
// let arr = ["Bhaumik","Vansh","Sachin","Rudra"];
// let newArray = arr.forEach(function(value,index){
//     console.log(index+ " : "+value);
// });
// console.log(newArray);

// let arr = ["Bhaumik","Vansh","Sachin","Rudra"];
// let newArray = arr.forEach(foreach);
// function foreach(value,index){
//     console.log(index+ " : "+value);
// }
// console.log(newArray);
// console.log(arr);                                //This is not an muted method

// let arr = ["Bhaumik", "Vansh", "Sachin", "Rudra"];
// arr.forEach(function (value, index, arr) {
//     console.log(arr);                            //print index time
// });

// let number = [1,2,3,4,5];
// number.forEach(function (value,index,array){     //add 10 in all values with for each loop
//     console.log(array[index] + 10);
// });



// -----------------------------6:-map Method------------------------------
// let arr = [1, 2, 3, 4, 5];
// let newa = arr.map(x => x * 2);
// console.log(newa);

// let arr = [1, 2, 3, 4, 5];
// let a= arr.map((value) => {
//     return value + 20;
// });
// console.log(arr);                    //does not affected on main array
// console.log(a);                      //add value

// let arr = ["10", "20", "30", 40, null, undefined];
// let a = arr.map((value) => {
//     return value + " Hello";
// });
// console.log(a);

// let f_name = [
//     { fname: "Bhaumik", lname: "Panchal" },
//     { fname: "Vansh", lname: "Panchal" },
//     { fname: "Rudra", lname: "Solanki" },
//     { fname: "Sachin", lname: "Israni" },
//     { fname: "Raj", lname: "Bundela" }
// ];
// // console.log(f_name.map(x => x.fname + " " + x.lname));

// -----------------------------7:-filter Method------------------------------
// let words = ["hii", "how are you", "Hello", "Heiiii"];
// let result = words.filter(word);          //return array which has length greater than 5
// function word(word) {
//     return word.length >= 5;
// }
// console.log(result);

// let words = ["hii", "null", "Hello", 2000005, "Heiiii"];            //we can not put undefined and null in this array
// let result = words.filter(word);          //return array which has length greater than 5
// function word(word) {                       //2000005 this is not print because number is not working
//     return word.length >= 5;
// }
// console.log(result);

// let number = [10, 20, 30, 40, [50, 60, 70], { a: 80, b: 100 }];
// let a = number.filter(function (value) {
//     return value > 15;
// });
// console.log(a);

// let f_name = [{fname:"Bhaumik"},{fname:"Vansh"},{fname:"Rudra"},{fname:"Sachin"},{fname:"Raj"}];
// let store = f_name.filter(function(value){
//     console.log(value.fname);
// });

// const names = ["Bhaumik", "Vansh", "Sachin", "Raj", "Jay"];
// function filterItems(array, search) {
//     return array.filter((el) => el.toLowerCase().includes(search.toLowerCase()));
// }
// console.log(filterItems(names, "Bhaumik"));
// console.log(filterItems(names, "n"));

// let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
// const modifiedWords = words.filter(function (word, index, arr) {
//     arr[index + 1] += " extra";
//     return word.length < 6;
// });
// console.log(modifiedWords);

// words = ["spray", "limit", "exuberant",10020, "destruction", "elite", "present"];
// const appendedWords = words.filter(function (word, index, arr) {
//     arr.push("new");
//     return word.length < 6;
// });
// console.log(appendedWords);

// words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
// let deleteWords = words.filter(function(word, index, arr) {
//     arr.pop();
//     return word.length < 6;
// });
// console.log(deleteWords);

// let f_name = [
//     { fname: "Bhaumik", lname: "Panchal" },
//     { fname: "Vansh", lname: "Panchal" },
//     { fname: "Rudra", lname: "Solanki" },
//     { fname: "Sachin", lname: "Israni" },
//     { fname: "Raj", lname: "Bundela" }
// ];
// console.log(f_name.filter(x => x.lname =="Panchal"));

// -----------------------------8:-reduce Method------------------------------
// let arr = [1, 2, 3, 4, 5];
// let newarray = arr.reduce((value, index) => {
//     return value + index;
// });
// console.log(newarray);

// let a = [15, 16, 17, 18, 19].reduce(
//     (value, index) => value + index,
//     10,
// );
// console.log(a);

// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce(
//     (value, index) => value + index.x, 0
// );
// console.log(sum);

// let arr = [10, 20, 30, 20, 10];
// console.log(arr.reduce(function (max, next) {
//     if (next > max) {
//         max = next;
//     }
//     return max;
// }));


// -----------------------------9:-join Method------------------------------
// let arr = [15, 0, true, 17, 19];
// console.log(arr.join());-
// console.log(arr.join("-"));
// console.log(arr.join("*"));                      //Return a string
// console.log(arr);

// let arr = [15, 16, undefined, 0, true, , 18, null, 19];       //null and undefinde make empty string
// console.log(arr.join("-"));
// console.log(arr);

// let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr1.join("-"));

// let arr1 = [{ a: 1, b: 2 }, { a: 1, b: 2, a: 1 }, { a: 1, b: 2 }];
// console.log(arr1.join("-"));                                 //[object Object]-[object Object]-[object Object]

// -----------------------------10:-reverse Method------------------------------
// let arr = [15, 0, true, 17, 19, null];               //change original array
// console.log(arr.reverse());
// console.log(arr);
// console.log(arr.reverse());

// let arr = [15, 16, 0, 17, 18, 19];
// let newa = arr.reverse();
// console.log(newa);
// newa[3]=10;
// console.log(newa);

// let arr = [15, 16, , 17, , 19];
// console.log(arr.reverse());

// let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];            //shallow copy
// console.log(arr1.reverse());


// -----------------------------11:-sort Method------------------------------
// let arr = [15, 16, 17, 19, 20, 100];
// console.log(arr.sort());

// let arr = ["Bhaumik","bhaumik", "rudra", "Vansh"];
// console.log(arr.sort());                    //return reference
// console.log(arr);                           //change the original array

// let arr = ["Bhaumik", "z", null, undefined, false, true, "Vansh"];
// console.log(arr.sort());



// -----------------------------12:-splice Method------------------------------
// let arr = ["Bhaumik", "rudra", "Vansh"];
// arr.splice(2, 0, "Raj");
// console.log(arr);

// let arr = ["Bhaumik", "rudra", "Vansh"];
// arr.splice(2, 1, "Raj");
// console.log(arr);

// let arr = ["Bhaumik", "rudra", "Vansh"];
// arr.splice(0, 2, "Raj");                       //parameter:-start , deleteitems , itemname...
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 2, 10, true, undefined, null);
// console.log(arr);

// let arr = ["Bhaumik", "rudra", "Vansh", "Jay", "Empty"];
// arr.splice(1, 3, "Raj","Bhaumik", "rudra");      //multiply value add
// console.log(arr);

// let arr = ["Bhaumik", "rudra", "Vansh", "Jay", "Empty", "Vansh", "Jay", "Empty", "Vansh", "Jay", "Empty", "Vansh", "Jay", "Empty"];
// arr.splice(1, Infinity, "Raj","Bhaumik", "rudra");      //multiply value add
// console.log(arr);


// -----------------------------13:-find Method------------------------------
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.find((value) => {                //return number
//     return value > 3;
// }));

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.find((value) => {
//     return value < 3;
// }));

// let arr = [1, "Bhaumik", 3, 4, 5, "Vansh"];
// console.log(arr.find((value) => {
//     return value === "Vansh";
// }));

// let names = [{ f_name: "Bhaumik" }, { f_name: "Vansh" }, { f_name: "Raj" }];
// let a = names.find(function (fi_name)  {
//     return fi_name.f_name === "Raj";
// });
// console.log(a);
// console.log(names);


// -----------------------------14:-findIndex Method------------------------------
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.findIndex(function(value) {          //return index
//     return value > 3;
// }));

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.findIndex((value) => {
//     return value < 3;
// }));

// let names = [{ f_name: "Bhaumik" }, { f_name: "Vansh" }, { f_name: "Raj" }];
// let a = names.findIndex(function (fi_name)  {
//     return fi_name.f_name === "Raj";
// });
// console.log(a);
// console.log(names);

// let arr = [1, 2, , 4, 5];
// console.log(arr.findIndex((value) => {
//     return value > 2;
// }));

// let arr = [1, 2, , 4, 5];
// console.log(arr.findIndex((value) => {
//     return value === undefined;
// }));

// -----------------------------15:-findLastIndexOf Method------------------------------


// -----------------------------16:-includes Method------------------------------
//return boolean value
// let arr = [10,20,30,40,50];
// console.log(arr.includes(20));       //true
// console.log(arr.includes("20"));     //false

// let arr = [1, 2, 3, undefined, null, true,"Bhaumik"];
// console.log(arr.includes(undefined));           //true
// console.log(arr.includes(undefined,4));         //false
// console.log(arr.includes(undefined,-4));        //true
// console.log(arr.includes(null));                //true
// console.log(arr.includes(true));                //true
// console.log(arr.includes("Bhaumik"));           //true

// let arr = [10, 20, , 40, 50];
// console.log(arr.includes(undefined));

// -----------------------------17:-concat Method------------------------------
// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];
// let arr3 = [70, 80, 90];
// console.log(arr1.concat(arr3, arr2));

// let arr = [true,null,undefined];
// console.log(arr.concat("Hello",10));

// let arr = [true, null, undefined];
// console.log(arr.concat(20, [30, 40]));

// let arr1 = [20, [30, 40]];
// let arr2 = [40, [50, 60]];
// console.log(arr1.concat(arr2));

// let arr1 = [10, , 30];
// let arr2 = [40, , 60];
// console.log(arr1.concat(arr2));

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];
// function arr_concat(array) {
//     return array;
// }
// console.log(arr1.concat(arr_concat(arr1)));
// console.log(arr1.concat(arr_concat(arr2)));

// -----------------------------18:-at Method------------------------------
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.at(3));
// let arr = [10, 20, , 40, 50];
// console.log(arr.at(3));
// let arr = [10, 20, ,null, undefined,"40", 50];
// console.log(arr.at(-3));
// let arr = [10, 20, ,null, undefined,"40", 50];
// console.log(arr.at(2));
// let arr = [null, undefined, 40, "40", "Hello"];
// function at_arr(){
//     return 2
// }
// console.log(arr.at(at_arr()));

// -----------------------------19:-some Method------------------------------
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.some((value) => value % 2 === 0));       //atleast one true -> return true

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.some((value) => value > 0));

// -----------------------------20:-every Method------------------------------
// let arr = [2, 4, 6, 8];
// console.log(arr.every((value) => value % 2 === 0));       //all become true -> return true

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.every((value) => value % 2 === 0));

// let arr = [2, 4, , 6, 8];
// console.log(arr.every((value) => value % 2 === 0));  //array is not affected on empty array

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.every((value) => value > 0));        //true all condition are true
// console.log(arr.every((value) => value > 10));       //false first condition is false

// arr = [1, 2, 3];
// arr.every((elem, index, arr) => {
//     arr.push("new");                                 //Here the new string is push in the array in the last index
//     console.log(`[${arr}][${index}] -> ${elem}`);    //Here , we print arr index and ele
//     return elem < 4;                                 //Here element is print only 4 time
// });

// arr = [1, 2, 3, 4];
// arr.every((elem, index, arr) => {
//     arr.pop();
//     console.log(`[${arr}][${index}] -> ${elem}`);
//     return elem < 4;
// });

// ----------------------------- 21: -fill Method------------------------------fill(value, start, end)
// let arr = [1, 2, 3, 4];
// console.log(arr.fill(0, 1, 3));             //To change 0 from 1 to 3 index
// console.log(arr.fill(5, 1));                //To change 5 from 1 to array,length
// console.log(arr.fill(6));                   //To change 6 from 0 to array.length
// console.log(object);
// let arr = ["B", "V", "S", "P", "J"];
// console.log(arr.fill("a"));
// console.log(arr.fill("a", 1));
// console.log(arr.fill("a", 1, 3));

// -----------------------------22:-isArray Method------------------------------Array.isArray(value)
// console.log(Array.isArray([]));
// console.log(Array.isArray('[}'));
// console.log(Array.isArray([10,20]));
// console.log(Array.isArray(new Array(5)));
// let a=[10,20];
// console.log(Array.isArray(a));
// let a = [10, 20];
// let b = a;
// console.log(Array.isArray(b));
// let a=[{10:20}];
// console.log(Array.isArray(a));

// -----------------------------23:-flat Method------------------------------flat(depth/Infinity)
// let arr = [1,2,3,[4,5]];
// console.log(arr.flat());                 //default parameter is one(1)

// let arr = [1,2,3,[4,5,[6,7,8]]];
// console.log(arr.flat(2));           //This 2 is a depth. Compiler going in 2 depth and find all sub-array and add in main array.

// let arr = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];
// console.log(arr.flat(3));

// let arr = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];
// console.log(arr.flat(4));

// let arr =[1,[2,[3,[4,[5,[6,[7,[8,[9,[10]]]]]]]]]];
// console.log(arr.flat(Infinity));         //Infinity is print all sub-array in the main array.

// let arr = ["a","b",["c","d",["e","f"]]];
// console.log(arr.flat(Infinity));

// let arr = [1, , 2, , 3, , 4, , 5, , 6, ,];
// console.log(arr.flat());                            //Remove a sparse array

// let arr = [1, , 2, , 3, , 4, [, , 5,[, , 6, ,]]];
// console.log(arr.flat());                            //return an empty object we array has depth 2 and we can not put a parameter

// let arr = [1, , null, [undefined, [true, false, ["Bhaumik"]]]];
// console.log(arr.flat(Infinity));

// let arr = [1, 2, [4, { a: 10, b: 30, c: [30, 40, { a: 10, b: 30, c: [30, 40] }] }]]
// console.log(arr.flat(Infinity));

// let arr = [1,2,function hello(greeting) {

//     return greeting;
// },20];
// console.log(arr.flat(Infinity));

// -----------------------------24:-slice Method------------------------------slice(start,end)
// let arr=[10,20,30,40,50];
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-3,4));
// console.log(arr.slice(-3,-1));
// console.log(arr.slice(-2,-5));           //[]-empty array
// console.log(arr.slice(5,2));             //[]-empty array









// words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
// const deleteWords = words.filter((word, index, arr) => {
//     arr.pop();
//     return word.length < 6;
// });
// console.log(deleteWords);

// let obj = {
//     0: 1, 1: 2
// }
// console.log(obj);