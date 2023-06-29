//1
// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);               //source property is copy in target attribute
// console.log(target);                         //{ b: 2, a: 1 }

//2
// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };                    //Here , obj1 is not pass the reference to obj3 so , obj3.c is print undefined because the c is not defined in 
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);         //23 23 undefined

//3
// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);      //In this Example , obj1 and obj3 have the same reference but obj2 has different reference so if we change the value in obj2 than not change in obj3 or obj1.
// obj2.a = 22;
// console.log(obj1, obj2, obj3);               //{ a: 44, b: 45 } { a: 22, b: 45 } { a: 44, b: 45 }

//4
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);      //Here , obj1 and obj3 hav same reference so if we change in anyone change value in both object
// obj1.a = 22;
// console.log(obj3);                           //{ a: 22, b: 34 }

//5
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);  //Here the empty object{} and obj3 have the same reference so if we change in obj1 than they can not affect on obj3. they have different reference
// obj1.a = 22;
// console.log(obj3);                           //{ a: 90, b: 34 }

//6
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);               //Here the source is copping to target which is empty object
// console.log(target);                         //{ a: { b: 1 } }

//7
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;                              //If we use the JSON parse and stringyfy than we can not change the property in nested object 
// console.log(target);                         //{ a: { b: 1 } }

//8
// const source = { a: 1 };
// const target = Object.assign({}, source);    //Here we delete the target's key which is a but target and source have same reference so source do not have change anything
// delete target.a;
// console.log(source);                         //{ a: 1 }


//9
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);        //result and source have different reference
// console.log(result === source);              //false

//10
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);        //can not compare object with another object , It will return true when the reference is also same.
// console.log(result === { a: 1, b: 2 });      //false

//11
// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);               //Here , target and source have a different reference.
// target.b = 234;
// console.log(source);                         //{ b: 2 }

//12
// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;                                //result and source have different references.
// console.log(result);                         //{ a: 1 }

//13
// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);    //Here , source and result have different referencee but In nested object If we change in another object the nested object change his value.
// result.a.b = 2;
// console.log(source);                         //{ a: { b: 2 } }

//14
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);    //Here key a change the value object to array.
// console.log(result);                         //{ a: [ 2, 3, 4 ] }

//15
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);    //Here we change the value array at 2nd index in same reference than that change in result also
// target.a[2] = 90;
// console.log(result);                         //{ a: [ 2, 3, 90 ] }

//16
// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);    //Here , the target's a is change to source a and than if we change the property in result change in all object because value is change in nested object
// result.a.b.d = 3;
// console.log(target);                         //{ a: { b: { d: 3 } } }
// console.log(result);                         //{ a: { b: { d: 3 } } }
// console.log(source);                         //{ a: { b: { d: 3 } } }

//17-Write a JavaScript program to list the properties of a JavaScript object.
// var student = {
//     name: "David Rayy",                      //We access the all property wth entries 
//     sclass: "VI",
//     rollno: 12
// };
// console.log(Object.entries(student));        //[ [ 'name', 'David Rayy' ], [ 'sclass', 'VI' ], [ 'rollno', 12 ] ]
// console.log(student);
// console.log(Object.keys(student));           //[ 'name', 'sclass', 'rollno' ]
// for (const key in student) {
//     console.log(key);                        //name sclass rollno
// }
// console.log(Object.values(student));         //[ 'David Rayy', 'VI', 12 ]
// for (const value in student) {
//     console.log(student[value]);             //David Ray VI 12
// }

// 18 - Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// console.log(student);                        //{ name: 'David Rayy', sclass: 'VI', rollno: 12 }
// delete student.rollno;                       //Here , we delete the rollno 
// console.log(student);                        //{ name: 'David Rayy', sclass: 'VI' }

// 19
// function operationObj(obj) {
//     obj = { ...obj, c: 12 }
// }
// let a = { x: 34, y: 56 }
// operationObj(a);
// console.log(a);                              //{ x: 34, y: 56 }

//20
// function operationObj(obj) {
//     obj.z = { ...obj, c: 12 }
// }
// let a = {
//     x: 34,
//     y: 56
// }
// operationObj(a);
// console.log(a);                              //{ x: 34, y: 56, z: { x: 34, y: 56, c: 12 } }


