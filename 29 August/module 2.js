// export function printAllData(array , table) {
//     table.innerHTML = "";
//     if(array.length > 0){
//         table.innerHTML += `
//         <tr>
//             <th>fname</th>
//             <th>lname</th>
//         </tr>`;
//         array.forEach(ele=>{
//             table.innerHTML += `
//             <tr>
//                 <td>${ele.fname}</td>
//                 <td>${ele.lname}</td>
//             </tr>`;
//         });
//     }
// }

// export function checkNameOfThing(arr, name) {
//     return arr.filter(ele => ele.category.toLowerCase().trim().includes(name.toLowerCase().trim()));
// }


export function printData(arr, table) {
    table.innerHTML = "";
    if (arr.length > 0) {
        table.innerHTML += `
            <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>`;
        arr.forEach(ele => {
            table.innerHTML += `
            <tr>
                <td>${ele.item}</td>
                <td>${ele.quantity}</td>
                <td>${ele.price}</td>
                <td>${ele.total}</td>
            </tr>`;
        });
    }
}