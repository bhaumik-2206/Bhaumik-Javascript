// const employees = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
//     { name: "David", salary: 70000, department: "BCA" },
// ];

// let result = employees.reduce((acc, cur) => {
//     let keyName = cur.department;
//     if (acc[keyName] == null) {
//         acc[keyName] = [];
//     }
//     acc[keyName].push(cur);
//     return acc;
// }, {});
// console.log(result);


// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, cur) => acc * cur);
// console.log(sum);


// const words = ['apple', 'banana', 'cherry', 'date'];
// const minLength = words.reduce((min, current) => Math.min(min, current.length), Infinity);
// console.log(minLength);


// let arrObject = [{ a: 10 }, { a: 20, b: 20 }, { b: 30 }, { a: 20, b: 30, c: 40 }];
// let result = arrObject.sort((a, c) => {
//     return Object.values(a).length - Object.values(c).length;
// });
// console.log(result);


// let arr = [{ a: 10, b: 20 }, { c: 30, d: 40 }];
// let result = arr.reduce((a,c)=>{
//     return Object.assign(a,c);
// });
// console.log(result);
// let result = arr.reduce((a, c) => {
//     return { ...a, ...c };
// }, {});
// console.log(result);

// let arr1 = [12, 100, 10, 1, 56, 34];
// let arr2 = arr1.sort((a, c) => a - c);
// console.log(arr1);
// console.log(arr2);

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let result = arr.flat().reduce((acc, cur) => {
//     return acc + cur;
// }, 0);
// console.log(result);

// let arr1 = [1, 20, 45, 62, 100];
// let abc = arr1.reduce((total, amount) => {
//     if (amount > 30) {
//         total.push(amount);
//     }
//     return total;
// }, []);
// console.log(abc);

// let string = ["Hello", " ", "World", "!"];
// let concatAllString = string.reduce((acc, cur) => acc + cur);
// console.log(concatAllString);


// let arr1 = [1, 20, 45, 62, 100];
// let findMax = arr1.reduce((acc, cur) => {
//     if (acc > cur) {
//         return acc;
//     } else {
//         return cur;
//     }
// });
// console.log(findMax);

// let arr1 = [1, 20, 45, 62, 100];
// let findMin = arr1.reduce((acc, cur) => {
//     if (acc > cur) {
//         return cur;
//     } else {
//         return acc;
//     }
// });
// console.log(findMin);

// let arr = [1, 3, 5, 2, 4, 6, 3, 4, 1];
// let removeDuplicate = arr.reduce((acc, cur) => {
//     if (acc.includes(cur) == false) {
//         acc.push(cur);
//     }
//     return acc;
// }, []);
// console.log(removeDuplicate);


function myFunction(a, b) {
    let c = [a, b];
    let d = c.flat();
    let remove = d.reduce((acc, cur) => {
      if (acc.includes(cur) == false) {
        acc.push(cur);
      }
      return acc;
    }, []);
    return remove.sort((a, b) => a - b);
  }
  console.log(myFunction([1, 2, 3], [3, 4, 5]));
  console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));






// /* eslint-disable */
// const arr1 = [
//     { name: 'Joe Brown', goals: 0, assists: 0, points: 0 },
//     { name: 'Jim Bob', goals: 2, assists: 1, points: 3 },
//     { name: 'Harry Styles', goals: 1, assists: 1, points: 2 },
//     { name: 'Craig Mack', goals: 5, assists: 7, points: 12 },
//     { name: 'Wés BÔS 🔥', goals: 5, assists: 7, points: 12 },
//     { name: 'DOG', bones: 100000, goals: 5, assists: 7, points: 12 },
// ];
// // prettier-ignore
// const arr2 = [
//     { name: 'Craig Mack', goals: 3, assists: 3, points: 6, ppg: 0, ppa: 0, pims: 0, },
//     { name: 'Jim Bob', goals: 1, assists: 4, points: 5, ppg: 0, ppa: 1, pims: 0 },
//     { name: 'Joe Brown', goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0, },
//     { name: 'Harry Styles', goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0, },
// ];
// function addItUp(...arraysOfData) {
//     const data = arraysOfData.flat();
//     const tally = data.reduce(function (tallyArray, item) {
//         // first check if this person is new
//         const { name, ...points } = item;
//         console.log(`Working on ${name}`);
//         console.log(points);
//         tallyArray[name] = tallyArray[name] || {};
//         // Loop over each of their properties and add them up
//         Object.entries(points).forEach(([key, val]) => {
//             if (tallyArray[name][key]) {
//                 // Already exists, so we increment the value by the next line
//                 tallyArray[name][key] = tallyArray[name][key] + val;
//             } else {
//                 // brand new, set it to that value!
//                 tallyArray[name][key] = val;
//             }
//         })
//         return tallyArray;
//     }, {});
//     return tally;
// }
// const result = addItUp(arr1, arr2);
// console.table(result)