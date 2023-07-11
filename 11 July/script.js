// let obj1 = { a: 10, b: 20 };
// let obj2 = { a: 20, b: { c: 20 }, c: 40 };
// let obj3 = { a: { b: 30 }, c: { b: 50, d: 60 } };
// let obj4 = Object.assign({}, obj1, obj2, obj3);
// obj4.b = 100
// obj4.b.c = 00;
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);

// let a = 20;
// console.log(typeof a.toString());

// console.log("Bhaumik".slice(1, 4));
// console.log("Bhaumik".substring(-1, 4));

// console.log("Bhaumik".search("ik"));

// console.log("JS ".repeat(6));

// console.log("123".padStart(5, "P"));
// console.log("123".padEnd(5, "P"));

// console.log("Hello , This is a JS".matchAll("This"));
// console.log("Hello , This is a JS".match("This"));

// console.log("Bhaumik".indexOf("h"));

// console.log("object".charAt(3));
// console.log("object".at(-3));

// var x = 1;
// function a() {
//     console.log(x);
//     var x = 2;
// }
// console.log(a());

// var x = 1;
// {
//     console.log(x);
//     var x = 2;
// }

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1.map(value => {value});
// console.log(arr1);
// console.log(arr2);

// let obj = { fname: "raj", age: 20 };
// let { fname, age: year } = obj;
// console.log(fname);
// console.log(age);
// console.log(year);

// let a = 5;
// console.log(++a + ++a + --a + a++);
// console.log(a);

// let abc = 12 + 14 + ("12" + 4) * 10;
// console.log(abc);
// console.log(typeof abc);

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce(arr => arr) && 45;
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.push(4));
// console.log(arr.push(3) + arr.pop());
// console.log(arr.length);

// let string = "  Hello  ";
// string.trimStart();
// string.trimEnd();
// console.log(string);

// let string = "  apple, banana, kiwi  ";
// string.slice(-12, -6) || string.padStart(2, '00');
// string.trim();
// console.log(string);









// let date = new Date(2020,1,1);
// date.setDate(100);
// date.setDate(-100);
// console.log(date);

// Date :---------
// 2. Write a JavaScript function to get the current date.
// function curday(dash) {
//     let date = new Date();
//     return date.getDate() + dash + date.getMonth() + dash + date.getFullYear();
// }
// console.log(curday('/'));
// console.log(curday('-'));

// 3. Write a JavaScript function to get the number of days in a month.
// function getDaysInMonth(month, year) {
//     let date = new Date(year, month, 0);
//     return date.getDate();
// }
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));

// 4. Write a JavaScript function to get the month name from a particular date.
// month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// function month_name(date) {
//     return new Date(date).getMonth();
// }
// console.log(month[month_name(new Date("10/11/2009"))]);
// console.log(month[month_name(new Date("11/13/2014"))]);

// 5. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).
// function compare_dates(date1, date2) {
//     if (date1 > date2) return "Date1 > Date2";
//     else if (date1 < date2) return "Date1 < Date2";
//     else return "Date1 = Date2";
// }
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
// console.log(compare_dates(new Date('11/12/2012 00:00'), new Date('11/14/2013 00:03')))

// 7. Write a JavaScript function to test whether a date is a weekend.
// function is_weekend(date) {
//     let newdate = new Date(date);
//     if (newdate.getDay() === 6 || newdate.getDay() === 0) {
//         return "Enjoy Your Weekend";
//     } else {
//         return "Working Days";
//     }
// }
// console.log(is_weekend('july 8, 2023'));
// console.log(is_weekend('july 9, 2023'));
// console.log(is_weekend('july 10, 2023'));

// 8. Write a JavaScript function to get the difference between two dates in days.
// function date_diff_indays(date1, date2) {
//     let d1 = new Date(date1);
//     let d2 = new Date(date2);
//     let result = d2.getTime() - d1.getTime();
//     return Math.ceil(result / (1000 * 60 * 60 * 24))
// }
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));

// 9. Write a JavaScript function to get the last day of a month.
// function lastday(year, month) {
//     return new Date(year, month+1,0).getDate();
// }
// console.log(lastday(2014, 0));
// console.log(lastday(2014, 1));
// console.log(lastday(2014, 11));

// 10a. Write a JavaScript function to calculate 'yesterday's day.
// function yesterday(date) {
//     let yes = new Date(date);
//     let b = new Date(yes.setDate(yes.getDate() - 1));
//     return b;
// }
// console.log(yesterday('Nov 15, 2014'));
// console.log(yesterday('Nov 16, 2015'));
// console.log(yesterday('Nov 17, 2016'));

// 10b. Write a JavaScript function to calculate 'Tomorrow's day.
// function tomorrow(date) {
//     let yes = new Date(date);
//     let b = new Date(yes.setDate(yes.getDate() + 1));
//     return b;
// }
// console.log(tomorrow('Nov 15, 2014'));
// console.log(tomorrow('Nov 16, 2015'));
// console.log(tomorrow('Nov 17, 2016'));

// 11. Write a JavaScript function to get the maximum date from an array of dates.
// function max_date(dates) {
//     let empty = [];
//     for (let i = 0; i < dates.length; i++) {
//         let curDate = new Date(dates[i]);
//         empty.push(curDate);
//     }
//     let a = empty.reduce((acc, cur) => {
//         if (acc > cur.getFullYear()){
//             return acc;
//         }else{
//             return cur;
//         }
//     },0);
//     return a;
// }
// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));

// 12. Write a JavaScript function to get the minimum date from an array of dates.


// 13. Write a JavaScript function that returns the number of minutes in hours and minutes.
