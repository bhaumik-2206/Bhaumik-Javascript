// let obj1 = {
//     f_name: "Bhaumik",
//     l_name: "Panchal",
//     age: 20
// }
// console.log(obj1);
// let storeAsString = JSON.stringify(obj1);           //This object is convert into string.
// console.log(storeAsString);
// storeAsString = storeAsString.replace(20, 18);      //Now we can perform any string method and functions in this string
// console.log(storeAsString);
// let newString = JSON.parse(storeAsString);          //valid JSON string is convert into object
// console.log(newString);                             //Here age is print 18


// let obj1 = {
//     f_name: "Bhaumik",
//     l_name: "Panchal",
//     age: 20,
//     school_clg: {
//         ssc: "DBMS",
//         hsc: "Vijaynagar",
//         college: "SOU",
//         Courses: {
//             course: "BCA",
//             year: 3,
//         }
//     }
// }
// console.log(obj1);                                  //This is object
// let storeAsString = JSON.stringify(obj1);
// console.log(storeAsString);                         //This is String
// let newString = JSON.parse(storeAsString);
// console.log(newString);                             //This is object

//JSON
// let jsonObject = `{"Fname":"Bhaumik","lname":"Panchal"}`;
// let store = JSON.parse(jsonObject);
// console.log(store);

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     let a = 10;
// }
// console.log(i);              //We cnanot access i here , if we remove let or add var keyword from loop than the i is print
// console.log(a);              //We cannot access a here

// let a= "hello world";
// let abc = a.replace("world"," ");
// console.log(abc);
// console.log(a);


//First
// let obj1 = {
//     a: 10,
//     b: 30
// }
// let obj2 = Object.assign({ a: 20 }, obj1);
// obj2.a = 30;
// console.log(obj2);
// console.log(obj1);
// obj1.a = 30;
// console.log(obj2);
// console.log(obj1);

//Second
// let obj1 = {
//     a: 10,
//     b: 20
// }
// let obj2 = {
//     a: 20,
// }
// let obj3 = Object.assign(obj1, obj2);
// obj1.a = 30;
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// obj2.a = 30;
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// obj3.a = 30;
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// const obj3 = { a: 0, b: { c: 0 } };
// const obj4 = structuredClone(obj3);
// obj3.a = 4;
// obj3.b.c = 4;
// console.log(obj4);



// console.log(20 < 10 == 0);  //true
// console.log(20 > 10 > 0);   //true
// console.log(20 > 10 > 5);   //false       //first check the condition 20 is greater than 10 and it return's true than the second condition is check true is greater than 5 or not but true value is 1 and 1 is less than 5 so  it return false.


// let f_name = "Bhaumik Patel";
// function surname(value) {
//     return value;
// }
// console.log(f_name.replace("Patel", surname("Panchal")));

// let f_name = "Bhaumik Patel";
// function surname(value) {
//     return value;
// }
// console.log(f_name.slice(0, surname(7)));