// function average(...args) {
//     console.log(args);
//     var avg =
//         args.reduce(function (a, b) {
//             return a + b;
//         }, 0) / args.length;
//     return avg;
// }
// console.log("average of numbers is : " + average(1, 2, 3, 4, 5));
// console.log("average of numbers is : " + average(1, 2, 3));


// function sum(...para) {
//     return para.reduce((total, current) => total + current, 0);
// }
// function avg(...para) {
//     let totalSum = sum(...para);
//     return totalSum / para.length;
// }
// let ans = avg(10,20,30,40,50);
// console.log(ans);

// console.log(average(1, 2, 3, 4, 5));


// function concatenate(separator, ...strings) {
//     return strings.join(separator);
// }

// console.log(concatenate('-', 'a', 'b', 'c'));

// const a = { b: 10 };
// const arr = [a];
// console.log(arr[0]);
// a.b = 5;
// console.log(arr[0]);



// string method

// let text = "Bhaumik";
// console.log(text.charAt(1));                                 //get character at ()th index - index start with 0
// console.log(text.charCodeAt(0));                             //get unicode of index()
// let text1=" Panchal";console.log(text.concat(text1));        //used to concat string
// console.log(text.endsWith("ik"));                            //if string end with than return tuue else false   