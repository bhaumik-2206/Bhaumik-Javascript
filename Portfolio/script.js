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