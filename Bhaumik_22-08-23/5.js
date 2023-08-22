function createBase(num) {
    return function addSix(add) {
        console.log(num + add);
    }
}
let addSix = createBase(6);
addSix(10);
addSix(21);