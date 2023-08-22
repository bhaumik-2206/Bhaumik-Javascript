// function checkAnadrams(str1, str2) {
//     str1 = str1.split("");
//     str2 = str2.split("");
//     let a = str1.map(ele => {
//         if (str1.includes(ele) && str2.includes(ele)) {
//             return true;
//         } else {
//             return false;
//         }
//     });
//     return a.every(a => a === true);
// }
// console.log(checkAnadrams("army", "mary"));
// console.log(checkAnadrams("hello", "helle"));

// function checkAnadrams(str1, str2) {
//     str1 = str1.split("");
//     str2 = str2.split("");
//     let a = str1.map(ele => str1.includes(ele) && str2.includes(ele));
//     return a.every(a => a === true);
// }
// console.log(checkAnadrams("army", "mary"));
// console.log(checkAnadrams("hello", "helle"));

// const str = 'Maryd';
// const str2 = "armdy";
// console.log(str2.toLocaleLowerCase().split("").sort().join("") === str.toLocaleLowerCase().split("").sort().join(""))

const str = 'Maryd';
const str2 = "armdy";
console.log(str2.toLocaleLowerCase().split("").sort().join("") === str.toLocaleLowerCase().split("").sort().join(""));