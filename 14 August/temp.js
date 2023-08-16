let form = document.getElementById('form');
let tbody = document.getElementById('tbody');
let noti = document.getElementById('noti');
let mainBtn = document.getElementById('mainBtn');
let close = document.getElementById('close');
let byDate = document.getElementById('by-date');
let byDays = document.getElementById('by-days');
let storeVar = null;
let allData = [
    // {
    //     medicineName: "GUYGFEB",
    //     medicinePack: "pack2",
    //     quantity: "10",
    //     expiryDate: {
    //         date: "e.target.newDate.value",
    //         days: "daysCount()",
    //     },
    //     batchName: "A2",
    // }
];

function addRows(e) {
    tbody.innerHTML = "";
    allData.forEach(ele => {
        let a = document.createElement('tr');
        a.innerHTML += `<td>${ele.medicineName}</td>
        <td>${ele.quantity}</td>
        <td>${ele.expiryDate}</td>
        <td>${ele.medicinePack}</td>
        <td>${ele.batchName}</td>
        <td><span onclick="editMedicine(this)">edit</span> <span onclick="deleteMedicine(this)">Delete</span></td>`;
        tbody.appendChild(a);
    });
}

mainBtn.addEventListener('click', changeBackground);
function changeBackground() {
    tbody.style.opacity = ".5";
    mainBtn.style.opacity = ".5";
    form.style.display = 'block';
    form.elements.formBtn.innerText = "Add Medicine";
    resetAllTheValue();
}

close.addEventListener('click', () => {
    tbody.style.opacity = 1;
    mainBtn.style.opacity = 1;
    form.style.display = 'none';
    // storeVar = null;
});
function normalBackground() {
    tbody.style.opacity = 1;
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

// Add Bacch value from pack value
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
    if (e.target.medicineName.value.trim() != "" && a == -1 && returnExpiryDate()) {
        allData.push({
            medicineName: e.target.medicineName.value.toLowerCase().trim(),
            medicinePack: e.target.medicinePack.value,
            quantity: e.target.quantity.value,
            date: e.target.newDate.value,
            days: daysCount(),
            expiryDate: returnExpiryDate(),
            batchName: e.target.batchName.value,
        });
        addRows();
        normalBackground();
    }
});

// Form Submit Events
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let a = allData.findIndex(ele => ele.medicineName == e.target.medicineName.value.toLowerCase().trim());
//     // checkallValue(e);
//     if (storeVar) {
//         let b = allData.findIndex(ele => ele.medicineName == storeVar.children[0].innerText.toLowerCase().trim());
//         if (a != -1 && a != b) {
//             alert("This name is already in the tbody");
//         } else {
//             updateRow(storeVar);
//             storeVar = null;
//         }
//         console.log(a, b);
//     } else {
//         if (e.target.medicineName.value.trim() != "" && a == -1) {
//             if (returnExpiryDate()) {
//                 let newTr = document.createElement("tr");
//                 newTr.innerHTML = `
//                     <td>${e.target.medicineName.value}</td>
//                     <td>${e.target.quantity.value}</td>
//                     <td>${returnExpiryDate()}</td>
//                     <td>${e.target.medicinePack.value}</td>
//                     <td>${e.target.batchName.value}</td>
//                     <td><span onclick="editMedicine(this)">edit</span> <span onclick="deleteMedicine(this)">Delete</span></td>`;
//                 tbody.appendChild(newTr);
//                 allData.push({
//                     medicineName: e.target.medicineName.value.toLowerCase().trim(),
//                     medicinePack: e.target.medicinePack.value,
//                     quantity: e.target.quantity.value,
//                     expiryDate: {
//                         date: e.target.newDate.value,
//                         days: daysCount(),
//                     },
//                     batchName: e.target.batchName.value,
//                 });
//                 showNotification("Medicine Added");
//                 normalBackground();
//                 console.log(allData);
//             }
//         } else {
//             alert("Please enter a valid medicine name")
//         }
//     }
// });

// This function is return expiry date calculate the date user select by days in form
function returnExpiryDate() {
    let presentDate = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    let selectedDate = new Date(form.elements.newDate.value);
    if (byDate.checked) {
        if (selectedDate.getTime() >= presentDate.getTime()) {
            return form.elements.newDate.value;
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
            addDateInRadio(addValues);
        } else if (ele.id == "by-days") {
            addDateInRadio(addValues);
            addDayInRadio(addValues);
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
        let b = allData.findIndex(ele => ele.medicineName == row.children[0].medicineName);
        allData.splice((b - 1), 1);
    }
}

// Reset the form
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
    let a = allData.findIndex(ele => ele.medicineName == first.children[0].innerText);
    form.elements.medicineName.value = allData[a].medicineName;
    form.elements.medicinePack.value = allData[a].medicinePack;
    form.elements.quantity.value = allData[a].quantity;
    if (allData[a].expiryDate.days > 0) {
        addDateInRadio(addValues);
        addDayInRadio(addValues);
        byDays.checked = true;
        form.elements.newDate.value = allData[a].expiryDate.date;
        form.elements.allDays.value = allData[a].expiryDate.days;
    } else {
        addDateInRadio(addValues);
        byDate.checked = true;
        form.elements.newDate.value = allData[a].expiryDate.date;
    }
    form.elements.batchName.value = allData[a].batchName;
    form.elements.formBtn.innerText = "Update Medicine";
}

// Update Medicine Row
function updateRow(row) {
    console.log(row);
    let a = allData.findIndex(ele => ele.medicineName == row.children[0].innerText);
    // Change the value in main Array (allData) of specific index which user is edit
    allData[a].medicineName = form.elements.medicineName.value.toLowerCase().trim();
    allData[a].quantity = form.elements.quantity.value;
    allData[a].expiryDate.date = form.elements.newDate.value;
    allData[a].expiryDate.days = daysCount();
    allData[a].medicinePack = form.elements.medicinePack.value;
    allData[a].batchName = form.elements.batchName.value;
    // Add the new data to the tbody
    row.children[0].innerHTML = form.elements.medicineName.value;
    row.children[1].innerHTML = form.elements.quantity.value;
    row.children[2].innerHTML = returnExpiryDate();
    row.children[3].innerHTML = form.elements.medicinePack.value;
    row.children[4].innerHTML = form.elements.batchName.value;
    normalBackground();
    showNotification("Medicine Updated");
}

function addDateInRadio(appendParentName) {
    let newDate = document.createElement('input');
    newDate.setAttribute('type', 'date');
    newDate.setAttribute('name', 'newDate');
    newDate.required = true;
    appendParentName.appendChild(newDate);
}

function addDayInRadio(appendParentName) {
    let selDays = document.createElement('input');
    selDays.setAttribute('type', 'number');
    selDays.setAttribute('name', 'allDays');
    selDays.setAttribute('min', '1');
    selDays.required = true;
    appendParentName.appendChild(selDays);
}

// function checkallValue(e) {
//     if (e.target.medicineName.value.trim() != "") {
//         if (e.target.medicinePack.value != "") {
//             if (e.target.quantity.value != "") {
//                 return true;
//             } else {
//                 alert("Please Enter Quantity");
//             }
//         } else {
//             alert("Please Enter Medicine Pack");
//         }
//     } else {
//         alert("Please Enter Medicine Name");
//     }
// }