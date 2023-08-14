
let form = document.getElementById('form');
let table = document.getElementById('table');
let noti = document.getElementById('noti');
let mainBtn = document.getElementById('mainBtn');
let close = document.getElementById('close');
let formBtn = document.getElementById('formBtn');
let byDate = document.getElementById('by-date');
let byDays = document.getElementById('by-days');
let storeVar = null;
let allData = [];

mainBtn.addEventListener('click', changeBackground);
function changeBackground() {
    table.style.opacity = ".5";
    mainBtn.style.opacity = ".5";
    form.style.display = 'block';
    formBtn.innerText = "Add Medicine";
    resetAllTheValue();
}

close.addEventListener('click', normalBackground);
function normalBackground() {
    table.style.opacity = 1;
    mainBtn.style.opacity = 1;
    form.style.display = 'none';
}

let packs = [
    { id: 1, value: "pack-1" },
    { id: 2, value: "pack-2" },
    { id: 3, value: "pack-3" },
    { id: 4, value: "pack-4" },
    { id: 5, value: "pack-5" },
    { id: 6, value: "pack-6" },
    { id: 7, value: "pack-7" },
    { id: 8, value: "pack-8" },
];
let batch = [
    { pack_id: 1, batch: "A1" },
    { pack_id: 2, batch: "A2" },
    { pack_id: 3, batch: "A3" },
    { pack_id: 4, batch: "A4" },
    { pack_id: 5, batch: "A5" },
    { pack_id: 6, batch: "A6" },
    { pack_id: 7, batch: "A7" },
    { pack_id: 8, batch: "A8" },
];
// Adding a Options to Pack Dropdown
packs.forEach(ele => {
    let option = document.createElement('option');
    option.value = ele.value;
    option.innerText = ele.value;
    form.elements.medicinePack.appendChild(option);
});

// Adding a Options to batch Dropdown
batch.forEach(ele => {
    let option = document.createElement('option');
    option.value = ele.batch;
    option.innerText = ele.batch;
    form.elements.batchName.appendChild(option);
});

form.elements.medicinePack.addEventListener('change', (e) => {
    e.preventDefault();
    let packId = form.elements.medicinePack.value;
    let pack = packs.find(ele => ele.value == packId);
    let findBatch = batch.find(ele => ele.pack_id == pack.id);
    form.elements.batchName.value = findBatch.batch;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let a = allData.findIndex(ele => ele.medicineName == e.target.medicineName.value.toLowerCase().trim());
    if (storeVar) {
        updateRow(storeVar);
        allData[a].medicineName = e.target.medicineName.value;
        allData[a].medicinePack = e.target.medicinePack.value;
        allData[a].quantity = e.target.quantity.value;
        allData[a].expiryDate.date = e.target.quantity.date.value;
        allData[a].expiryDate.days = daysCount();
        allData[a].batchName = e.target.batchName.value;
        // allData.push({
        //     medicineName: e.target.medicineName.value,
        //     medicinePack: e.target.medicinePack.value,
        //     quantity: e.target.quantity.value,
        //     expiryDate: {
        //         date: e.target.newDate.value,
        // days: daysCount(),
        //     },
        //     batchName: e.target.batchName.value,
        // });
        storeVar = null;
    } else {
        if (e.target.medicineName.value.trim() != "" && a == -1) {
            if (returnExpiryDate()) {
                let newTr = document.createElement("tr");
                newTr.innerHTML = `
    <td>${e.target.medicineName.value}</td>
    <td>${e.target.quantity.value}</td>
    <td>${returnExpiryDate()}</td>
    <td>${e.target.medicinePack.value}</td>
    <td>${e.target.batchName.value}</td>
    <td><span onclick="editMedicine(this)">edit</span> <span onclick="deleteMedicine(this)">Delete</span></td>`;
                table.appendChild(newTr);
                allData.push({
                    medicineName: e.target.medicineName.value,
                    medicinePack: e.target.medicinePack.value,
                    quantity: e.target.quantity.value,
                    expiryDate: {
                        date: e.target.newDate.value,
                        days: daysCount(),
                    },
                    batchName: e.target.batchName.value,
                });
                // allData.push(e.target.medicineName.value.toLowerCase().trim());
                showNotification("Medicine Added");
                normalBackground();
                resetAllTheValue();
            }
        } else {
            alert("Please enter a valid medicine name")
        }
    }
    console.log(allData);
});

