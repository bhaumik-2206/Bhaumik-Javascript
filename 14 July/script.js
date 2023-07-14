// // Create in the DOM
// let p = document.createElement('p');
// let div = document.createElement('div');
// // Adding Elements to the DOM
// let text1= document.createTextNode("This is P Tag added with JS.");
// let text2 = document.createTextNode("This is Div Tag added with JS.");
// p.textContent = "This is P Tag added with JS.";
// div.textContent = "This is div Tag added with JS.";
// document.body.append(p);
// document.body.appendChild(div,p);


// Get innerHTML of full ul tag with the help of innerHTML
// let menu = document.getElementById('navList');
// console.log(menu.innerHTML);

// Print ul tag with the help of pre tag and create ul in JS
// let menu = document.getElementById('navList');
// let pre = document.createElement('pre');
// pre.textContent = menu.innerHTML;
// document.body.append(pre);

// let newElement = document.getElementById('parentElement');
// let h1 = document.createElement('h1');
// h1.textContent = 'My First JavaScript Project';
// newElement.insertBefore(h1, newElement.firstChild);


// let setAtt = document.getElementById('setAtt');
// setAtt.setAttribute("class","newClass");
// console.log(setAtt);        // Here the class is adding

// let navActive = document.getElementById("navList");
// console.log(navActive.className);
// console.log(navActive.classList);
// console.log(navActive.classList[0]);
// console.log(navActive.classList[1]);

// Remove Element From HTML
// let remove = document.getElementById('remove');
// remove.remove();

// let prints = document.querySelector('div');
// console.log(prints.innerText);
// console.log(prints.textContent);

// let hello = document.getElementById('remove');
// console.log(hello.innerText);
// console.log(hello.textContent);

// let newb = document.createElement('div');
// newb.innerHTML = "<b> Hello World </b>";
// document.body.append(newb);

// let newb = document.createElement('b');
// newb.innerHTML = "Hello World";
// document.body.append(newb);

// let newb = document.createElement('div');
// newb.innerText = "<b> Hello World </b>";         // Not Working
// newb.textContent = "<b> Hello World </b>";       // Not Working
// document.body.append(newb);

// let btn = document.getElementById('button');
// btn.addEventListener("click", function () {
//     btn.innerHTML = "Hello World";
//     btn.style.color = "white";
//     btn.style.backgroundColor = "black";
//     btn.style.padding = "10px 20px";
// });
// btn.addEventListener("mouseout", function () {
//     btn.innerHTML = "Click Me!!";
//     btn.style.color = "black";
//     btn.style.backgroundColor = "white";
// });

// Random color on hove and stop color after click on remove element button
// document.addEventListener("mousemove", randomBgColor);
// function stopEvent() {
//     document.removeEventListener("mousemove", randomBgColor);
// }
// function randomBgColor() {
//     let red = Math.ceil(Math.random() * 256);
//     let green = Math.ceil(Math.random() * 256);
//     let blue = Math.ceil(Math.random() * 256);
//     let backgroungColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//     document.body.style.background = backgroungColor;
// }

// let enterName = document.getElementById('name');
// function print() {
//     document.addEventListener("onclick", function () {
//         document.getElementById("print").innerHTML = enterName.ariaValueMax;
//     })
// }



// let date = new Date();
// let dateFormatObject = {
//     year: "numeric",        // 2-digit , numeric
//     weekday: "long",        // short , narrow , long
//     month: "long",          // short , narrow , long , numeric , 2-digit
//     day: "numeric",         // 2-digit , numeric
//     hour: "numeric",        // 2-digit , numeric
//     minute: "numeric",      // 2-digit , numeric
//     second: "numeric",      // 2-digit , numeric
// }
// console.log(date.toLocaleString("en-US"));
// console.log(date.toLocaleString("en-US", dateFormatObject));

// function moment(format) {
//     let dateUpperCase = format.toUpperCase();
//     let date = new Date();
//     return dateUpperCase.replaceAll("YYYY",date.getFullYear()).replace("MM",date.getMonth()).replace("DD",date.getDate());
// }
// console.log(moment("yyyy/MM/DD"));
// console.log(moment("YYYY-MM-DD"));


// let arr = [1, 2, 3];
// let arr2 = [100, 2, 3, 4, 10];
// arr2.forEach(value => {
//     if (!arr.includes(value)) {
//         arr.push(value);
//     }
// })
// console.log(arr);
// let a = arr.sort((a, b) => a- b);
// console.log(a);

// function fun(string) {
//     let a = string.split('');
//     let b = [];
//     a.forEach(value => {
//         if (value <= 9 || value >= 0) {
//             b.push(Number(value));
//         }
//     });
//     return b;
// }
// console.log(fun('ab34bb43b'));

// let obj = { name: "hello" };
// function abc(obj, st) {
//     return obj.st;
// }
// console.log(abc(obj, 'name'));


// let arr1 = [
//     {
//         id: 1,
//         slot: [
//             { dosage: "g" },
//             { dosage: "hello" },
//         ]
//     },
//     {
//         id: 2,
//         slot: [
//             { dosage: "a" },
//             { dosage: "b" },
//         ]
//     },
// ]
// function abcd(arr) {
//     return  arr.every(value => {
//         if (value.slot.every(value => {
//             let a = value.dosage.trim();
//             return a.length > 0;
//         })) {
//             return true;
//         }
//     })
//     // return b.every(i => i === true);
// }
// console.log(abcd(arr1));

