// A factory function is a function that returns a new object.

// ------------------------------------------
// let huxn = {
//   firstName: "HuXn",
//   lastName: "WebDev",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & i love javascript`
//     );
//   },
// };

// let john = {
//   firstName: "John",
//   lastName: "doe",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & i love javascript`
//     );
//   },
// };

// john.fullName();

// ------------------------------------------
// function createPerson(firstName, lastName, pl) {
//   return {
//     firstName: "john",
//     lastName: "doe",
//     fullName: function () {
//       console.log(
//         `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
//       );
//     },
//   };
// }

// const john = createPerson("John", "Doe", "Python");
// const huxn = createPerson("HuXn", "WebDev", "Golang");
// const kumar = createPerson("Kumar", "Singh", "JavaScript");
// console.log(john);
// console.log(huxn);
// console.log(kumar);

// console.log(john.fullName());
// console.log(huxn.fullName());
// console.log(kumar.fullName());
// ------------------------------------------

// ------------------------------------------
function createPerson(firstName, lastName, pl) {
  return {
    firstName: firstName,
    lastName: lastName,
    pl = pl,
    fullName: function () {
      console.log(
        `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
      );
    },
  };
}

const john = createPerson("John", "Doe", "Python");
const huxn = createPerson("HuXn", "WebDev", "Golang");
const kumar = createPerson("Kumar", "Singh", "JavaScript");
console.log(john);
console.log(huxn);
console.log(kumar);

console.log(john.fullName());
console.log(huxn.fullName());
console.log(kumar.fullName());
// ------------------------------------------
