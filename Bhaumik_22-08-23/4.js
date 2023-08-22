// let arr = [1, 1, 2, 3, 4, 2, 5, 6, 7, 4];
// function findNumber(arr) {
//     let a = [];
//     let b = arr.filter(ele => {
//         if (a.includes(ele)) {
//             return ele;
//         } else {
//             a.push(ele);
//         }
//     });
//     return b;
// }
// console.log(findNumber(arr));

let arr = [1, 1, 2, 3, 4, 2, 5, 6, 6, 7, 4];
let duplicates = [];
arr.forEach((a, i, ar) => {
    if (ar.indexOf(a) !== i)
        duplicates.push(a);
})
console.log(duplicates, "duplicates");