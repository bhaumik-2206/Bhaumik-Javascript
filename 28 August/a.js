// 1 :-
// import importGrettings from "./b.js";
// console.log(importGrettings);

// 2 :-
// import mul2 from "./b.js";
// console.log(mul2.sort((a, b) => a - b));

// 3 :-
// import userArray from "./c.js";
// import product, { findAnyProductOrUser } from "./b.js";
// // console.log(product);
// console.log(findAnyProductOrUser(product, 1));
// console.log(findAnyProductOrUser(userArray, 2));

// 4 :-
// import booksName from "./c.js";
// import { findAuthorName } from "./b.js";
// let books = booksName.map(ele => ele.name).join(" , ");
// // console.log(booksName);
// console.log(findAuthorName(booksName, prompt(`Please Enter Book Name from
// ${books}`)));

// // import is hoisted (Hoisting)
// console.log(variable);
// import variable from "./b.js";

// import { three, two, one } from "./b.js";
// console.log(one());
// console.log(two());
// console.log(three());

// 5 :-
import options from "./c.js";
import { checkValue } from "./b.js";

options.forEach(ele => {
    document.getElementById('myul').innerHTML += `<li>${ele.name}</li>`;
});
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let value = e.target.searchName.value;
    let index = checkValue(options, value);
    if (index != -1) {
        document.getElementById('price').innerText = options[index].price;
    } else {
        document.getElementById('price').innerText = `${value} Is Not Define`;
    }
});



// => We can easily reuse this code