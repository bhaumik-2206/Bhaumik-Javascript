// 21
// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(source);

// 22
// function assign(obj1, obj2) {
//     let pass_object = { ...obj1, ...obj2 };
//     return pass_object;
// }
// let obj3 = {
//     a: 10,
//     b: 20
// }
// let obj4 = {
//     b: 30,
//     c: 40
// }
// console.log(assign(obj3, obj4));

// for (let i = 0; 1 < 5; i++) {
//     console.log(i);
//     break;
// }

// for (let i = 1; i <= 5; i++) {
//     let pattern = "";
//     for (let j = 1; j <= 5; j++) {
//         pattern += "* ";
//     }
//     console.log(pattern);
// }

// for (let i = 0; i < 5; i++) {
//     let pattern = "";
//     for (let j = 0; j <= i; j++) {
//         pattern += "* "
//     }
//     console.log(pattern);
// }

// for (let i = 5; i >= 1; i--) {
//     let pattern = "";
//     for (let j = i; j >= 1; j--) {
//         pattern += "* "
//     }
//     console.log(pattern);
// }
function isStringContainsNum(pass_string) {
    let a = 0;
    for (let i = 0; i < pass_string.length; i++) {
        if (pass_string[i] >= 0 && pass_string[i] <= 9) {
            a++;
        }
    }
    return a;
}
let one = isStringContainsNum("assad");
let two = isStringContainsNum("agfh10");
let three = isStringContainsNum("ag12sdf4");
let four = isStringContainsNum("11154");
console.log(one);
console.log(two);
console.log(three);
console.log(four);