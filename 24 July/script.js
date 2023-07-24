let image = document.querySelectorAll('img');
let newImages = document.getElementById('newImages');
let images = document.getElementById('images');
let cancel = document.getElementById('cancel');
image.forEach(value => {
    let img = document.createElement('img');
    value.addEventListener('click', function () {
        img.setAttribute("src", value.getAttribute('src'));
        img.style.display = "block";
        img.style.width = "90%";
        img.style.height = "90%";
        img.style.position = "absolute";
        img.style.left = "5%";
        img.style.top = "5%";
        newImages.appendChild(img);
        cancel.style.display = "block";
    });
    cancel.addEventListener('click', function () {
        img.style.display = "none";
        cancel.style.display = "";
    });
});

