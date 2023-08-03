let arr = [
    { type: "game", value: 30 },
    { type: "audio", value: 25 },
    { type: "video", value: 20 },
    { type: "audio", value: 25 },
    { type: "game", value: 20 },
    { type: "other", value: 40 },
    { type: "audio", value: 20 },
];
let a = [];
arr.forEach(value => {
    if (a.find(e => e.type == value.type)) {
        a.map(ele => {
            if (ele.type == value.type) {
                ele.value += value.value;
            }
        });
    } else {
        a.push(value);
    }
});
console.log(a);