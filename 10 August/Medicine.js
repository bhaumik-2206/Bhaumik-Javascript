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
let packDropdown = document.getElementById('pack-dropdown');
packs.forEach(ele => {
    let option = document.createElement('option');
    option.value = ele.value;
    option.innerText = ele.value;
    packDropdown.appendChild(option);
});

// Adding a Options to batch Dropdown
let batchInput = document.getElementById('batch-input');
batch.forEach(ele => {
    let option = document.createElement('option');
    option.value = ele.batch;
    option.innerText = ele.batch;
    batchInput.appendChild(option);
});


// Create date when click on by date
let byDate = document.getElementById('by-date');
let addValues = document.getElementById('addValues');
function forbyDate() {
    addValues.innerHTML = "";
    if (byDate.checked) {
        let newDate = document.createElement('input');
        newDate.setAttribute('type', 'date');
        newDate.setAttribute('id', 'newDate');
        newDate.setAttribute('required', '');
        addValues.appendChild(newDate);
    }
}
byDate.addEventListener('change', forbyDate);


// Create date when click on by days
let byDays = document.getElementById('by-days');
function forbyDays() {
    addValues.innerHTML = "";
    if (byDays.checked) {
        let newDate = document.createElement('input');
        newDate.setAttribute('type', 'date');
        newDate.setAttribute('id', 'newDate');
        newDate.setAttribute('required', '');
        addValues.appendChild(newDate);
        let selDays = document.createElement('input');
        selDays.setAttribute('type', 'number');
        selDays.setAttribute('id', 'allDays');
        selDays.setAttribute('min', '1');
        selDays.setAttribute('required', '');
        addValues.appendChild(selDays);
    }
}
byDays.addEventListener('change', forbyDays);


let form = document.getElementById('form');
let mainBtn = document.getElementById('mainBtn');
let table = document.getElementById('table');
let medicineText = document.getElementById('medicine-text');
let quantity = document.getElementById('quantity');
let noti = document.getElementById('noti');
let close = document.getElementById('close');
let trueDate = false;

// For block the display of form 
mainBtn.addEventListener('click', () => {
    form.style.display = 'block';
    table.style.opacity = ".5";
    mainBtn.style.opacity = ".5";
});

// Form submit event
form.addEventListener('submit', (e) => {
    let allMedicine = [];
    let cell = document.querySelectorAll('.addMedicine')
    cell.forEach(e => allMedicine.push(e.children[0].innerText));
    e.preventDefault();
    if (medicineText.value.trim() !== '' && !allMedicine.includes(medicineText.value.trim().toLowerCase())) {
        trueDate = false;
        returnExpiryDate();
        if (trueDate) {
            let newTr = document.createElement('tr');
            newTr.setAttribute('class', 'addMedicine');
            newTr.innerHTML = `
            <td>${medicineText.value}</td>
            <td>${quantity.value}</td>
            <td>${returnExpiryDate()}</td>
            <td>${packDropdown.value}</td>
            <td>${batchInput.value}</td>
            <td><span onclick="editTask(this)">edit</span> <span onclick="deleteMedicine(this)">Delete</span></td>`;
            table.appendChild(newTr);
            normalBackground();
            showNotification("Medicine Added");
            resetAllTheValue();
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
    if (a) {
        let row = e.parentElement.parentElement;
        row.remove();
    }
}

// For get the date which is selected by the user
function returnExpiryDate() {
    let allDays = document.getElementById('allDays');
    let newDate = document.getElementById('newDate');
    let presentDate = new Date();
    let selecteDate = new Date(newDate.value);

    if (byDays.checked) {
        let date = new Date(selecteDate.getTime() + (allDays.value * 24 * 60 * 60 * 1000));
        if (date.getTime() >= presentDate.getTime()) {
            trueDate = true;
            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        } else {
            trueDate = false;
            alert("This is not a valid date");
        }
    } else if (byDate.checked) {
        if (selecteDate.getDate() >= presentDate.getDate()) {
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
}

close.addEventListener('click', normalBackground);