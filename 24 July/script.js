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
        img.style.zIndex = "2";
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


// Notification - Task
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


// Make Table Using Array Of Object
const usersData = [
    {
        id: 432,
        first_name: "Asd",
        last_name: "paerl",
        email: "abc@gmail.com",
        phone: "+919394099203",
    },
    {
        id: 342,
        first_name: "dsf",
        last_name: "paerl",
        email: "sdf@gmail.com",
        phone: "+919394099089",
    },
    {
        id: 765,
        first_name: "dfgf",
        last_name: "dfg",
        email: "muyjgh@gmail.com",
        phone: "+919394054345"
    },
    {
        id: 123,
        first_name: "sdxfg",
        last_name: "gdfd",
        email: "werrew@gmail.com",
        phone: "+915464569203",
    },
];
let tableDynamic = document.getElementById('tableDynamic');
usersData.forEach(value => {
    let newTr = document.createElement('tr');
    newTr.innerHTML = `
    <td>${value.id}</td>
    <td>${value.first_name}</td>
    <td>${value.last_name}</td>
    <td>${value.email}</td>
    <td>${value.phone}</td>`;
    tableDynamic.appendChild(newTr);
});
// let headerTr = document.createElement('tr');
// let addAllKeys = [];
// usersData.forEach(value => {
//     for (const key in value) {
//         addAllKeys.push(key);
//     }
// });
// let removeDuplicateKeys = [];
// addAllKeys.forEach(value => removeDuplicateKeys.includes(value) ? false : removeDuplicateKeys.push(value));
// tableDynamic.appendChild(headerTr);
// for (let i = 0; i < removeDuplicateKeys.length; i++) {
//     let newTh = document.createElement('th');
//     newTh.innerHTML = removeDuplicateKeys[i];
//     headerTr.appendChild(newTh);
// }
// usersData.forEach(userData => {
//     let dataTr = document.createElement('tr');
//     for (let i = 0; i < removeDuplicateKeys.length; i++) {
//         let newTd = document.createElement('td');
//         newTd.innerHTML = userData[removeDuplicateKeys[i]] || ""; // Check if the key exists in the data, otherwise use an empty string
//         dataTr.appendChild(newTd);
//     }
//     tableDynamic.appendChild(dataTr);
// });

// let headerTr = document.createElement('tr');
// for (const key in usersData[0]) {
//     let newTh = document.createElement('th');
//     newTh.innerHTML = key;
//     headerTr.appendChild(newTh);
// }
// tableDynamic.appendChild(headerTr);
// usersData.forEach((value, i) => {
//     let newTr = document.createElement('tr');
//     for (const key in value) {
//         let newTd = document.createElement('td');
//         newTd.innerHTML = value[key];
//         newTr.appendChild(newTd);
//     }
//     tableDynamic.appendChild(newTr);
// });



// Click Effect
let clicking = document.getElementById('clicking');
let background = document.getElementById('background');
clicking.addEventListener('click', function (e) {
    let a = e.offsetX;
    let removeDuplicateKeys = e.offsetY;
    background.style.left = a + "px";
    background.style.top = removeDuplicateKeys + "px";
    background.style.width = "0";
    background.style.height = "0";
    background.style.transition = "none";
    setTimeout(() => {
        background.style.width = "1000px";
        background.style.height = "1000px";
        background.style.transition = "0.5s ease-out";
    }, 0);
    setTimeout(() => {
        background.style.left = "";
        background.style.top = "";
        background.style.width = "";
        background.style.height = "";
        background.style.transition = "none";
    }, 500);
});


// Drag And Drop
let dragItem = document.getElementById('dragItem');
let emptyBox = document.querySelectorAll('.emptyBox');
for (let i = 0; i < emptyBox.length; i++) {
    emptyBox[i].addEventListener('dragover', function (e) {
        e.preventDefault();
    });
    emptyBox[i].addEventListener('drop', function (e) {
        e.target.append(dragItem);
    });
}