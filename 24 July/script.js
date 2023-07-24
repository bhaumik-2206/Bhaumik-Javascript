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


// Notification
let notification = document.getElementById('noti');
let mainNoti = document.getElementById('mainNoti');
let diffNoti = document.querySelectorAll('.diff-noti');
function randomNotification() {
    let newElement = document.createElement('div');
    newElement.innerHTML = diffNoti[Math.floor(Math.random() * diffNoti.length)].innerHTML;
    newElement.style.display = "block";
    mainNoti.appendChild(newElement);
}
setInterval(() => {
    if (!(mainNoti.children[0] == undefined)) {
        mainNoti.children[0].remove();
    }
}, 1000);
notification.addEventListener('click', randomNotification);



let allTr = document.querySelectorAll('tr');
let newArray = [];
for (let i = 1; i < allTr.length; i++) {
    let a = allTr[0].children;
    let newObject = {};
    for (let j = 0; j < a.length; j++) {
        let id = a[j].innerHTML;
        let value = allTr[i].children[j].innerHTML;
        newObject[id] = value;
    }
    newArray.push(newObject);
}
document.getElementById('pre').innerHTML = newArray;
console.log(newArray);


let clicking = document.getElementById('clicking');
clicking.addEventListener('click', function (e) {
    console.log(e.offsetX);
});