window.addEventListener('scroll', () => {
    if (window.scrollY > document.getElementById('main-top').clientHeight) {
        document.getElementById('main-navBar').classList.add('fixed-top');
    } else {
        document.getElementById('main-navBar').classList.remove('fixed-top');
    }

    if (window.scrollY >= 150) {
        document.getElementById("scroll-top").classList.add("add-button");
    } else {
        document.getElementById("scroll-top").classList.remove("add-button");
    }
});
document.getElementById('scroll-top').addEventListener('click', (e) => {
    window.scroll(0, 0);
});

document.getElementById('log-in-btn').addEventListener('click', (e) => {
    document.getElementById('form').classList.add('openForm');
});
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
})





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