let form = document.getElementById('form');
let mainBtn = document.getElementById('mainBtn');
let table = document.getElementById('table');
let medicineText = document.getElementById('medicine-text');
let quantity = document.getElementById('quantity');
let noti = document.getElementById('noti');
let formBtn = document.getElementById('formBtn');
let packDropdown = document.getElementById('pack-dropdown');
let batchInput = document.getElementById('batch-input');
let byDate = document.getElementById('by-date');
let addValues = document.getElementById('addValues');
let byDays = document.getElementById('by-days');
let close = document.getElementById('close');
let trueDate = false;
let storeVar = null;
let allMedicine = [];

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
    packDropdown.appendChild(option);
});

// Adding a Options to batch Dropdown
batch.forEach(ele => {
    let option = document.createElement('option');
    option.value = ele.batch;
    option.innerText = ele.batch;
    batchInput.appendChild(option);
});

// Create date when click on by date
function forbyDate() {
    addValues.innerHTML = "";
    if (byDate.checked) {
        let newDate = document.createElement('input');
        newDate.setAttribute('type', 'date');
        newDate.setAttribute('id', 'newDate');
        newDate.required = true;
        addValues.appendChild(newDate);
    }
}
byDate.addEventListener('change', forbyDate);

// Create date when click on by days
function forbyDays() {
    addValues.innerHTML = "";
    if (byDays.checked) {
        let newDate = document.createElement('input');
        newDate.setAttribute('type', 'date');
        newDate.setAttribute('id', 'newDate');
        newDate.required = true;
        addValues.appendChild(newDate);
        let selDays = document.createElement('input');
        selDays.setAttribute('type', 'number');
        selDays.setAttribute('id', 'allDays');
        selDays.setAttribute('min', '1');
        selDays.required = true;
        addValues.appendChild(selDays);
    }
}
byDays.addEventListener('change', forbyDays);

// For block the display of form and change the opacity of button and table in click
mainBtn.addEventListener('click', changeBackground);

// Form submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // let cell = document.querySelectorAll('.addMedicine');
    // cell.forEach(e => allMedicine.push(e.children[0].innerText));
    if (storeVar) {
        updateRow(storeVar);
        storeVar = null;
    }
    else if (medicineText.value.trim() != '' && !allMedicine.includes(medicineText.value.trim().toLowerCase())) {
        trueDate = false;
        returnExpiryDate();
        if (trueDate) {
            // if (storeVar) {
            //     updateRow(storeVar);
            //     storeVar = null;
            // } else {
            let newTr = document.createElement('tr');
            newTr.setAttribute('class', 'addMedicine');
            newTr.innerHTML = `
                <td>${medicineText.value}</td>
                <td>${quantity.value}</td>
                <td>${returnExpiryDate()}</td>
                <td>${packDropdown.value}</td>
                <td>${batchInput.value}</td>
                <td><span onclick="editMedicine(this)">edit</span> <span onclick="deleteMedicine(this)">Delete</span></td>`;
            table.appendChild(newTr);
            allMedicine.push(medicineText.value.trim().toLowerCase());
            normalBackground();
            showNotification("Medicine Added");
            // }
        }
    } else {
        alert("Invalid Name");
    }
});

// add value and ebable batch input depend on pack dropdown value
packDropdown.addEventListener("change", (e) => {
    e.preventDefault();
    let packId = packDropdown.value;
    let pack = packs.find(ele => ele.value == packId);
    let findBatch = batch.find(ele => ele.pack_id == pack.id);
    batchInput.value = findBatch.batch;
    batchInput.disabled = false;
});

// Reset Form
function resetAllTheValue() {
    medicineText.value = "";
    packDropdown.value = "";
    quantity.value = "";
    byDate.checked = false;
    byDays.checked = false;
    addValues.innerHTML = "";
    batchInput.value = "";
}

// Delete Medicine
function deleteMedicine(e) {
    let a = confirm("Are You Sure To Delete Data?");
    let row = e.parentElement.parentElement;
    if (a) {
        row.remove();
        showNotification("Medicine Delete");
    }
    const index = allMedicine.indexOf(row.children[0].innerText.toLowerCase().trim());
    if (index > -1) {
        allMedicine.splice(index, 1);
    }
}

// For get the date which is selected by the user
function returnExpiryDate() {
    let allDays = document.getElementById('allDays');
    let newDate = document.getElementById('newDate');
    let presentDate = new Date();
    let selecteDate = new Date(newDate.value);

    if (byDays.checked) {
        let newDate = new Date(selecteDate.getTime() + (allDays.value * 24 * 60 * 60 * 1000));
        if (newDate.getTime() >= presentDate.getTime()) {
            trueDate = true;
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
            trueDate = false;
            alert("This is not a valid date");
        }
    } else if (byDate.checked) {
        if (selecteDate.getTime() >= presentDate.getTime()) {
            trueDate = true;
            return newDate.value;
        } else {
            trueDate = false;
            alert("Please select future date");
        }
    }
}

// Show Notification when the table row is updated.
function showNotification(value) {
    let newp = document.createElement('p');
    newp.style.marginBottom = "10px";
    newp.innerHTML = value;
    noti.appendChild(newp);
    setTimeout(() => {
        newp.remove();
    }, 4000);
}

// For remove form and change opacity of table and main button.
function normalBackground() {
    table.style.opacity = 1;
    mainBtn.style.opacity = 1;
    form.style.display = 'none';
    storeVar = null;
}
function changeBackground() {
    table.style.opacity = ".5";
    mainBtn.style.opacity = ".5";
    form.style.display = 'block';
    formBtn.innerText = "Add Medicine";
    medicineText.disabled = false;
    resetAllTheValue();
}

// Close the form 
close.addEventListener('click', normalBackground);

// Edit Medicine--------------------------------
function editMedicine(e) {
    changeBackground();
    let first = e.parentElement.parentElement;
    storeVar = first;
    medicineText.value = first.children[0].innerHTML;
    medicineText.disabled = true;
    // const index = allMedicine.indexOf(e.parentElement.parentElement.children[0].innerText.toLowerCase().trim());
    // if (index > -1) {
    //     allMedicine.splice(index, 1);
    // }
    packDropdown.value = first.children[3].innerHTML;
    quantity.value = first.children[1].innerHTML;
    byDate.checked = true;
    byDays.checked = false;
    forbyDate();
    document.getElementById('newDate').value = first.children[2].innerHTML;;
    batchInput.value = first.children[4].innerHTML;
    formBtn.textContent = "Update Medicine";
}

// For Updating a row
function updateRow(row) {
    row.children[0].innerHTML = medicineText.value;
    row.children[1].innerHTML = quantity.value;
    row.children[2].innerHTML = returnExpiryDate();
    row.children[3].innerHTML = packDropdown.value;
    row.children[4].innerHTML = batchInput.value;
    // allMedicine.push(medicineText.value.toLowerCase().trim());
    normalBackground();
    resetAllTheValue();
    showNotification("Medicine Updated");
}