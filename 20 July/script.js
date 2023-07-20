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
document.getElementById('mouseout').addEventListener('mouseout', function () {
    console.log("Mouse Out");
});
document.getElementById('mouseleave').addEventListener('mouseleave', function () {
    console.log("Mouse Leave");
});


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
// let btn1 = document.getElementById('jsstyle');
// let para = document.getElementById('text');
// btn1.addEventListener('click', function () {
//     para.style.fontFamily = "'Courier New', Courier, monospace";
//     para.style.fontSize = "30px";
//     para.style.color = "red";
//     para.style.backgroundColor = "yellow";
// });


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
