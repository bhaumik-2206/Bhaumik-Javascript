let userData = [
    {
        full_name: {
            f_name: "Raj",
            l_name: "Bundela"
        },
        age: 19,
        address: "Gujarat College",
        schoolName: {
            ssc: {
                school_name: "Vidhya Nagar School",
                marks: 80
            },
            hsc: {
                school_name: "DBMS",
                marks: 76
            }
        },
        college: {
            collegeName: "Navgujarat",
            course: "BCA",
            fees: {
                sem: 1500,
                per_year: 3000
            },
            subject: [
                {
                    first_sem: ["html", "css", "c"],
                    second_sem: ["c++", "javascript"]
                }
            ],
        },
        social_media: {
            instagram: {
                id: ["raj_bundela_2003", "raaaajjjj.17"],
                followers: 499
            },
            whatsapp: 9876543210,
            facebook: null,
            snapchat: "raj_bundela"
        },
        Hobbies: ["cricket", "singing", "writing", "Badmintoon"]
    },
    {
        full_name: {
            f_name: "Bhaumik",
            l_name: "Panchal"
        },
        age: 18,
        address: "Vandematarem",
        schoolName: {
            ssc: {
                school_name: "DBMS",
                marks: 70
            },
            hsc: {
                school_name: "Vijay Nagar School",
                marks: 71
            }
        },
        college: {
            collegeName: "SOU",
            course: "BCA",
            fees: {
                sem: 20000,
                per_year: 40000
            },
            subject: [
                {
                    first_sem: ["html", "ldp", "mcp"],
                    second_sem: ["c++", "javascripr", "dbms"]
                }
            ],
        },
        social_media: {
            instagram: {
                id: ["bhaumik_2206", "__________bhaumik__________"],
                followers: 621
            },
            whatsapp: 9429613731,
            facebook: null,
            snapchat: "bhaumik_220605",
            skype: "Bhaumik Panchal"
        },
        Hobbies: ["cricket", "Songs", "Reading", "Badmintoon"]
    },
    {
        full_name: {
            f_name: "Vansh",
            l_name: "Panchal"
        },
        age: 16,
        address: "Ranip",
        schoolName: {
            ssc: {
                school_name: "hiramani",
                marks: 60
            },
            hsc: {
                school_name: "hiramani",
                marks: 65
            }
        },
        college: {
            collegeName: "SOU",
            course: "B.Tech",
            fees: {
                sem: 31500,
                per_year: 63000
            },
            subject: [
                {
                    first_sem: ["c++", "ldp", "dbms"],
                    second_sem: ["html", "ds", "rdbms"]
                }
            ],
        },
        social_media: {
            instagram: {
                id: ["vansh__who"],
                followers: 346
            },
            whatsapp: 96385207410,
            facebook: "vansh panchal",
            snapchat: "who__vansh",
            skype: "vansh panchal"
        },
        Hobbies: ["Football", "singing", "writing", "Badmintoon"]
    },
    {
        full_name: {
            f_name: "Vivek",
            l_name: "Panchal"
        },
        age: 16,
        address: "Chandlodia",
        schoolName: {
            ssc: {
                school_name: "Shakti School",
                marks: 60
            },
            hsc: {
                school_name: "Shakti School",
                marks: 81
            }
        },
        college: {
            collegeName: "C.U. Shah",
            course: "B.com",
            fees: {
                sem: 1000,
                per_year: 1800
            },
            subject: [
                {
                    first_sem: ["Account", "english", "eco"],
                    second_sem: ["ba", "stat", "hindi"]
                }
            ],
        },
        social_media: {
            instagram: {
                id: ["vivek_panchal_2005"],
                followers: 284
            },
            whatsapp: 9517538462,
            facebook: "vivek panchal",
            snapchat: "_vivek_1104"
        },
        Hobbies: ["cricket", "singing", "Dancing", "Explore New Thing"]
    },
]

// console.log(userData.filter(value => value.schoolName.ssc.marks == 80));

// who is like to play cricket and studing BCA
// function cricketBCA(arr) {
//     let a = arr.filter(value => value.college.course == "BCA" && value.Hobbies.filter(value=>value = "cricket"));
//     return a;
// }
// let ItCricketer = cricketBCA(userData);
// console.log(ItCricketer);

// Return who like to play cricket
// function cricketHobbies(arr) {
//     let a = arr.filter(value => value.Hobbies.filter(value => value=="cricket").length);
//     return a;
// }
// let cricketer = cricketHobbies(userData);
// console.log(cricketer);

