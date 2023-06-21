// const person = {
//     fullName: function (city, country) {
//         return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// const person2 = {
//     firstName: "Mary",
//     lastName: "Doe"
// }

// console.log(person.fullName.call(person1, "Oslo", "Norway"));

// Javascript Call() Method :-
// JS call() method is a predefined JS method.
// We can use another object’s key-value in the function.


// function print_name() {
//     console.log(this.first_name);
// }
// let f_name = {
//     first_name: "Bhaumik"
// }
// print_name.call(f_name);

// function first_name(f_name){
//     console.log(f_name);
// }
// first_name("Bhaumik");
// console.log(first_name("vansh"));

// function add(x, y) {
//     console.log(x + "first value" + y + "second value");
//     return x + y;
// }
// console.log(add(2, 3));
// console.log(add());

