let friends = [
    {
        name: "Anna",
        books: ['bible', "Harry Potter"],
        age: 21
    },
    {
        name: "Bob",
        books: ['war', "romeo"],
        age: 21
    },
    {
        name: "Anna",
        books: ['the lord', "shining"],
        age: 21
    },
];
function returnBooks(arr) {
    return arr.map((ele) => ele.books).flat();
}
console.log(returnBooks(friends));