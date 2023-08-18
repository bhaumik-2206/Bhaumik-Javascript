let addMedicineForm = document.getElementById('addMedicineForm');
let byDate = document.getElementById('by-date');
let byDays = document.getElementById('by-days');
let addRecord = document.getElementById('addRecord');
let addOutRecord = document.getElementById('addOutRecord');
let suggestion = document.getElementById('suggestion');
let suggestionInOutRecord = document.getElementById('suggestionInOutRecord');
let selectedRow = null;
let clicked = false;
let allData = [];
let addRecordArray = [];
let outRecordArray = [];
let additionArray = [];
let setIdInAddMedicine = 0;
let setIdInAddRecord = 0;
let setIdInOutTable = 0;
document.querySelectorAll('form').forEach(ele => ele.classList.add('none'));
noneRed();
// Get all the array which is stored in local storage if not get it will store empty array
window.addEventListener('load', () => {
    allData = getData('medicineData') || [];
    addRecordArray = getData('recordData') || [];
    outRecordArray = getData('redordOutData') || [];
    additionArray = getData('additionalData') || [];
    setIdInAddMedicine = getData('allDataId') || 0;
    setIdInAddRecord = getData('recordId') || 0;
    setIdInOutTable = getData('outId') || 0;
    if (allData.length > 0) makeAddMedicineTable();
    if (addRecordArray.length > 0) makeAddRecordTable();
    if (outRecordArray.length > 0) makeOutRecordTable();
});
// Add Medicine click event
document.getElementById('addMedicineBtn').addEventListener('click', () => {
    changeBackground();
    addMedicineForm.style.display = 'block';
    addRecord.style.display = 'none';
    addOutRecord.style.display = 'none';
    addMedicineForm.reset();
});
// Blur background
function changeBackground() {
    document.querySelectorAll('table').forEach(ele => ele.style.opacity = ".5");
    document.getElementById('mainBtn').style.opacity = ".5";
    addMedicineForm.elements.formBtn.innerText = "Add Medicine";
    addMedicineForm.elements.newDate.style.display = "none";
    addMedicineForm.elements.allDays.style.display = "none";
    removeButtonClass();
}
// Normal Background and remove the form
function normalBackground() {
    document.querySelectorAll('table').forEach(ele => ele.style.opacity = "1");
    document.getElementById('mainBtn').style.opacity = 1;
    selectedRow = null;
    addMedicineForm.style.display = 'none';
    addRecord.style.display = 'none';
    addOutRecord.style.display = 'none';
    addButtonClass();
    noneRed();
}
// Click on cancel button to cancel the form
document.querySelectorAll('.closeBtn').forEach(ele => {
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
// Add Batch value from pack value
addMedicineForm.elements.medicinePack.addEventListener('change', (e) => {
    let pack = packs.find(ele => ele.value == e.target.value);
    let findBatch = batch.find(ele => ele.pack_id == pack.id);
    addMedicineForm.elements.batchName.value = findBatch.batch;
});
// Make add medicine table
function makeAddMedicineTable() {
    if (allData.length > 0) {
        document.getElementById('table').innerHTML = "";
        document.getElementById('table').innerHTML += `<caption>Medicine Table</caption>
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
            <td><button class="sameClass button" onclick="editMedicine(this)">edit</button> <button class="sameClass button" onclick="deleteMedicine(this)">Delete</button></td>
        </tr>`;
        });
        document.getElementById('table').appendChild(a);
        setData('medicineData', allData);
    }
}
addMedicineForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let a = allData.findIndex(ele => ele.medicineName == e.target.medicineName.value.toLowerCase().trim());
    if (selectedRow) {
        let b = allData.findIndex(ele => ele.medicineName == selectedRow.children[0].innerText.toLowerCase().trim());
        if ((a != -1 && a != b)) {
            alert("Name already Exists");
        } else {
            updateRows(selectedRow);
            normalBackground();
        }
    }
    else if (e.target.medicineName.value.trim() != "" && a == -1 && returnExpiryDate()) {
        setIdInAddMedicine++;
        allData.push({
            id: `addMedicine-${setIdInAddMedicine}`,
            medicineName: e.target.medicineName.value.trim(),
            pack: e.target.medicinePack.value,
            quantity: parseInt(e.target.quantity.value),
            selectedDate: e.target.newDate.value,
            selectedDays: daysCount(),
            expiryDate: returnExpiryDate(),
            batchName: e.target.batchName.value
        });
        makeAddMedicineTable();
        normalBackground();
        showNotification(`${e.target.medicineName.value.trim()} Added`);
        addMedicineForm.reset();
        setData("allDataId", setIdInAddMedicine);
    } else {
        alert("Please enter Valid Medicine Name");
    }
});
// Delete the medicine
function deleteMedicine(e) {
    if (confirm("Are You Sure To Delete Data?")) {
        setIdInAddMedicine--;
        let row = e.parentElement.parentElement;
        row.remove();
        showNotification("Medicine Delete");
        let b = allData.findIndex(ele => ele.medicineName == row.children[0].medicineName);
        allData.splice((b - 1), 1);
        setData('medicineData', allData);
        setData('allDataId', setIdInAddMedicine);
    }
}
// Show Notification
function showNotification(value) {
    let newp = document.createElement('p');
    newp.innerHTML = value;
    document.getElementById('noti').appendChild(newp);
    setTimeout(() => {
        newp.remove();
    }, 4000);
}
// add input date when by date is clicked
byDate.addEventListener('change', () => {
    addMedicineForm.elements.newDate.style.display = "block";
    addMedicineForm.elements.allDays.style.display = "none";
});
// add input date and input number(for days) when by days is clicked
byDays.addEventListener('change', () => {
    addMedicineForm.elements.newDate.style.display = "block";
    addMedicineForm.elements.allDays.style.display = "block";
});
// Count the days it is false or true(bydate selected or by days)
function daysCount() {
    if (byDate.checked) {
        return false;
    } else if (byDays.checked) {
        return parseInt(addMedicineForm.elements.allDays.value);
    }
}
// Return expiry date from form by dates and by days both
function returnExpiryDate() {
    let presentDate = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    let selectedDate = new Date(addMedicineForm.elements.newDate.value);
    if (byDate.checked) {
        if (selectedDate.getTime() >= presentDate.getTime()) {
            return addMedicineForm.elements.newDate.value;
        }
    } else if (byDays.checked) {
        let newDate = new Date(selectedDate.getTime() + (addMedicineForm.elements.allDays.value * 24 * 60 * 60 * 1000));
        if (newDate.getTime() >= presentDate.getTime()) {
            let month = (newDate.getMonth() + 1).toLocaleString().padStart(2, '0');
            let returnDate = newDate.getDate().toLocaleString().padStart(2, '0');
            return `${newDate.getFullYear()}-${month}-${returnDate}`;
        }
    }
    alert("Please select a valid date");
    return false;

}
// Edit button onclick event 
function editMedicine(e) {
    changeBackground();
    addMedicineForm.style.display = 'block';
    addRecord.style.display = 'none';
    addOutRecord.style.display = 'none';
    selectedRow = e.parentElement.parentElement;
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
        addMedicineForm.elements.allDays.value = 0;
    }
    byDate.addEventListener("click", () => addMedicineForm.elements.newDate.value = allData[a].expiryDate);
    byDays.addEventListener("click", () => addMedicineForm.elements.newDate.value = allData[a].selectedDate);
    addMedicineForm.elements.batchName.value = allData[a].batchName;
}
// Update the medicine when user edit the medicine
function updateRows(value) {
    let b = allData.findIndex(ele => ele.medicineName == value.children[0].innerText);
    allData[b].medicineName = addMedicineForm.elements.medicineName.value.toLowerCase().trim();
    allData[b].pack = addMedicineForm.elements.medicinePack.value;
    allData[b].quantity = parseInt(addMedicineForm.elements.quantity.value);
    allData[b].selectedDate = addMedicineForm.elements.newDate.value;
    allData[b].selectedDays = daysCount();
    allData[b].expiryDate = returnExpiryDate();
    allData[b].batchName = addMedicineForm.elements.batchName.value;
    makeAddMedicineTable();
    makeAddRecordTable();
    showNotification(`${allData[b].medicineName} Updated`);
}