// Return user data if his instagram follower is more than 400
// function followerMorethan500(arr) {
//     let a = arr.filter(value => value.social_media.instagram.followers > 400);
//     return a;
// }
// let followers = followerMorethan500(userData);
// console.log(followers);


// Return if any user use more than one account
// function moreThanOneAcc(arr) {
//     let a = arr.filter(value => value.social_media.instagram.id.length > 1);
//     return a;
// }
// let multipleAccount = moreThanOneAcc(userData);
// console.log(multipleAccount);


// Return user data college fee is more than 40,000
// function privateCollege(arr) {
//     let a = arr.filter(value => value.college.fees.per_year >= 40000)
//     return a;
// }
// let private = privateCollege(userData);
// console.log(private);


// Print skype User Data
// function skypeUser(arr) {
//     let a = arr.filter(value => value.social_media.skype);
//     return a;
// }
// let skypeUserData = skypeUser(userData);
// console.log(skypeUserData);


//print who use facebook
// function useFacebook(arr) {
//     let a = arr.filter(value => {
//         if(value.social_media.facebook != null){
//             return value;
//         }
//     });
//     return a;
// }
// let facebookused = useFacebook(userData);
// console.log(facebookused);


//Add Email in each user data
// function addEmailInAllData(arr) {
//     let a = arr.filter(value => value.Email = (value.full_name.f_name + "." + value.full_name.l_name + (2023-value.age) + "@gmail.com").toLowerCase());
//     return a;
// }
// let addEmail = addEmailInAllData(userData);
// console.log(addEmail);


// Add full name in each object
// function addFullName(arr) {
//     let a = arr.filter(value => value.full_name.full_name = value.full_name.f_name + " " + value.full_name.l_name);
//     console.log(a);
// }
// let addFullNnameInData = addFullName(userData);
// console.log(addFullNnameInData);


// Get BCA student data
// function bcaStudent(arr) {
//     let a = arr.filter(value => value.college.course == "BCA");
//     console.log(a);
// }
// let returnBcaStudent = bcaStudent(userData);
// console.log(returnBcaStudent);


// Get student data who is studying html in second sem
// function htmlInSecondSem(arr) {
//     let a = arr.filter(value => value.college.subject[0].second_sem.filter(value => value == "html").length);
//     return a;
// }
// let secondSemhtml = htmlInSecondSem(userData);
// console.log(secondSemhtml);

// Get Student which have same school in ssc and hsc
// function sameSchoolInBoth(arr) {
//     let a = arr.filter(value => value.schoolName.ssc.school_name === value.schoolName.hsc.school_name);
//     console.log(a);
// }
// let sameSchoolUser = sameSchoolInBoth(userData);
// console.log(sameSchoolUser);


// Get user data who has studying in DBMS in ssc or hsc
// function dbmsStudent(arr) {
//     let a = arr.filter(value => value.schoolName.ssc.school_name == "DBMS" || value.schoolName.hsc.school_name == "DBMS");
//     return a;
// }
// let printdbmsStudent = dbmsStudent(userData);
// console.log(printdbmsStudent);


// Get Student data who is mature (age > 18)
// function showMatureStudent(arr) {
//     let a = arr.filter(value => value.age >= 18);
//     return a;
// }
// let showMatureStudentData = showMatureStudent(userData);
// console.log(showMatureStudentData);


// Array.map In deep
// Array.prototype.myMap = function (callbackfunction) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(callbackfunction(this[i], i, this));
//     }
//     return temp;
// }
// let arr = [1, 2, 3, 4, 5];
// let a = arr.myMap(value => value * 3);
// console.log(a);


// Array.filter In deep
// Array.prototype.myFilter = function (callbackfunction) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callbackfunction(this[i], i, this)) {
//             temp.push(this[i]);
//         }
//     }
//     return temp;
// }
// let arr = [1, 2, 3, 4, 5];
// let a = arr.myFilter(value => value > 2);
// console.log(a);

// let arr = [
//     { name: "raj", age: 20 },
//     { name: "vansh", age: 19 },
//     { name: "sachin", age: 35 },
//     { name: "rudra", age: 25 },
//     { name: "pujan", age: 68 },
//     { name: "prakhar", age: 10 },
// ]

