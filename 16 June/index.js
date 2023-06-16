// const a = null;
// console.log(typeof a);

// let name = {
//     f:"b",
//     s:"v"
// }
// console.log(typeof name);

// {
//     let number = 40;
//     {
//         let number = 20;
//         console.log(number)
//     }
//     console.log(number)
// }

// let fullName = {
//     fname:"Bhaumik",
//     mname:"J",
//     lname:"panchal",
//     address : {
//         adder:"chandlodia"
//     }
// }
// console.log(fullName);


// let fullName = {
//     fname:"Bhaumik",
//     mname:"J",
//     lname:"panchal",
//     address : {
//         adder:"chandlodia"
//     }
// }
// console.log(fullName.address);

// let fullName = {
//     fname:"Bhaumik",
//     mname:"J",
//     lname:"panchal",
//     address : {
//         adder:"chandlodia"
//     }
// }

// console.log(fullName.address.adder);

// let city = ["chandlodia","katch","surat","bhuj"];
// console.log(city[city.length-1]);

// let fullName = {
//     fname:"Bhaumik",
//     mname:"J",
//     lname:"panchal",
//     address : ["chandlodia","ahmedabad","surat","bhuj"]
// }

// console.log(fullName.address[3]);



// let mydata = {
//     f_name: "Bhaumik",
//     l_name: "Panchal",
//     education: [
//         _10th = {
//             school: "DBMS",
//             result: "pass"
//         },
//         _12th = {
//             school: "Vijaynagar",
//             result: "pass"
//         },
//         college = {
//             clg: "Silver Oak University",
//             result: "running",
//             semester: {
//                 first_sem: {
//                     subject: ["DBMS", "MSP",
//                         wd = {
//                             language: ["HTML",
//                                 css = {
//                                     type :{
//                                         inline : "In tag",
//                                         internal : "<style> tag",
//                                         external : ["file save with .css"]  
//                                     }
//                                 }

//                             ]
//                         }
//                         , "CS", "LDP"]
//                 },
//                 second_sem: {
//                     subject: ["RDBMS",
//                         oopad = { language: "c++" },
//                         "SMOP"]
//                 }
//             }
//         }
//     ]
// }
// console.log(mydata);
// console.log(mydata.f_name);
// console.log(mydata.l_name);
// console.log(mydata.education);
// console.log(mydata.education[0]);
// console.log(mydata.education[2].clg);
// console.log(mydata.education[2].semester.first_sem);
// console.log(mydata.education[2].semester.first_sem.subject[2]);
// console.log(mydata.education[2].semester.first_sem.subject[2].language);
// console.log(mydata.education[2].semester.first_sem.subject[2].language[1].type);
// console.log(mydata.education[2].semester.first_sem.subject[2].language[1].type.external);
// console.log(mydata.education[2].semester.first_sem.subject[2].language[1].type.external[0]);
// console.log(mydata.education[2].semester.second_sem);
// console.log(mydata.education[2].semester.second_sem.subject);
// console.log(mydata.education[2].semester.second_sem.subject[1]);
// console.log(mydata.education[2].semester.second_sem.subject[1].language);

// console.log(mydata.f_name + " " + mydata.education[2].semester.first_sem.subject[2].language[0].topic.size[3]);




// let arr =["bhaumik" , vansh={fname:"Vansh"} ];
// console.log(arr[1]);
// console.log(arr[1].fname);

// let myname = {
//     firstname :"Bhaumik" 
// }

// console.log(myname.firstname);



// let username1 = "bhaumik";          //Pass By Value
// let username2 = username1;
// username2 = "vansh";
// console.log(username1);
// console.log(username2);



// let username1 = {                    //Pass By Reference
//     name: "Bhaumik", 
//     password : "bhaumik@#$"
// }

// let username2 = username1;

// username2.name = "Vansh";
// username2.password = "Vansh@#$";
// console.log(username1);
// console.log(username2);

// let a = 10;
// {
//     let a = 20;
//     {
//         let a = 30;
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);

// let a = 10;
// {
//     let a = 20;
//     {
//         let a = 30;
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);

// if(true){
//     var a=10;
// }
// console.log(a);


// let arr1 = [1, 2, arr2 = [10, 20, third=[100,200,300]]];
// console.log(arr1[2][2][2]);

// if (true) {
//     let a = 200;
// }
// if(true) {
//     console.log(a);
// }

