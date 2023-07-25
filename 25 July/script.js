// Carousel nImage Gallary
let curIndex = 0;
let changeImage = document.querySelectorAll('.changeImage');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
function mainImage(i) {
    changeImage.forEach((value, index) => {
        if (index === i) {
            value.style.display = "block";
        } else {
            value.style.display = "none";
        }
    });
}
function forImageChange(e) {
    curIndex += e;
    if (curIndex < 0) {
        curIndex = changeImage.length - 1;
    } else if (curIndex >= changeImage.length - 1) {
        curIndex = 0;
    }
    mainImage(curIndex);
}
left.addEventListener('click', () => {
    forImageChange(-1);
});
right.addEventListener('click', () => {
    forImageChange(1);
});
mainImage(curIndex);
document.addEventListener('keydown', function (e) {
    if (e.key == "ArrowRight") {
        forImageChange(1);
    } else if (e.key == "ArrowLeft") {
        forImageChange(-1);
    }
});



// Clock
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    hr_rotation = 30 * h + m / 2;
    second.style.transform = "rotate(" + 6 * s + "deg)";
    minute.style.transform = "rotate(" + 6 * m + "deg)";
    hour.style.transform = "rotate(" + 30 * h + "deg)";
}, 1);