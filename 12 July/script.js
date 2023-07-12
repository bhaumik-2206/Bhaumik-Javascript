// let date = new Date('1971');
// let date = new Date(1971);
// console.log(date);
// console.log(date.getTime());
// let firstDate = new Date('1/1/1974 00:00:00');
// console.log(firstDate);
// console.log(firstDate.getTime());
// console.log(365 * 1000 * 60 * 60 * 24 * 4);
// console.log(126210600000 - 126144000000);

// function diff_date(date1, date2) {
//     let d1 = new Date(date1);
//     let d2 = new Date(date2);
//     return ((d1.getTime() - d2.getTime()) / (1000 *60 * 60 *  24));
// }
// console.log(diff_date("6/22/2020", "6/22/2021"));

// let date = Date();
// console.log(typeof date);
// console.log(date);
// console.log((new Date()));

// let date = new Date();
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log((date.getTime()) / (1000 * 60 * 60 * 24 * 365));

// function curday(dash) {
//     let date = new Date();
//     return date.getDate() + dash + date.getMonth() + dash + date.getFullYear();
// }
// console.log(curday('/'));
// console.log(curday('-'));



// *************Number*******************
// parseInt() parseFloat() :- 
// let a = 10.25;
// console.log(Number.parseFloat(a));
// console.log(Number.parseInt(a));
// console.log(10.78854.toFixed(2));

// let arr = [10, 20, 30, 40, 50];
// let arr2 = Object.assign([], arr);
// console.log(arr2);

// toFixed() :-
// let x = 10.25871986327436543682436;
// console.log(x.toFixed(3));

// let a = Infinity;
// let a = 10.5485256325625;
// console.log(Number.parseFloat(a));
// console.log(typeof a);
// console.log(Number.isFinite(a));
// console.log(typeof a.toFixed(5));
// console.log(a.toFixed(5));
// console.log(a.toPrecision(2));
// console.log(typeof a.toPrecision(2));

// let a = null;
// let b = undefined;
// let c = "";
// console.log(Number(a));
// console.log(Number(b));
// console.log(Number(c));
// console.log(Number.parseInt(a));
// console.log(Number.parseInt(b));
// console.log(Number.parseInt(c));
// console.log(Number.parseFloat(a));
// console.log(Number.parseFloat(b));
// console.log(Number.parseFloat(c));

// console.log(Number.isFinite(0));         // true
// console.log(Number.isFinite(NaN));       // false
// console.log(Number.isFinite(Infinity));  //false
// console.log(Number.isFinite(""));        // false
// console.log(Number.isFinite(undefined)); // false

// console.log(Number.parseFloat === parseFloat);

// let num1 = "10.23456";
// console.log(Number.parseFloat(num1));        //If we pass a string in number like (10.23brc) , It can return 10.23 and if we pass full string than it return NaN.
// console.log(Number(num1));                   //If we pass a string in number like (10.23cjdn) , It can not convert into numbers (return NaN)
// console.log(Number.parseInt(num1));

// console.log(Number.parseInt('56.52bhcvih'));    //return 56
// console.log(Number.parseInt('5f.cyfv'));        //return 5
// console.log(Number.parseInt('10.23564', 3));

// console.log(125478.25.toExponential(3));
// console.log(1.25.toExponential(3));

// console.log(10.46.toLocaleString());
// console.log(typeof 10.46.toLocaleString());
// console.log('10.46'.toLocaleString());
// console.log(typeof '10.46'.toLocaleString());
// console.log(124578.153.toLocaleString("de-DE"));
// console.log(124578.153.toLocaleString("zh-Hans-CN-u-nu-hanidec"));

// console.log(10.124578.toPrecision(4));

// console.log(Number("123dhf"));
// console.log(Number.parseFloat("123dhf"));
// console.log(Number.parseInt("123dhf"));