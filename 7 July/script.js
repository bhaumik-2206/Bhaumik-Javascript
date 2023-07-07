// const employees = [
//     {
//         id: 1,
//         name: 'Raj Bundela',
//         department: 'Marketing',
//         salary: 50000,
//         active: true,
//     },
//     {
//         id: 2,
//         name: 'Bhaumik Panchal',
//         department: 'Sales',
//         salary: 60000,
//         active: true,
//     },
//     {
//         id: 3,
//         name: 'Vivek Panchal',
//         department: 'Finance',
//         salary: 70000,
//         active: false,
//     },
//     {
//         id: 4,
//         name: 'Pinki Panchal',
//         department: 'HR',
//         salary: 55000,
//         active: true,
//     },
// ];

// Example 3: Map the names of all employees and convert them to uppercase
// function nameUpperCase(arr) {
//     let nameUppercase = arr.map(value => value.name.toUpperCase());
//     return nameUppercase;
// }
// console.log(nameUpperCase(employees));


// let arr = [1, 2, 3, [4, 5, 6], [6, 7[8, 67]],30];
// console.log(arr[3].length);




// let string = "Every developer likes to mix kubernetes and javascript";
// function diffArray(string) {
//     let a = string.split(" ");
//     let maxLength = a.reduce((acc, cur) => acc > cur.length ? acc.length : cur.length,0);
//     let empty = [];
//     for (let j = 0; j < maxLength; j++) {
//         let b = a.reduce((acc, cur, i, array) => {
//             for (let i = 0; i < array.length; i++) {
//                 acc.push(cur.charAt(j));
//                 return acc;
//             }
//         }, []);
//         empty.push(b.join(""));
//     }
//     return empty;
// }
// console.log(diffArray(string));

