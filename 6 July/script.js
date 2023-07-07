//---------------Join-------------
// let arr = [15, 0, true, 17, 19];
// console.log(arr.join());-
// console.log(arr.join("-"));
// console.log(arr.join("*"));                      //Return a string
// console.log(arr);

// let arr = [15, 16, undefined, 0, true, , 18, null, 19];       // null and undefinde make empty string
// console.log(arr.join("-"));
// console.log(arr);

// let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr1.join("-"));

// let arr1 = [{ a: 1, b: 2 }, { a: 1, b: 2, a: 1 }, { a: 1, b: 2 }];
// console.log(arr1.join("-"));                 // [object Object]-[object Object]-[object Object]


//--------------Reverse-------
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);                          // mute original array

// let arr = [1, 2, 3, 4, 5];
// let reve = [...arr].reverse();
// console.log(reve);
// console.log(arr);

// let arr = [["Bhaumik","Raj"],"Vansh"];
// arr.reverse();
// console.log(arr);

// let data = [
//     { name: 'Alice', age: 18 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 19 },
//     { name: 'David', age: 21 }
// ]
// data.reverse();
// console.log(data);

//--------------Includes-------             //Retuen a boolean value.
// syntax :- includes(searchElement, fromIndex)
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes('2'));          // false
// console.log(arr.includes(2));            // true
// console.log(arr.includes(3, 3));         //false
// console.log(arr.includes(3,-3));         //true-also give negative index in second parameter


//--------------concat-------
// let arr1 = [1, 2, 3, [4, 5, 6]];
// let arr2 = [7, 8, 9, [10, 11, 12]];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
// console.log(arr1);

// let arr = ["Bhaumik", "Raj", "Vivek"];
// let concatString = arr.concat("Bhavik");
// console.log(concatString);

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];
// function arr_concat(array) {
//     return array;
// }
// console.log(arr1.concat(arr_concat(arr1)));
// console.log(arr1.concat(arr_concat(arr2)));

// let arr = [true, null, undefined];
// console.log(arr.concat(20, [30, 40]));

// let arr = [1, 2, 3, 4, 5];
// let arr3 = arr.concat(6, 7, 8, [9, 10])
// console.log(arr3);


//-------------------at-------------------
// let arr = [1, 2, 3, , true, null, 4, 5];
// let arr2 = arr.at(2);
// console.log(arr2);

// let data = [
//     { name: 'Alice', age: 18 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 19 },
//     { name: 'David', age: 21 }
// ]
// let findAt = data.at(3);
// console.log(findAt);


//-------------------fill-------------------
// syntax: - fill(value, start, end)
// let arr = [1, 2, 3, 4];
// console.log(arr.fill(0, 1, 3));
// console.log(arr.fill(5, 1));
// console.log(arr.fill(6));
// console.log(arr);                           // This Method is mute original array.
// let arr = ["B", "V", "S", "P", "J"];
// console.log(arr.fill("a"));
// console.log(arr.fill("a", 1));
// console.log(arr.fill("a", 1, 3));
// console.log(Array(6).fill(22));
// let arr = ["B", "V", "S", "P", "J"];
// console.log(arr.fill('a',-3,-1));            //[ 'B', 'V', 'a', 'a', 'J' ]
// console.log(arr.fill('a', -4, -5));          //[ 'B', 'V', 'S', 'P', 'J' ]


//-------------------Some-------------------
// let arr = [100, 2, 3, 4, 5];
// console.log(arr.at());

// let arr = [1, 2, 3, 4, 5, 3];
// console.log(arr.slice(1,4));
// let a = arr.find(a => a == 3);
// console.log(a);


// let arr = [1, [2, 3, 4, 5]];
// console.log(arr.flat());
// console.log(arr);

// const employees = [
//     {
//         id: 1,
//         name: 'Raj Bundela',
//         department: 'Marketing',
//         salary: 50000,
//         active: true,
//     },
//     {
//         id: 2,
//         name: 'Bhaumik Panchal',
//         department: 'Sales',
//         salary: 60000,
//         active: true,
//     },
//     {
//         id: 3,
//         name: 'Vivek Panchal',
//         department: 'Finance',
//         salary: 70000,
//         active: false,
//     },
//     {
//         id: 4,
//         name: 'Pinki Panchal',
//         department: 'HR',
//         salary: 55000,
//         active: true,
//     },
// ];

// Example 1: Filter active employees and sort by salary
// function activeSortSalary(arr) {
//     let filterActiveEmployee = arr.filter(value => value.active === true).sort((a, b) => a.salary - b.salary);
//     return filterActiveEmployee
// }
// console.log(activeSortSalary(employees));


// Example 2: Calculate the total salary of all active employees
// function calculateActiveSalary(arr) {
//     let CalculateSalary = arr.filter(value => value.active === true).reduce((acc, cur) => acc + cur.salary, 0);
//     return CalculateSalary;
// }
// console.log(calculateActiveSalary(employees));


// Example 3: Map the names of all employees and convert them to uppercase
// function nameUpperCase(arr) {
//     let nameUppercase = arr.map();
// }





// let a = ["JS", "CSS", "JQuery"];
// let b = a.join('","');
// console.log('"' + b + '"');
// let result = a.reduce((accu, curr) => {
//     return accu + '","' + curr;
// })
// result = '"' + result + '"';
// console.log(result);

// let a = ["JS", "CSS", "JQuery"];
// let result = a.join();
// let res = '"' + result + '"';
// console.log(res);

// const a = ["JS","CSS","JQUERY"];
// console.log(`"${a.join()}"`);



// const a = ["JS", "CSS", "JQUERY"];
// const d = {
//     name: "JS",
//     label: a.find(e => e.id === "JS").label
// }
// console.log(d);


// // Input :- Hello World -  output :- olleH dlroW
// function reverseWord(pass_string) {
//     let splitWord = pass_string.split(" ");
//     let newArray = [];
//     for (const value of splitWord) {
//         let splitLetter = value.split("").reverse().join("");
//         newArray.push(splitLetter);
//     }
//     return newArray.join(" ");
// }
// console.log(reverseWord("Hello World"));




// ------------------sum of Integers-------------
// function returnSumInteger(array, sum) {
//     let a = array.map((value, index, arr) => {
//         let b = [];
//         let h = value;
//         for (let i = 0; i < array.length; i++) {
//             if (h + array[i] === sum) {
//                 b.push(h, array[i]);
//             }
//         }
//         return b;
//     });
//     return a;
// }
// console.log(returnSumInteger([1, 2, 3, 4, 5], 8));

// function returnSumInteger(array, sum) {
//     let a = array.reduce((acc, cur, index, arr) => {
//         for (let i = 0; i < array.length; i++) {
//             if (cur + array[i] === sum) {
//                 acc.push([cur, array[i]]);
//             }
//         }
//         return acc;
//     }, []);
//     return a;
// }
// console.log(returnSumInteger([1, 2, 3, 4, 5], 7));






// 1:- at
// 2:- concat
// 3:- every
// 4:- filter
// 5:- find
// 6:- findIndex
// 7:- findLast
// 8:- findLastIndex
// 9:- flat
// 10:- forEach
// 11:- includes
// 12:- indexOf
// 13:- isArray
// 14:- join
// 15:- lastIndexOf
// 16:- map
// 17:- pop
// 18:- push
// 19:- reduce
// 20:- reverse
// 21:- shift
// 22:- slice
// 23:- some
// 24:- sort
// 25:- splice
// 26:- fill
// 27:- unshift