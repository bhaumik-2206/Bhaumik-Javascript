// // -----------------------Form Events---------------------
// // submit Event
// let form = document.getElementById('form');
// form.addEventListener('submit', function () {
//     window.alert('Form Submitted');
// });

// // change Event
// let input2 = document.getElementById('input2');
// input2.addEventListener('change', function () {
//     a = input2.value;
//     document.getElementById('span2').innerHTML = a;
// });

// // input Event
// let input = document.getElementById('input');
// input.addEventListener('input', function () {
//     a = input.value;
//     document.getElementById('span').innerHTML = a;
// });

// // focus Event
// let fname = document.getElementById('fname');
// let lname = document.getElementById('lname');
// fname.addEventListener('focus', function () {
//     fname.style.backgroundColor = "lightblue";
// });
// lname.addEventListener('focus', function () {
//     lname.style.backgroundColor = "lightblue";
// });

// // blur Event
// fname.addEventListener('blur', function () {
//     fname.style.backgroundColor = "";
// });
// lname.addEventListener('blur', function () {
//     lname.style.backgroundColor = "";
// });


// let body = document.getElementById('body');
// let change = document.getElementById('change');
// change.addEventListener('click', function () {
//     if (body.className == "black") {
//         body.className == "white";
//         console.log('hello');
//     } else {
//         body.className == "black";
//     }
// })
for (let letter = 97; letter <= 122; letter++) {
    console.log(String.fromCharCode(letter));
    if (letter == 100) {
        break;
    }
}