// function addEvent() {
//     let para = document.getElementById('addPaddingLeft');
//     let cur = parseInt(getComputedStyle(para).paddingLeft, 10);
//     let newPadding = cur + 10;
//     para.style.paddingLeft = newPadding + "px";
// }
// setInterval(addEvent, 1000);

// const intervalID = setInterval(myCallback, 1000, "Parameter 1", "Parameter 2");
// function myCallback(a, b) {
//     console.log(a);
//     console.log(b);
// }

// let span = document.getElementById('span');
// setInterval(function () {
//     let date = new Date();
//     span.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// }, 1000);

// let paragraph = document.getElementById('para');
// paragraph.addEventListener('click', function (e) {
//     console.log(e);
// });
// document.addEventListener('keyup', function (e) {
//     console.log(e);
// });

// for (let i = 0; i < 100; i++) {
//     console.log(i + " - " + String.fromCharCode(i));
// }


// --------------1--------------
// let lowercase = document.getElementById("lowercase");
// let uppercase = document.getElementById("uppercase");
// let number = document.getElementById("number");
// let special = document.getElementById("special");
// let generate = document.getElementById("generate");
// let inputNumbers = document.getElementById("inputNumbers");
// let printRandom = document.getElementById("printRandom");
// generate.addEventListener('click', function () {
//     let passLength = inputNumbers.value;
//     if (passLength >= 8 && passLength <= 25) {
//         let randomPassword = "";
//         let emptyString = "";
//         if (lowercase.checked) {
//             emptyString += "abcdefghijklmnopqrstuvwxyz";
//         }
//         if (uppercase.checked) {
//             emptyString += "ABCDEFGHIJKLMNOPQRSTUVWXYS";
//         }
//         if (number.checked) {
//             emptyString += "123456789";
//         }
//         if (special.checked) {
//             emptyString += `/?.>,<;:[{]}\|=+-_)(*&^%$#@!`;
//         }
//         console.log(emptyString);
//         for (let i = 0; i < passLength; i++) {
//             randomPassword += emptyString.charAt(Math.round(Math.random() * emptyString.length))
//         }
//         printRandom.innerText = randomPassword;
//     } else {
//         alert("Please Select Number Between 8 to 25");
//     }
// });



// --------------2--------------
function randomLowerCase() {
    let random = Math.ceil(Math.random() * (122 - 97) + 97);
    return String.fromCharCode(random);
}
function randomUpperCase() {
    let random = Math.ceil(Math.random() * (90 - 65) + 65);
    return String.fromCharCode(random);
}
function randomspecialChar() {
    let specialChar = `/?.>,<;:[{]}\|=+-_)(*&^%$#@!`;
    let random = specialChar.charAt(Math.floor(Math.random() * specialChar.length));
    return random;
}
function randomnumber() {
    let random = Math.floor(Math.random() * 10);
    return random;
}
generate.addEventListener('click', function () {
    let passLength = inputNumbers.value;
    if (passLength >= 8 && passLength <= 25) {
        let a = [];
        let passwordIs = "";
        if (uppercase.checked) {
            a.push(randomUpperCase);
        }
        if (lowercase.checked) {
            a.push(randomLowerCase);
        }
        if (number.checked) {
            a.push(randomnumber);
        }
        if (special.checked) {
            a.push(randomspecialChar);
        }
        for (let i = 0; i < passLength; i++) {
            let randomIndex = Math.floor(Math.random() * a.length);
            let ranFunction = a[randomIndex];
            passwordIs += ranFunction();
        }
        printRandom.textContent = passwordIs;
    } else {
        alert("Please Select Number Between 8 to 25");
    }
});


function checkPrime(number) {
    let a = true;
    for (let i = 2; i < number; i++) {
        if ((number % i == 0)) {
            a = false;
        }
    }
    return a;
}
// console.log(checkPrime(1));
let parent = document.getElementById('parent');
for (let i = 1; i <= 100; i++) {
    let newEle = document.createElement('p');
    newEle.style.padding = "10px";
    newEle.style.width = "20px";
    newEle.style.height = "20px";
    newEle.style.textAlign = "center";
    if (i % 2 == 0) {
        newEle.style.backgroundColor = "yellow";
    } else if (checkPrime(i)) {
        newEle.style.backgroundColor = "green";
    } else {
        newEle.style.backgroundColor = "red";
    }
    newEle.innerText = i;
    parent.appendChild(newEle);
}


// Get all attributes of img element
let image = document.getElementById('image');
let attributes = image.getAttributeNames();
for (const key of attributes) {
    let value = image.getAttribute(key);
    console.log(key + " :- " + value);
}


// Adding Table
let forAdd = document.querySelectorAll('.forAdd');
let addItem = document.getElementById('addItem');
let mainTable = document.getElementById('mainTable');
addItem.addEventListener('click', function () {
    let newtr = document.createElement('tr');
    mainTable.appendChild(newtr);
    for (let i = 0; i < forAdd.length; i++) {
        let newtd = document.createElement('td');
        newtd.innerHTML = forAdd[i].value;
        newtr.appendChild(newtd);
        forAdd[i].value = "";
    }
});


// Add Dropdown In Select Menu :-
let addOptions = document.getElementById('addOptions');
let addCountry = document.getElementById('addCountry');
let mySelect = document.getElementById('mySelect');
addOptions.addEventListener('click', function () {
    let newEle = document.createElement('option');
    newEle.innerHTML = addCountry.value;
    mySelect.appendChild(newEle);
    addCountry.value = "";
});


// Count Word text
let string = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYS0123456789~!@#$%^&*()_-+={]|\"':;?/>.<, `;
let textarea = document.getElementById('textarea');
let printword = document.getElementById('printword');
let printText = document.getElementById('printText');
let text = 0;
let word = 0;
textarea.addEventListener('keydown', function (e) {
    if (string.includes(e.key)) {
        printText.innerHTML = "Total Text is :- " + textarea.value.length;
    } else if (e.key == "Backspace") {
        printText.innerHTML = "Total Text is :- " + textarea.value.length;
    }

    if (e.key == " ") {
        printword.innerHTML = "Total Word is :- " + textarea.value.split(" ").length;
    }
});