// let removeLastCharacter = arr.map(value => {
//     if (value.name.length > 5) {
//         value.name = value.name.slice(0, 4);
//         return value;
//     }else{
//         return value;
//     }
// });
// console.log(removeLastCharacter);

// let addIsMature = arr.filter(value => {
//     if (value.age > 18) {
//         value.isMature = true;
//         return value
//     } else {
//         value.isMature = false;
//         return value
//     }
// });
// console.log(addIsMature);

// let agePrintName = arr.filter(value => value.age >= 25).map(value => value.name);
// console.log(agePrintName);

// let a = arr.map(value => value.name.toUpperCase());
// console.log(a);


// Change the number to string
// function stringItUp(arr) {
//     let a = arr.map(value => {
//         if (value == Number(value)) {
//             return String(value);
//         } else {
//             return value;
//         }
//     });
//     return a;
// }
// console.log(stringItUp([2, 5, 100, "bjp"]));             //[ '2', '5', '100', 'bjp' ]


// function capitalizeNames(arr) {
//     let a = arr.map(value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());
//     return a;
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));      // ["John", "Jacob", "Jingleheimer", "Schmidt"]



// let studentData = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// function namesOnly(arr) {
//     let a = arr.map(value => value.name);
//     return a;
// }
// console.log(namesOnly(studentData));                        //['Angelina Jolie','Eric Jones','Paris Hilton','Kayne West','Bob Ziroll']

// function makeStrings(arr) {
//     let a = arr.map(value => {
//         if (value.age >= 18){
//             return value.name + " can go to The Matrix";
//         }else{
//             return value.name + " is under age!!";
//         }
//     });
//     return a;
// }
// console.log(makeStrings(studentData));

// let student = [
//     { name: "Smith", rollNumber: 31, marks: 80 },
//     { name: "Jenny", rollNumber: 15, marks: 69 },
//     { name: "John", rollNumber: 16, marks: 35 },
//     { name: "Tiger", rollNumber: 7, marks: 55 }
// ];

// function getName(arr) {
//     let a = arr.filter(value => value.marks < 80 && value.rollNumber <= 15).map(value=>value.name);
//     return a;
// }
// let getNameStudent = getName(student);
// console.log(getNameStudent);

// function getName(arr) {
//     let a = arr.filter(value => value.marks > 60).map(value => "Student Name is "+ value.name + " and Roll No is: " + value.rollNumber);
//     return a;
// }
// let getNameStudent = getName(student);
// console.log(getNameStudent);

// Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
// let beforeAdding20Marks = student.filter(value => value.marks > 60);
// console.log(beforeAdding20Marks);
// let afterAdding20Marks = student.map(value => {
//     if (value.marks < 60) {
//         value.marks += 20;
//     }
//     return value;
// }).filter(value => value.marks > 60);
// console.log(afterAdding20Marks);

// function returnLength(arr) {
//     let a = arr.map(value => value.length);                                          //return string length
//     return a;
// }
// console.log(returnLength(["bhaumik", "Raj", "Vansh"]));

// function returnLength(arr) {
//     let a = arr.map(value => value.length).map(value => String(value));              //convert string length into string
//     return a;
// }
// console.log(returnLength(["bhaumik", "Raj", "Vansh"]));

// function returnOdd(arr) {
//     let a = arr.filter(value => value % 2 != 0);
//     return a;
// }

// function returnEven(arr) {
//     let a = arr.filter(value => value % 2 == 0);
//     return a;
// }
// console.log(returnOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(returnEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let a = arr.map(value => value);
// console.log(a);

// let b = arr.map((value,index) => value + " " + index);
// console.log(b);

// let c = arr.map(value => {return value});
// console.log(c);

// function callbackfunction(value) {
//     return value
// }
// let d = arr.map(callbackfunction);
// console.log(d);

// let e = arr.map(function abcName(value){
//     return value;
// });
// console.log(e);

// const callbackfunction = (value) => {
//     return value
// }
// let f = arr.map(callbackfunction);
// console.log(f);

// let arr = ['10', '100', 152, 'bhaumik'];
// let convertIntoNumber = arr.map(value => Number(value));
// console.log(convertIntoNumber);z



// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(12,50));

// function isEven(parameter) {
//     if (parameter % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isEven(10));
// console.log(isEven(11));



// let arr = ["first", ["second", ["third", { four: "forth" }]]];
// let a = arr.filter(value => value.four == "forth");
// console.log(a);



