let string = "This is a string";
function getCharacter(string) {
    let a = string.split(" ");
    let b = a.reduce((acc, cur) => {
        if (cur.length > acc) {
            acc = cur.length;
        }
        return acc;
    }, 0);
    let c = [];
    for (let i = 0; i < b; i++) {
        c.push(a.map(ele => ele.charAt(i)).join(""));
    }
    return c;
}
console.log(getCharacter(string));