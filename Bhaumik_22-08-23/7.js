function isPalidrome(string) {
    let a = string.split('').reverse().join("");
    return string === a ? true : false;
}
console.log(isPalidrome('level'));
console.log(isPalidrome('Hello'));