function returnExpiryDate() {
    let byDate = document.getElementById('by-date');
    let byDays = document.getElementById('by-days');
    let presentDate = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    let selectedDate = new Date(form.elements.newDate.value);
    if (byDate.checked) {
        if (selectedDate.getTime() >= presentDate.getTime()) {
            let month = selectedDate.getMonth() + 1;
            let returnDate = selectedDate.getDate();
            if (month < 10) {
                month = '0' + month;
            }
            if (returnDate < 10) {
                returnDate = '0' + returnDate;
            }
            return selectedDate.getFullYear() + '-' + month + '-' + returnDate;
        } else {
            alert("Please select a valid date");
            return false;
        }
    } else if (byDays.checked) {
        let newDate = new Date(selectedDate.getTime() + (form.elements.allDays.value * 24 * 60 * 60 * 1000));
        if (newDate.getTime() >= presentDate.getTime()) {
            let month = newDate.getMonth() + 1;
            let returnDate = newDate.getDate();
            if (month < 10) {
                month = '0' + month;
            }
            if (returnDate < 10) {
                returnDate = '0' + returnDate;
            }
            return newDate.getFullYear() + '-' + month + '-' + returnDate;
        } else {
            alert("Please select a valid date");
            return false;
        }
    }
}

function daysCount() {
    if (byDate.checked) {
        return false;
    } else if (byDays.checked) {
        return form.elements.allDays.value;
    }
}

form.elements["select-date"].forEach(ele => {
    ele.addEventListener('change', (e) => {
        addValues.innerHTML = "";
        if (ele.id == "by-date") {
            // if (ele.checked) {
            makeForDate(addValues);
            // }
        } else if (ele.id == "by-days") {
            // if (ele.checked) {
            makeForDate(addValues);
            makeForDays(addValues);
            // }
        }
    })
});

// Show Notification
function showNotification(value) {
    let newp = document.createElement('p');
    newp.style.marginBottom = "10px";
    newp.innerHTML = value;
    noti.appendChild(newp);
    setTimeout(() => {
        newp.remove();
    }, 4000);
}

// Delete Medicine
function deleteMedicine(e) {
    let a = confirm("Are You Sure To Delete Data?");
    let row = e.parentElement.parentElement;
    if (a) {
        row.remove();
        showNotification("Medicine Delete");
    }
}

function resetAllTheValue() {
    form.elements.medicineName.value = "";
    form.elements.medicinePack.value = "";
    form.elements.quantity.value = "";
    form.elements.batchName.value = "";
    addValues.innerHTML = "";
    form.elements["select-date"].forEach(ele => ele.checked = false);
}

// Edit Medicine
function editMedicine(e) {
    changeBackground();
    let first = e.parentElement.parentElement;
    storeVar = first;
    let a = allData.findIndex(ele => {
        return ele.medicineName == first.children[0].innerText;
    });
    form.elements.medicineName.value = allData[a].medicineName;
    form.elements.medicinePack.value = allData[a].medicinePack;
    form.elements.quantity.value = allData[a].quantity;
    if (allData[a].expiryDate.days > 0) {
        makeForDate(addValues);
        makeForDays(addValues);
        byDays.checked = true;
        form.elements.newDate.value = allData[a].expiryDate.date;
        form.elements.allDays.value = allData[a].expiryDate.days;
    } else {
        makeForDate(addValues);
        byDate.checked = true;
        form.elements.newDate.value = allData[a].expiryDate.date;
    }
    form.elements.batchName.value = allData[a].batchName;

    formBtn.textContent = "Update Medicine";
}

function updateRow(row) {
    row.children[0].innerHTML = form.elements.medicineName.value;
    row.children[1].innerHTML = form.elements.quantity.value;
    row.children[2].innerHTML = returnExpiryDate();
    row.children[3].innerHTML = form.elements.medicinePack.value;
    row.children[4].innerHTML = form.elements.batchName.value;
    // allMedicine.push(medicineText.value.toLowerCase().trim());
    normalBackground();
    resetAllTheValue();
    showNotification("Medicine Updated");
}

function makeForDate(appendParentName) {
    let newDate = document.createElement('input');
    newDate.setAttribute('type', 'date');
    newDate.setAttribute('name', 'newDate');
    newDate.required = true;
    appendParentName.appendChild(newDate);
}

function makeForDays(appendParentName) {
    let selDays = document.createElement('input');
    selDays.setAttribute('type', 'number');
    selDays.setAttribute('name', 'allDays');
    selDays.setAttribute('min', '1');
    selDays.required = true;
    appendParentName.appendChild(selDays);
}