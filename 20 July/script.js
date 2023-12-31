// document.getElementById('mouseOver').addEventListener('mouseover', function () {
//     console.log("Mouse Over");
// });

// document.getElementById('mouseMove').addEventListener('mousemove', function () {
//     console.log("Mouse Move");
// });

// document.getElementById('mouseEnter').addEventListener('mouseup', function () {
//     console.log("Mouse Enter");
// });

// document.addEventListener('keydown', function (e) {
//     if (e.key == 'Enter') {
//         console.log("Hello");
//     }else{
//         console.log("You entered another key ");
//     }
// })


// Difference Between mouseover and mouseenter / mouseout and mouseleave
// document.getElementById('mouseover').addEventListener('mouseover', function () {
//     console.log("Mouse Over");
// });
// document.getElementById('mouseenter').addEventListener('mouseenter', function () {
//     console.log("Mouse Enter");
// });
// document.getElementById('mouseout').addEventListener('mouseout', function () {
//     console.log("Mouse Out");
// });
// document.getElementById('mouseleave').addEventListener('mouseleave', function () {
//     console.log("Mouse Leave");
// });


// function keyDown(a) {
//     console.log('Keydown event:', a.key);
// }
// function KeyUp(a) {
//     console.log('Keyup event:', a.key);
// }
// function KeyPress(a) {
//     console.log('Keypress event:', a.key);
// }
// document.addEventListener('keydown', keyDown);
// document.addEventListener('keyup', KeyUp);
// document.addEventListener('keypress', KeyPress);

// document.addEventListener('keyup', function () {
//     console.log("Key Up");
// });
// document.addEventListener('keydown', function () {
//     console.log("Key Down");
// });
// document.addEventListener('keypress', function () {
//     console.log("Key Press");
// });

// document.getElementById('innertext').innerText = "Hello World";
// document.getElementById('innerHTML').innerHTML = "Hello World";
// document.getElementById('textContent').textContent = "Hello World";

// let a = document.getElementById('innertext');
// let b = document.getElementById('innerHTML');
// let c = document.getElementById('textContent');
// console.log(a.innerText);
// console.log(b.innerHTML);
// console.log(c.textContent);


// Click on the button to change style.
let btn1 = document.getElementById('jsstyle');
let para = document.getElementById('text');
btn1.addEventListener('click', function () {
    para.style.fontFamily = "'Courier New', Courier, monospace";
    para.style.fontSize = "30px";
    para.style.color = "red";
    para.style.backgroundColor = "yellow";
});


let grandParent = document.getElementById('grandParent');
let firstp = document.getElementById('firstp');
let secondp = document.getElementById('secondp');
let parent = document.getElementById('ul');
let child = document.querySelectorAll('li');

// childNodes 
// console.log(parent.childNodes);

// firstChild 
// console.log(parent.firstChild);

// lastChild
// console.log(parent.lastChild);

// nextSibling 
// console.log(parent.nextSibling);

// nodeName 
// console.log(parent.nodeName);

// nodeType 
// console.log(parent.nodeType);

// nodeValue 
// console.log(parent.nodeValue);

// parentElement 
// console.log(parent.parentElement);

// parentNode 
// console.log(parent.parentNode);

// previousSibling 
// console.log(parent.previousSibling);

// textContent 
// console.log(parent.textContent);


// remove();
// firstp.remove();
// grandParent.append(firstp);

// removeChild();
// grandParent.removeChild(firstp);

// getAttribute();
// console.log(grandParent.getAttribute('id'));
// console.log(grandParent.getAttribute('name'));

// setAttribute();
// grandParent.setAttribute('class',"grandDiv");
// console.log(grandParent.getAttribute('class'));

// removeAttribute();
// grandParent.removeAttribute('id');
// console.log(grandParent.getAttribute('class'));

// dataset
// console.log(grandParent.dataset);
// console.log(grandParent.dataset.name);
// grandParent.dataset.newName = "Hello";
// console.log(grandParent.dataset);

// replaceChild
// let old = parent.children[0];
// console.log(old);
// let newEle = document.createElement('li');
// newEle.innerText = "Child Others";
// parent.replaceChild(newEle, old);

let client = document.getElementById("client");
client.addEventListener("click", logKey);
function logKey(e) {
    console.log("Client X :-" + e.clientX);
    console.log("Page X :-" + e.pageX);
    console.log("Screen X :-" + e.screenX);
    console.log("Off Set X :-" + e.offsetX);
}

// let link = document.getElementById('w3r');
// console.log(link);


// Creating Element
// let newElement = document.createElement('h1');
// newElement.innerText = "This is H1";
// client.append(newElement);
// console.log(newElement);

// client.append("Hello");

// changing an image on click
let image1 = document.getElementById('image1');
image1.addEventListener('click', function () {
    image1.src = "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg";
});

// console.log(image1);
// image1.addEventListener('click', function () {
//     image1.setAttribute("src", "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg")
// });

// create link with JS
let addA = document.getElementById('addA');
let newLink = document.createElement('a');
newLink.href = "https://www.google.com/";
newLink.innerText = "This is Google";
addA.append(newLink);

let alertMe = document.getElementById('alertMe');
alertMe.addEventListener('click', function () {
    alert("You are click on BUTTON");
});


// Add 
let addText = document.getElementById('addText');
let input = document.getElementById('input');
let addbtn = document.getElementById('add');
let addOl = document.getElementById('addOl');
function addItem() {
    let newLi = document.createElement('li');
    let value = input.value;
    value = value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
    newLi.innerText = value;
    addOl.appendChild(newLi);
    input.value = "";
}
addbtn.addEventListener('click', addItem);
document.addEventListener("keydown", function (e) {
    if (e.key == 'Enter') {
        addItem();
    }
});


// If User name and password are same than alert box print match else password doesn't matched
let username = document.getElementById('username');
let password = document.getElementById('password');
let subBtn = document.getElementById('subBtn');
subBtn.addEventListener("click", function () {
    let userValue = username.value;
    let passValue = password.value;
    if (userValue == passValue) {
        alert("Match");
    } else {
        alert("Password doesn't matched");
    }
});


let paragraph = document.getElementById('paragraph');
let arr = paragraph.innerText.split(" ");
let inputText = arr.map(value => value.length < 8 ? value : `<span style="background-color:yellow;">` + value + "</span>").join(" ");
paragraph.innerHTML = inputText;


// let myBtn = document.getElementById('myBtn');
// myBtn.addEventListener('click', function (e) {
//     console.log(e);
// })
// document.addEventListener('keydown', function (e) {
//     console.log(e);
// });


// let printWhichPress = document.getElementById('printWhichPress');
// document.addEventListener("keyup", function (e) {
//     printWhichPress.textContent += e.key;
// });

// let mainDiv = document.getElementById('mainDiv');
// let parentDiv = document.getElementById('parentDiv');
// let childDiv = document.getElementById('childDiv');

// mainDiv.addEventListener('click', function (e) {
//     console.log("Main");
//     console.log(e.target.id);
// });
// parentDiv.addEventListener('click', function (e) {
//     console.log("Parent");
//     console.log(e.target.id);
// });
// childDiv.addEventListener('click', function (e) {
//     console.log("Child");
//     console.log(e.target.id);
// });


// get id of any element which has clicked includes nested element also
document.addEventListener("click", function (e) {
    let click = e.target.id;
    if (!click == "") {
        console.log("id is:", click);
    }
});