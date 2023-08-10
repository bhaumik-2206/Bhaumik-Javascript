let packs = [
    { id: 1, value: "pack - 1" },
    { id: 2, value: "pack - 2" },
    { id: 3, value: "pack - 3" },
    { id: 4, value: "pack - 4" },
    { id: 5, value: "pack - 5" },
    { id: 6, value: "pack - 6" },
    { id: 7, value: "pack - 7" },
    { id: 8, value: "pack - 8" },
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
    option.value = ele.id;
    option.innerText = ele.value;
    packDropdown.appendChild(option);
});


let batchInput = document.getElementById('batch-input');
batch.forEach(ele => {
    let option = document.createElement('option');
    option.value = ele.pack_id;
    option.innerText = ele.batch;
    batchInput.appendChild(option);
});


// Create element on by date
let byDate = document.getElementById('by-date');
let addValues = document.getElementById('addValues');
function forbyDate() {
    addValues.innerHTML = "";
    let byDate = document.getElementById('by-date');
    if (byDate.checked) {
        let newDate = document.createElement('input');
        newDate.setAttribute('type', 'date');
        addValues.appendChild(newDate);
    }
}
byDate.addEventListener('change', forbyDate);


// Create element on by days
let byDays = document.getElementById('by-days');
function forbyDays() {
    addValues.innerHTML = "";
    let byDays = document.getElementById('by-days');
    if (byDays.checked) {
        let newDate = document.createElement('input');
        newDate.setAttribute('type', 'date');
        addValues.appendChild(newDate);
        let selDays = document.createElement('input');
        selDays.setAttribute('type', 'number');
        selDays.setAttribute('min', '1');
        addValues.appendChild(selDays);
    }
}
byDays.addEventListener('change', forbyDays);




let form = document.getElementById('form');
let mainBtn = document.getElementById('mainBtn');
let table = document.getElementById('table');
let medicineText = document.getElementById('medicine-text');
let quantity = document.getElementById('quantity');
let packId = 0;

mainBtn.addEventListener('click', () => {
    form.style.display = 'block';
    form.style.opacity = '1';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (medicineText.value.trim() !== '') {
        let newTr = document.createElement('tr');
        newTr.innerHTML = `
            <td>${medicineText.value}</td>
            <td>${quantity.value}</td>
            <td>${addValues.innerHTML}</td>
            <td>${packDropdown.value}</td>
            <td>${batchInput.innerText}</td>
            <td><span onclick="editTask(this)">edit</span> <span onclick="deleteTask(this)">Delete</span></td>`;
        table.appendChild(newTr);
        console.log(packDropdown.children);
        form.style.display = 'none';
        console.log(packDropdown.value);
    }
    resetAllTheValue();
});

packDropdown.addEventListener("change", (e) => {
    e.preventDefault();
    packId = packDropdown.value;
    if (packId !== "") {
        let pack = packs.find(ele => ele.id == packId);
        let findBatch = batch.find(ele => ele.pack_id == pack.id);
        batchInput.value = findBatch.pack_id;
        batchInput.disabled = false;
        console.log(findBatch);
    }
});

function resetAllTheValue() {
    medicineText.value = "";
    packDropdown.value = "";
    quantity.value = "";
    byDate.checked = false;
    byDays.checked = false;
    addValues.innerHTML = "";
    batchInput.value = "";
}

function deleteTask(e) {
    let a = confirm("Are You Sure To Delete Data?");
    if (a) {
        let row = e.parentElement.parentElement;
        row.remove();
    }
}