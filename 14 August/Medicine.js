let addMedicineForm = document.getElementById('addMedicineForm');
let mainBtn = document.getElementById('mainBtn');
let table = document.getElementById('table');
let noti = document.getElementById('noti');
let addMedicineBtn = document.getElementById('addMedicineBtn');
let byDate = document.getElementById('by-date');
let byDays = document.getElementById('by-days');
let closeBtn = document.querySelectorAll('.closeBtn');
let red = document.querySelectorAll('.red');
let selectedRow = null;
allData = [
    {
        id: 1,
        medicineName: "dolo",
        pack: "pack-1",
        quantity: 100,
        selectedDate: "2023-08-16",
        selectedDays: 10,
        expiryDate: "2023-08-26",
        batchName: "A1"
    },
    {
        id: 2,
        medicineName: "dolo1",
        pack: "pack-4",
        quantity: 100,
        selectedDate: "2023-08-25",
        selectedDays: false,
        expiryDate: "2023-08-25",
        batchName: "A4"
    }
];
makeAddMedicineTable();
//----------------------------------------------------------------
let addRecordBtn = document.getElementById('addRecordBtn');
let addOutRecordBtn = document.getElementById('addOutRecordBtn');
let addRecord = document.getElementById('addRecord');
let addOutRecord = document.getElementById('addOutRecord');
let recordTable = document.getElementById('recordTable');
let recordOutTable = document.getElementById('recordOutTable');
let addRecordArray = [];
let outRecordArray = [];

addMedicineBtn.addEventListener('click', () => {
    changeBackground();
    addMedicineForm.style.display = 'block';
    addRecord.style.display = 'none';
    addOutRecord.style.display = 'none';
    addMedicineForm.reset();
});
function changeBackground() {
    table.style.opacity = ".5";
    mainBtn.style.opacity = ".5";
    addMedicineForm.elements.formBtn.innerText = "Add Medicine";
    addMedicineForm.elements.newDate.style.display = "none";
    addMedicineForm.elements.allDays.style.display = "none";
}
function normalBackground() {
    table.style.opacity = 1;
    mainBtn.style.opacity = 1;
    selectedRow = null;
    addMedicineForm.style.display = 'none';
    addRecord.style.display = 'none';
    addOutRecord.style.display = 'none';
    blockRed();
}
closeBtn.forEach(ele => {
    ele.addEventListener('click', normalBackground);
});
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
    addMedicineForm.elements.medicinePack.appendChild(option);
});

// Add Bacch value from pack value
addMedicineForm.elements.medicinePack.addEventListener('change', (e) => {
    e.preventDefault();
    let packId = addMedicineForm.elements.medicinePack.value;
    let pack = packs.find(ele => ele.value == packId);
    let findBatch = batch.find(ele => ele.pack_id == pack.id);
    addMedicineForm.elements.batchName.value = findBatch.batch;
});

function makeAddMedicineTable() {
    table.innerHTML = "";
    table.innerHTML += `
    <caption>Medicine Table</caption>
    <thead>
        <tr>
            <th>Medicine</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
            <th>Pack</th>
            <th>Batch</th>
            <th>Operation</th>
        </tr>
    </thead>`;
    let a = document.createElement('tbody');
    allData.forEach(ele => {
        a.innerHTML += `<tr id ="addMedicine-${ele.id}">
        <td>${ele.medicineName}</td>
        <td>${ele.quantity}</td>
        <td>${ele.expiryDate}</td>
        <td>${ele.pack}</td>
        <td>${ele.batchName}</td>
        <td><span onclick="editMedicine(this)">edit</span> <span onclick="deleteMedicine(this)">Delete</span></td>
        </tr>`;
    });
    table.appendChild(a);
}
// let setIdInAddMedicine = 0;
let setIdInAddMedicine = 2;
addMedicineForm.addEventListener("submit", (e) => {
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
        setIdInAddMedicine++;
        allData.push({
            id: setIdInAddMedicine,
            medicineName: e.target.medicineName.value.trim(),
            pack: e.target.medicinePack.value,
            quantity: parseInt(e.target.quantity.value),
            selectedDate: e.target.newDate.value,
            selectedDays: daysCount(),
            expiryDate: returnExpiryDate(),
            batchName: e.target.batchName.value
        });
        normalBackground();
        addMedicineForm.reset();
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
    addMedicineForm.elements.newDate.style.display = "block";
    addMedicineForm.elements.allDays.style.display = "none";
});
byDays.addEventListener('change', () => {
    addMedicineForm.elements.newDate.style.display = "block";
    addMedicineForm.elements.allDays.style.display = "block";
});

