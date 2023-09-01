// // Cursor Effect
// let cursor = document.querySelectorAll('.m-cursor');
// let a = document.querySelector('.animation');
// document.addEventListener("mousemove", async (e) => {
//     cursor[0].style.top = `${e.clientY}px`;
//     cursor[0].style.left = `${e.clientX}px`;
//     setTimeout(() => {
//         cursor[1].style.top = `${e.clientY}px`;
//         cursor[1].style.left = `${e.clientX}px`;
//     }, 50);
//     setTimeout(() => {
//         cursor[2].style.top = `${e.clientY}px`;
//         cursor[2].style.left = `${e.clientX}px`;
//     }, 100);
// });


let navLink = document.querySelectorAll('ul li a');
let allDivs = document.querySelectorAll('.same-class-for-scroll');

window.addEventListener('scroll', (e) => {
    // For add box-shadow in the navbar
    if (window.scrollY > document.getElementById('main-top').clientHeight) {
        document.getElementById('main-navBar').classList.add('fixed-top');
    } else {
        document.getElementById('main-navBar').classList.remove('fixed-top');
    }

    // Add scroll to top button when user scroll down 150px 
    if (window.scrollY >= 150) {
        document.getElementById("scroll-top").classList.add("add-button");
    } else {
        document.getElementById("scroll-top").classList.remove("add-button");
    }

    // Add active class when user scrolls down and go to the next section
    allDivs.forEach(ele => {
        let top = window.scrollY + 150;
        let offset = ele.offsetTop;
        let height = ele.offsetHeight;
        let id = ele.getAttribute("id");
        // console.log(top, offset, height, id);
        if (top >= offset && top < offset + height) {
            navLink.forEach(link => {
                link.classList.remove("active");
                // console.log(link.getAttribute("href"));
                if (link.getAttribute("href") == `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});
// Event Listner in scroll to top button when click on the button page is scroll to top (0,0)
document.getElementById('scroll-top').addEventListener('click', (e) => {
    window.scroll(0, 0);
});
// Open Form When click on contact button
document.getElementById('log-in-btn').addEventListener('click', (e) => {
    document.getElementById('form').classList.add('openForm');
    document.querySelector('.contact-form').classList.remove("block");
    document.querySelector('.contact-form').classList.add("none");
    document.querySelector('.contact-by-user').classList.remove("none");
    document.querySelector('.contact-by-user').classList.add("flex");
});
// Close Form When click on Close button
document.getElementById('closeBtn').addEventListener('click', (e) => {
    document.getElementById('form').classList.remove('openForm');
});

document.getElementById('show-menu').addEventListener('click', () => {
    document.querySelector('.navbar ul').classList.add('show-navbar');
});

document.getElementById('close-navBar').addEventListener('click', () => {
    document.querySelector('.navbar ul').classList.remove('show-navbar');
});

document.querySelectorAll('.navbar ul li').forEach(ele => {
    ele.addEventListener('click', () => {
        document.querySelector('.navbar ul').classList.remove('show-navbar');
    })
});
document.getElementById('mobile-number').addEventListener('click', (e) => {
    document.querySelector('.contact-form').classList.remove("none");
    document.querySelector('.contact-form').classList.add("block");
    document.querySelector('.contact-by-user').classList.add("none");
    e.target.parentElement.parentElement.classList.remove("flex");
    // e.target.parentElement.parentElement.classList.add("none");
});
document.getElementById('email').addEventListener('click', (e) => {
    document.querySelector('.contact-form').classList.remove("none");
    document.querySelector('.contact-form').classList.add("block");
    e.target.parentElement.parentElement.classList.remove("flex");
    document.querySelector('.contact-by-user').classList.add("none");
    // e.target.parentElement.parentElement.classList.add("none");
});
// document.getElementById('form').addEventListener('submit', (e) => {

// });



let myH1 = document.getElementById("my-name");
let randomCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let myName = myH1.innerHTML;

let interval = null;

myH1.addEventListener("mouseover", (e) => {
    clearInterval(interval);
    let characterIndex = 0;
    interval = setInterval(() => {
        let a = myName.split("").map((ele, index) => {
            if (characterIndex > index) {
                return myName[index];
            }
            return randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
        });
        e.target.textContent = a.join("");
        if (characterIndex >= myName.length) {
            clearInterval(interval);
        }
        characterIndex = characterIndex + 1 / 10;
    }, 10);
});




let texts = [" Software Engineer", " Front End Developer", " Designing"];
let index = 0;
let character = 0;
function change() {
    if (character - 1 < texts[index].length) {
        document.querySelector('.add-text').textContent += texts[index].charAt(character);
        character++;
        setTimeout(change, 100);
    } else {
        setTimeout(erase, 1700);
    }
}
function erase() {
    if (character - 1 > 0) {
        document.querySelector('.add-text').textContent = texts[index].slice(0, character - 1);
        character--;
        setTimeout(erase, 30);
    }
    else {
        index++;
        if (index >= texts.length) {
            index = 0;
        }
        setTimeout(change, 250);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(change, 200);
});