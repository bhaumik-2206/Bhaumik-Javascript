window.addEventListener('scroll', () => {
    if (window.scrollY > document.getElementById('main-top').clientHeight) {
        document.getElementById('main-navBar').classList.add('fixed-top');
    } else {

        document.getElementById('main-navBar').classList.remove('fixed-top');
    }
});