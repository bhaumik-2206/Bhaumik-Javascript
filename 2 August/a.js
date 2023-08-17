let arr = [
    { type: "game", value: 30 },
    { type: "audio", value: 25 },
    { type: "video", value: 20 },
    { type: "audio", value: 25 },
    { type: "game", value: 20 },
    { type: "other", value: 40 },
    { type: "audio", value: 20 },
    { type: "video", value: 50 },
    { type: "game", value: 25 },
    { type: "other", value: 30 },
];
let a = JSON.parse(JSON.stringify(arr));
// let mainArray = [];
// a.forEach(ele => {
//     let currentItem = mainArray.findIndex(obj => obj.type === ele.type);
//     if (currentItem != -1) {
//         mainArray[currentItem].value += ele.value;
//     } else {
//         mainArray.push(ele);
//     }
// });
// console.log(mainArray);
// console.log(arr);
console.log(arr);
function minusTheValueOfTable(minusValue, arr) {
    arr.forEach(ele => {
        if (ele.type == "game") {
            if (ele.value <= minusValue) {
                minusValue -= ele.value;
                ele.value = 0;
            } else if (ele.value > minusValue) {
                ele.value -= minusValue;
                minusValue = 0;
            }
        }
    });
    console.log(arr);
    return arr;
}
minusTheValueOfTable(40, arr);

// let b = {};
// arr.forEach(ele => {
//     if (b[ele.type]) {
//         b[ele.type] += ele.value;
//     } else {
//         b[ele.type] = ele.value;
//     }
// });
// console.log(b);