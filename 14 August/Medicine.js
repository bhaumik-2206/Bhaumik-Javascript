let form = document.getElementById('form');
let tbody = document.getElementById('tbody');
let noti = document.getElementById('noti');
let mainBtn = document.getElementById('mainBtn');
let close = document.getElementById('close');
let byDate = document.getElementById('by-date');
let byDays = document.getElementById('by-days');
let selectedRow = null;
allData = [];

mainBtn.addEventListener('click', changeBackground);
function changeBackground() {
    tbody.style.opacity = ".5";
    mainBtn.style.opacity = ".5";
    form.style.display = 'block';
    form.elements.formBtn.innerText = "Add Medicine";
    form.elements.newDate.style.display = "none";
    form.elements.allDays.style.display = "none";
}
close.addEventListener('click', normalBackground);
function normalBackground() {
    tbody.style.opacity = 1;
    mainBtn.style.opacity = 1;
    form.style.display = 'none';
    selectedRow = null;
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

function addRows() {
    tbody.innerHTML = "";
    allData.forEach(ele => {
        let a = document.createElement('tr');
        a.innerHTML += `<td>${ele.medicineName}</td>
        <td>${ele.quantity}</td>
        <td>${ele.expiryDate}</td>
        <td>${ele.pack}</td>
        <td>${ele.batchName}</td>
        <td><span onclick="editMedicine(this)">edit</span> <span onclick="deleteMedicine(this)">Delete</span></td>`;
        tbody.appendChild(a);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let a = allData.findIndex(ele => ele.medicineName == e.target.medicineName.value.toLowerCase().trim());
    if (selectedRow) {
        let b = allData.findIndex(ele => ele.medicineName == selectedRow.children[0].innerText.toLowerCase().trim());
        if ((a != -1 && a != b)) {
            alert("This name is already in the table");
        } else {
            updateRows(selectedRow);
            normalBackground();
        }
    }
    else if (e.target.medicineName.value.trim() != "" && a == -1 && returnExpiryDate()) {
        allData.push({
            medicineName: e.target.medicineName.value.toLowerCase().trim(),
            pack: e.target.medicinePack.value,
            quantity: e.target.quantity.value,
            selectedDate: e.target.newDate.value,
            selectedDays: daysCount(),
            expiryDate: returnExpiryDate(),
            batchName: e.target.batchName.value
        });
        addRows();
        normalBackground();
        form.reset();
    } else {
        alert("Please enter Valid Medicine Name");
    }
});

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

function showNotification(value) {
    let newp = document.createElement('p');
    newp.style.marginBottom = "10px";
    newp.innerHTML = value;
    noti.appendChild(newp);
    setTimeout(() => {
        newp.remove();
    }, 4000);
}

byDate.addEventListener('change', () => {
    form.elements.newDate.style.display = "block";
    form.elements.allDays.style.display = "none";
});
byDays.addEventListener('change', () => {
    form.elements.newDate.style.display = "block";
    form.elements.allDays.style.display = "block";
});

function daysCount() {
    if (byDate.checked) {
        return false;
    } else if (byDays.checked) {
        return form.elements.allDays.value;
    }
}

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

function editMedicine(e) {
    changeBackground();
    selectedRow = e.parentElement.parentElement;;
    let a = allData.findIndex(ele => ele.medicineName == selectedRow.children[0].innerText);
    form.elements.medicineName.value = allData[a].medicineName;
    form.elements.medicinePack.value = allData[a].pack;
    form.elements.quantity.value = allData[a].quantity;
    if (allData[a].selectedDays > 0) {
        byDays.checked = true;
        form.elements.newDate.style.display = "block";
        form.elements.allDays.style.display = "block";
        form.elements.newDate.value = allData[a].selectedDate;
        form.elements.allDays.value = allData[a].selectedDays;
    } else {
        byDate.checked = true;
        form.elements.newDate.style.display = "block";
        form.elements.allDays.style.display = "none";
        form.elements.newDate.value = allData[a].selectedDate;
    }
    form.elements.batchName.value = allData[a].batchName;
}

function updateRows(value) {
    let b = allData.findIndex(ele => ele.medicineName == value.children[0].innerText);
    allData[b].medicineName = form.elements.medicineName.value.toLowerCase().trim();
    allData[b].pack = form.elements.medicinePack.value;
    allData[b].quantity = form.elements.quantity.value;
    allData[b].selectedDate = form.elements.newDate.value;
    allData[b].selectedDays = daysCount();
    allData[b].expiryDate = returnExpiryDate();
    allData[b].batchName = form.elements.batchName.value
    addRows();
}