function daysCount() {
    if (byDate.checked) {
        return false;
    } else if (byDays.checked) {
        return parseInt(addMedicineForm.elements.allDays.value);
    }
}

function returnExpiryDate() {
    let presentDate = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    let selectedDate = new Date(addMedicineForm.elements.newDate.value);
    if (byDate.checked) {
        if (selectedDate.getTime() >= presentDate.getTime()) {
            return addMedicineForm.elements.newDate.value;
        } else {
            alert("Please select a valid date");
            return false;
        }
    } else if (byDays.checked) {
        let newDate = new Date(selectedDate.getTime() + (addMedicineForm.elements.allDays.value * 24 * 60 * 60 * 1000));
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
    addMedicineForm.style.display = 'block';
    addRecord.style.display = 'none';
    addOutRecord.style.display = 'none';
    selectedRow = e.parentElement.parentElement;;
    let a = allData.findIndex(ele => ele.medicineName == selectedRow.children[0].innerText);
    addMedicineForm.elements.medicineName.value = allData[a].medicineName;
    addMedicineForm.elements.medicinePack.value = allData[a].pack;
    addMedicineForm.elements.quantity.value = allData[a].quantity;
    if (typeof allData[a].selectedDays == 'number') {
        byDays.checked = true;
        addMedicineForm.elements.newDate.style.display = "block";
        addMedicineForm.elements.allDays.style.display = "block";
        addMedicineForm.elements.newDate.value = allData[a].selectedDate;
        addMedicineForm.elements.allDays.value = allData[a].selectedDays;
    } else {
        byDate.checked = true;
        addMedicineForm.elements.newDate.style.display = "block";
        addMedicineForm.elements.allDays.style.display = "none";
        addMedicineForm.elements.newDate.value = allData[a].selectedDate;
        addMedicineForm.elements.allDays.value = "";
    }
    addMedicineForm.elements.batchName.value = allData[a].batchName;
}

function updateRows(value) {
    let b = allData.findIndex(ele => ele.medicineName == value.children[0].innerText);
    // Change the quantity when we edit the quantity field in table
    let index = addRecordArray.findIndex(ele => ele.medicineName == addMedicineForm.elements.medicineName.value.toLowerCase().trim());
    if (index != -1) {
        addRecordArray[index].quantity += parseInt(addMedicineForm.elements.quantity.value) - allData[b].quantity
        // addRecordArray[index].quantity = addRecordArray[index].quantity - parseInt(addMedicineForm.elements.quantity.value);
    }
    // Add the editing record to the array 
    allData[b].medicineName = addMedicineForm.elements.medicineName.value.toLowerCase().trim();
    allData[b].pack = addMedicineForm.elements.medicinePack.value;
    allData[b].quantity = parseInt(addMedicineForm.elements.quantity.value);
    allData[b].selectedDate = addMedicineForm.elements.newDate.value;
    allData[b].selectedDays = daysCount();
    allData[b].expiryDate = returnExpiryDate();
    allData[b].batchName = addMedicineForm.elements.batchName.value;
    makeAddMedicineTable();
    makeAddRecordTable();
}

//----------------------------------------------------------------
let suggestion = document.getElementById('suggestion');
let failed1 = document.getElementById('failed1');
let suggestionInOutRecord = document.getElementById('suggestionInOutRecord');
let failed2 = document.getElementById('failed2');
// Get Add Record Form
addRecordBtn.addEventListener('click', (e) => {
    changeBackground();
    addMedicineForm.style.display = 'none';
    addRecord.style.display = 'block';
    addRecord.reset();
    addOutRecord.style.display = 'none';
});
// Get Add Out Record Form
addOutRecordBtn.addEventListener('click', (e) => {
    changeBackground();
    addMedicineForm.style.display = 'none';
    addRecord.style.display = 'none';
    addOutRecord.style.display = 'block';
    addOutRecord.reset();
});
// Print The Add Record Table
function makeAddRecordTable() {
    if (addRecordArray.length != 0) {
        recordTable.innerHTML = "";
        recordTable.innerHTML += `
        <caption>Record Table</caption>
        <thead>
            <tr>
                <th>Medicine Name</th>
                <th>Quantity</th>
                <th>Batch Name</th>
                <th>Quantity</th>
                <th>Selected Item</th>
            </tr>
        </thead>`;
        let a = document.createElement('tbody');
        addRecordArray.forEach(ele => {
            a.innerHTML += `
            <tr id ="addRecord-${ele.id}">
                <td>${ele.medicineName}</td>
                <td>${ele.pack}</td>
                <td>${ele.batch}</td>
                <td>${ele.quantity}</td>
                <td>${ele.selectedItem}</td>
            </tr>
        `;
        });
        recordTable.appendChild(a);
    }
}
// Print Out Record Table
function makeOutRecordTable() {
    if (outRecordArray.length != 0) {
        recordOutTable.innerHTML = "";
        recordOutTable.innerHTML += `
        <caption>Out Record Table</caption>
        <thead>
            <tr>
                <th>Medicine Name</th>
                <th>Removed Quantity</th>
                <th>Selected Item</th>
            </tr>
        </thead>`;
        let a = document.createElement('tbody');
        outRecordArray.forEach(ele => {
            a.innerHTML += `
            <tr id ="out-${ele.id}">
                <td>${ele.medicineName}</td>
                <td>${ele.quantity}</td>
                <td>${ele.selectedItem}</td>
            </tr>
        `;
        });
        recordOutTable.appendChild(a);
    }
}
// Add Record submit event
let setIdInAddRecord = 0;
let clicked = false;
addRecord.addEventListener('submit', (e) => {
    e.preventDefault();
    let a = allData.findIndex(ele => ele.medicineName == e.target.searchMedicine.value.trim().slice(0, e.target.searchMedicine.value.indexOf("|") - 1));
    let b = addRecordArray.findIndex(value => value.medicineName == allData[a].medicineName);
    if (b != -1) {
        addRecordArray[b].quantity += Number(e.target.quantity.value);
        makeAddRecordTable();
        normalBackground();
        clicked = false;
    } else if (failed1.style.display == "none") {
        if (e.target.select1.value != "") {
            document.getElementById('selectRed1').style.display = "none";
            if (clicked) {
                if (e.target.quantity.value != "") {
                    document.getElementById('quantityRed').style.display = "none";
                    setIdInAddRecord++;
                    addRecordArray.push({
                        id: setIdInAddRecord,
                        medicineName: allData[a].medicineName,
                        pack: allData[a].pack,
                        batch: allData[a].batchName,
                        // quantity: Number(e.target.quantity.value) + allData[a].quantity,
                        quantity: Number(e.target.quantity.value),      // Doubt
                        selectedItem: e.target.select1.value
                    });
                    makeAddRecordTable();
                    normalBackground();
                    clicked = false;
                } else {
                    document.getElementById('quantityRed').style.display = "block";
                }
            } else {
                alert("You can not select Value From Suggestion");
            }
        } else {
            document.getElementById('selectRed1').style.display = "block";
        }
    }
    else {
        alert("Invalid Medicine Name");
    }
});
// Give suggestions when we type in input box for add record table
addRecord.elements.searchMedicine.addEventListener('input', (e) => {
    suggestion.innerHTML = "";
    if (allData.length == 0 && e.target.value.trim() != "") {
        failed1.style.display = "block";
    } else if (e.target.value.trim() == "") {
        clicked = false;
        failed1.style.display = "none";
    } else if (e.target.value.trim() != "") {
        allData.forEach(ele => {
            if (ele.medicineName.toLowerCase().includes(e.target.value.toLowerCase().trim().slice(0, indexOfSlesh(e)).trim())) {
                suggestion.style.display = "block";
                failed1.style.display = "none";
                let newEle = document.createElement('p');
                newEle.innerText = ele.medicineName;
                newEle.addEventListener("click", function () {
                    e.target.value = ele.medicineName + " | " + ele.pack + " | " + ele.batchName;
                    addRecord.elements.quantity.value = ele.quantity;
                    suggestion.style.display = "none";
                    clicked = true;
                });
                suggestion.appendChild(newEle);
            } else {
                // clicked = false;
                suggestion.style.display = "none";
                failed1.style.display = "block";
            }
        });
    } else {
        clicked = false;
    }
});
// Check (|) index is -1 or not
function indexOfSlesh(e) {
    let a = e.target.value.indexOf("|");
    if (a == -1) {
        return e.target.value.length;
    } else {
        return a;
    }
}

// Add Out Record button submit event
addOutRecord.addEventListener('submit', (e) => {
    e.preventDefault();
    let a = addRecordArray.findIndex(ele => ele.medicineName == e.target.searchRecordsAOR.value.toLowerCase().trim());
    let b = outRecordArray.findIndex(ele => ele.medicineName == e.target.searchRecordsAOR.value.toLowerCase().trim());
    if (b != -1) {
        addRecordArray[a].quantity = addRecordArray[a].quantity - Number(e.target.quantity.value);
        outRecordArray[b].quantity += Number(e.target.quantity.value);
        makeOutRecordTable();
        makeAddRecordTable();
        normalBackground();
    } else if (e.target.searchRecordsAOR.value.trim() != "") {
        document.getElementById('failed2').style.display = "none";
        if (e.target.select2.value != "") {
            document.getElementById('selectRed2').style.display = "none";
            if (e.target.quantity.value <= Number(addRecordArray[a].quantity) && e.target.quantity.value != "") {
                document.getElementById('foQuantity').style.display = 'none';
                addRecordArray[a].quantity = addRecordArray[a].quantity - Number(e.target.quantity.value);
                // addRecordArray[a].selectedItem = e.target.select2.value;
                outRecordArray.push(
                    {
                        medicineName: addRecordArray[a].medicineName,
                        quantity: Number(e.target.quantity.value),
                        selectedItem: e.target.select2.value,
                    }
                )
                makeOutRecordTable();
                makeAddRecordTable();
                normalBackground();
            } else {
                document.getElementById('foQuantity').style.display = 'block';
            }
        } else {
            document.getElementById('selectRed2').style.display = "block";
        }
    } else {
        document.getElementById('failed2').style.display = "block";
    }
});
// Display none the all red lines
function blockRed() {
    red.forEach(ele => ele.style.display = "none");
}
// For display none of the suggestions when we focus out the input field
document.addEventListener('click', (e) => {
    if (e.target.id == suggestion && e.target.id == suggestionInOutRecord) {
        suggestion.style.display = "block";
        suggestionInOutRecord.style.display = "block";
    } else {
        suggestion.style.display = "none";
        suggestionInOutRecord.style.display = "none";
    }
});

// Give suggestions when we type in input box for out record table
addOutRecord.elements.searchRecordsAOR.addEventListener('input', (e) => {
    suggestionInOutRecord.innerHTML = "";
    if (addRecordArray.length == 0 && e.target.value.trim() != "") {
        failed2.style.display = "block";
    } else if (e.target.value.trim() == "") {
        failed2.style.display = "none";
    } else if (e.target.value.trim() != "") {
        addRecordArray.forEach(ele => {
            if (ele.medicineName.toLowerCase().includes(e.target.value.toLowerCase().trim().slice(0, indexOfSlesh(e)).trim())) {
                suggestionInOutRecord.style.display = "block";
                failed2.style.display = "none";
                let newEle = document.createElement('p');
                newEle.innerText = ele.medicineName;
                newEle.addEventListener("click", function () {
                    e.target.value = ele.medicineName;
                    suggestionInOutRecord.style.display = "none";
                });
                suggestionInOutRecord.appendChild(newEle);
            } else {
                suggestionInOutRecord.style.display = "none";
                failed2.style.display = "block";
            }
        });
    }
});