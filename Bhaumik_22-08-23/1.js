let arr = [10, 102, 20, 30, 10];
function returnLargestElement(arr, n) {
    arr.sort((a, b) => a - b);
    return arr[(arr.length) - n];
}
console.log(returnLargestElement(arr, 3));