//----------------------------------------------------------------
// Get Add Record Form
document.getElementById('addRecordBtn').addEventListener('click', (e) => {
    changeBackground();
    addMedicineForm.style.display = 'none';
    addRecord.style.display = 'block';
    addRecord.reset();
    addOutRecord.style.display = 'none';
});
// Get Add Out Record Form
document.getElementById('addOutRecordBtn').addEventListener('click', (e) => {
    changeBackground();
    addMedicineForm.style.display = 'none';
    addRecord.style.display = 'none';
    addOutRecord.style.display = 'block';
    addOutRecord.reset();
});
// Print The Add Record Table
function makeAddRecordTable() {
    if (addRecordArray.length > 0) {
        document.getElementById('recordTable').innerHTML = "";
        document.getElementById('recordTable').innerHTML += `<caption>Record Table</caption>
        <thead>
            <tr>
                <th>Medicine Name</th>
                <th>Date</th>
                <th>Quantity</th>
                <th>Batch Name</th>
                <th>Quantity</th>
                <th>Selected Item</th>
            </tr>
        </thead>`;
        let a = document.createElement('tbody');
        addRecordArray.forEach(ele => {
            a.innerHTML += `<tr id ="addRecord-${ele.id}">
                <td>${ele.medicineName}</td>
                <td>${ele.date}</td>
                <td>${ele.pack}</td>
                <td>${ele.batch}</td>
                <td>${ele.quantity}</td>
                <td>${ele.selectedItem}</td>
            </tr>`;
        });
        document.getElementById('recordTable').appendChild(a);
        setData("recordData", addRecordArray);
    }
}
// Print Out Record Table
function makeOutRecordTable() {
    if (outRecordArray.length > 0) {
        document.getElementById('recordOutTable').innerHTML = "";
        document.getElementById('recordOutTable').innerHTML += `<caption>Out Record Table</caption>
        <thead>
            <tr>
                <th>Medicine Name</th>
                <th>Date</th>
                <th>Removed Quantity</th>
                <th>Selected Item</th>
            </tr>
        </thead>`;
        let a = document.createElement('tbody');
        outRecordArray.forEach(ele => {
            a.innerHTML += `<tr id ="out-${ele.id}">
                <td>${ele.medicineName}</td>
                <td>${ele.date}</td>
                <td>${ele.quantity}</td>
                <td>${ele.selectedItem}</td>
            </tr>`;
        });
        document.getElementById('recordOutTable').appendChild(a);
        setData("redordOutData", outRecordArray);
    }
}
// Give suggestions when we type in input box for add record table
addRecord.elements.searchMedicine.addEventListener('input', (e) => {
    giveSuggestion(e, suggestion, allData, document.getElementById('failed1'));
});
// Add Record submit event
addRecord.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.searchMedicine.value.trim() == "") {
        document.getElementById('failed1').style.display = "block";
        return;
    }
    if (e.target.select1.value == "") {
        document.getElementById('selectRed1').style.display = "block";
        return;
    }
    if (!clicked) {
        showNotification("Please Select The Value From Suggesstion");
        return;
    }
    if (e.target.quantity.value <= 0) {
        showNotification("Quantity Be Must More Than Zero");
        return;
    }
    let a = allData.findIndex(ele => ele.medicineName.toLowerCase() == e.target.searchMedicine.value.trim().slice(0, e.target.searchMedicine.value.indexOf("|") - 1));
    if (e.target.quantity.value != "" && e.target.quantity.value <= allData[a].quantity) {
        document.getElementById('quantityRed').style.display = "none";
        setIdInAddRecord++;
        addRecordArray.push(
            {
                id: `addRecord-${setIdInAddRecord}`,
                date: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`,
                medicineName: allData[a].medicineName,
                pack: allData[a].pack,
                batch: allData[a].batchName,
                quantity: Number(e.target.quantity.value),
                selectedItem: e.target.select1.value
            }
        );
        allData[a].quantity -= Number(e.target.quantity.value);
        additionMedicineQuantityArray(JSON.parse(JSON.stringify(addRecordArray)));
        makeAddRecordTable();
        makeAddMedicineTable();
        normalBackground();
        clicked = false;
        showNotification(`${Number(e.target.quantity.value)} ${addRecordArray[a].medicineName} Buy`);
        setData("additionalData", additionArray);
        setData("recordId", setIdInAddRecord);
    } else {
        showNotification(`There are only ${allData[a].quantity} Quantity`)
        document.getElementById('quantityRed').style.display = "block";
    }
});
// Check (|) index is -1 or not
function indexOfSlesh(e) {
    let a = e.target.value.indexOf("|");
    if (a == -1) {
        return;
    } else {
        return a;
    }
}
// Give suggestions when we type in input box for out record table
addOutRecord.elements.searchRecordsAOR.addEventListener('input', (e) => {
    giveSuggestion(e, suggestionInOutRecord, additionArray, document.getElementById('failed2'));
});
// Add Out Record button submit event
addOutRecord.addEventListener('submit', (e) => {
    e.preventDefault();
    let a = additionArray.findIndex(ele => ele.medicineName.toLowerCase() == e.target.searchRecordsAOR.value.toLowerCase().trim());
    if (e.target.searchRecordsAOR.value.trim() == "") {
        document.getElementById('failed2').style.display = "block";
        return;
    }
    if (e.target.select2.value == "") {
        document.getElementById('selectRed2').style.display = "block";
        return;
    }
    if (!clicked) {
        showNotification("Please Select The Value From Suggesstion");
        return;
    }
    if (e.target.quantity.value <= 0) {
        showNotification("Quantity Be Must More Than Zero");
        return;
    }
    if (e.target.quantity.value <= Number(additionArray[a].quantity) && e.target.quantity.value != "" && e.target.quantity.value > 0) {
        document.getElementById('foQuantity').style.display = 'none';
        additionArray[a].quantity = additionArray[a].quantity - Number(e.target.quantity.value);
        setIdInOutTable++;
        outRecordArray.push(
            {
                id: `out-${setIdInOutTable}`,
                medicineName: additionArray[a].medicineName,
                date: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`,
                quantity: Number(e.target.quantity.value),
                selectedItem: e.target.select2.value,
            }
        )
        minusTheValueOfTable(Number(e.target.quantity.value), addRecordArray, additionArray[a].medicineName);
        makeOutRecordTable();
        makeAddRecordTable();
        normalBackground();
        showNotification(`${Number(e.target.quantity.value)} ${additionArray[a].medicineName} Sell`);
        setData("additionalData", additionArray);
        setData("outId", setIdInOutTable);
    } else {
        showNotification(`There are only ${additionArray[a].quantity} Quantity`)
        document.getElementById('foQuantity').style.display = 'block';
    }
});
// Display none the all red lines
function noneRed() {
    document.querySelectorAll('.red').forEach(ele => ele.style.display = 'none');
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
function giveSuggestion(e, suggestion, allData, failed) {
    clicked = false;
    suggestion.innerHTML = "";
    let a = allData.findIndex(ele => ele.medicineName.toLowerCase().includes(e.target.value.toLowerCase().trim().slice(0, indexOfSlesh(e)).trim()));
    if (allData.length == 0 && e.target.value.trim() != "") {
        failed.style.display = "block";
    } else if (e.target.value.trim() == "") {
        clicked = false;
        failed.style.display = "none";
    } else if (e.target.value.trim() != "" && a != -1) {
        allData.forEach(ele => {
            if (ele.medicineName.toLowerCase().includes(e.target.value.toLowerCase().trim().slice(0, indexOfSlesh(e)).trim())) {
                suggestion.style.display = "block";
                failed.style.display = "none";
                let newEle = document.createElement('p');
                newEle.innerText = ele.medicineName;
                newEle.addEventListener("click", () => {
                    if (ele.id.startsWith("addMedicine")) {
                        e.target.value = ele.medicineName + " | " + ele.pack + " | " + ele.batchName;
                        addRecord.elements.quantity.value = ele.quantity;
                    } else if (ele.id.startsWith("addRecord")) {
                        e.target.value = ele.medicineName;
                    }
                    suggestion.style.display = "none";
                    clicked = true;
                });
                suggestion.appendChild(newEle);
            }
        });
    } else {
        suggestion.style.display = "none";
        failed.style.display = "block";
        clicked = false;
    }
}
// Make e new of object with addition of quantity and return a additional array od addRecordArray
function additionMedicineQuantityArray(arr) {
    additionArray = [];
    arr.forEach(ele => {
        let currentItem = additionArray.findIndex(obj => obj.medicineName === ele.medicineName);
        if (currentItem != -1) {
            additionArray[currentItem].quantity += ele.quantity;
        } else {
            additionArray.push(ele);
        }
    });
    setData("additionalData", additionArray);
    return additionArray;
}
// Subtract the quantity from the existing array (and table also) if the quantity less more than first match medicine name then it will subtract from next match medicine.
function minusTheValueOfTable(minusValue, arr, checkName) {
    arr.forEach(ele => {
        if (ele.medicineName == checkName) {
            if (ele.quantity <= minusValue) {
                minusValue -= ele.quantity;
                ele.quantity = 0;
            } else if (ele.quantity > minusValue) {
                ele.quantity -= minusValue;
                minusValue = 0;
            }
        }
    });
    return arr;
}
// Disabled the button when we click on the any button and open any form model
function removeButtonClass() {
    document.querySelectorAll('.sameClass').forEach(ele => {
        ele.classList.remove('button');
        ele.disabled = true;
    });
}
// Enable the button when form is submitted and user clicks on close button
function addButtonClass() {
    document.querySelectorAll('.sameClass').forEach(ele => {
        ele.classList.add('button');
        ele.disabled = false;
    });
}
// Set the data in local storage with stored name name and stored value
function setData(setName, arrName) {
    localStorage.setItem(setName, JSON.stringify(arrName));
}
// Get the data in local storage with stored name
function getData(setName) {
    const storedData = localStorage.getItem(setName);
    return JSON.parse(storedData);
}
document.querySelectorAll('.add').forEach(ele => ele.classList.add('none'));        // Display None all failed required which is block when any field is missing or wrong



// Give suggestions when we type in input box for add record table
// addRecord.elements.searchMedicine.addEventListener('input', (e) => {
//     clicked = false;
//     suggestion.innerHTML = "";
//     if (allData.length == 0 && e.target.value.trim() != "") {
//         failed1.style.display = "block";
//     } else if (e.target.value.trim() == "") {
//         clicked = false;
//         failed1.style.display = "none";
//     } else if (e.target.value.trim() != "") {
//         allData.forEach(ele => {
//             if (ele.medicineName.toLowerCase().includes(e.target.value.toLowerCase().trim().slice(0, indexOfSlesh(e)).trim())) {
//                 suggestion.style.display = "block";
//                 failed1.style.display = "none";
//                 let newEle = document.createElement('p');
//                 newEle.innerText = ele.medicineName;
//                 newEle.addEventListener("click", function () {
//                     e.target.value = ele.medicineName + " | " + ele.pack + " | " + ele.batchName;
//                     addRecord.elements.quantity.value = ele.quantity;
//                     suggestion.style.display = "none";
//                     clicked = true;
//                 });
//                 suggestion.appendChild(newEle);
//             } else {
//                 // clicked = false;
//                 suggestion.style.display = "none";
//                 failed1.style.display = "block";
//             }
//         });
//     } else {
//         clicked = false;
//     }
// });
// Give suggestions when we type in input box for out record table
// addOutRecord.elements.searchRecordsAOR.addEventListener('input', (e) => {
//     suggestionInOutRecord.innerHTML = "";
//     if (addRecordArray.length == 0 && e.target.value.trim() != "") {
//         failed2.style.display = "block";
//     } else if (e.target.value.trim() != "") {
//         additionArray.forEach(ele => {
//             if (ele.medicineName.toLowerCase().includes(e.target.value.toLowerCase().trim().slice(0, indexOfSlesh(e)).trim())) {
//                 suggestionInOutRecord.style.display = "block";
//                 failed2.style.display = "none";
//                 let newEle = document.createElement('p');
//                 newEle.innerText = ele.medicineName;
//                 newEle.addEventListener("click", function () {
//                     e.target.value = ele.medicineName;
//                     suggestionInOutRecord.style.display = "none";
//                 });
//                 suggestionInOutRecord.appendChild(newEle);
//             } else {
//                 suggestionInOutRecord.style.display = "none";
//                 failed2.style.display = "block";
//             }
//         });
//     } else {
//         failed2.style.display = "none";
//     }
// });