// Add Data and Remove data from id
let table = document.getElementById('table');
let del = document.getElementById('del');
let typeDate = document.querySelectorAll('.typeDate');
let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    let newTr = document.createElement('tr');
    table.appendChild(newTr);
    for (let i = 0; i < typeDate.length; i++) {
        let newTd = document.createElement('td');
        newTd.textContent = typeDate[i].value;
        newTr.appendChild(newTd);
        typeDate[i].value = "";
    }
});
del.addEventListener('click', function () {
    let tr = document.querySelectorAll('tr');
    let hmm = document.getElementById('hmm');
    let num = hmm.value;
    console.log(num);
    for (let i = 0; i < tr.length; i++) {
        if (tr[i].children[i].innerHTML === "ID") {
            for (let j = 1; j < tr.length; j++) {
                if (tr[j].children[i].innerHTML == num) {
                    tr[j].remove();
                }
            }
            break;
        }
    }
});



// List 
let enterTask = document.getElementById('enterTask');
let addTaskBtn = document.getElementById('addTaskBtn');
let list = document.getElementById('list');
function addTask() {
    if (enterTask.value == "") {
        alert("Please Type Something");
    } else {
        let newLi = document.createElement('li');
        newLi.innerHTML = enterTask.value;
        list.appendChild(newLi);
        let span = document.createElement('span');
        span.innerHTML = "×";
        newLi.appendChild(span);
        saveTheData();
    }
    enterTask.value = "";
}
addTaskBtn.addEventListener('click', addTask);
enterTask.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addTask();
    }
});
list.addEventListener('click', (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle('checked');
        saveTheData();
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveTheData();
    }
});
function saveTheData() {
    localStorage.setItem('data', list.innerHTML);
}
function getInfo() {
    list.innerHTML = localStorage.getItem('data');
}
getInfo();



// Calculator
let input = document.getElementById('input');
let buttons = document.querySelectorAll('.button');
let string = "";
buttons.forEach(value => {
    value.addEventListener('click', function (e) {
        if (e.target.innerHTML === "=") {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML === "AC") {
            string = "";
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
let calc = document.getElementById('calc');
let keys = "1234567890/*-+-%";
calc.addEventListener('keydown', (e) => {
    if (keys.includes(e.key)) {
        e.preventDefault(); // Prevent the default key behavior
        string += e.key;
        input.value = string;
    } else if (e.key === "Backspace") {
        e.preventDefault(); // Prevent the default key behavior
        string = string.slice(0, -1);
        input.value = string;
    } else if (e.key === "=" || e.key === "Enter") {
        e.preventDefault(); // Prevent the default key behavior
        string = eval(string);
        input.value = string;
    } else if (e.key === "Escape") {
        e.preventDefault(); // Prevent the default key behavior
        string = "";
        input.value = string;
    }
});