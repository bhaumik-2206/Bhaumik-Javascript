let button = document.querySelectorAll('.filter-btn');
let mainImage = document.getElementById('main-image');
button.forEach(value => {
    value.addEventListener('click', function () {
        if (mainImage.classList == 0 || mainImage.classList[0] == value.innerHTML.toLowerCase()) {
            mainImage.classList.toggle(value.innerHTML.toLowerCase());
        } else {
            mainImage.removeAttribute('class');
            mainImage.setAttribute('class', value.innerHTML.toLowerCase())
        }
    });
});