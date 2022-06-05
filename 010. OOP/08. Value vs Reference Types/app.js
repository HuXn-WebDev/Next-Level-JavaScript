// Whenever you create a variable in javascript, that variable can store one of two types of data a "Primitive Value" or a "Reference Value"

// Primitive Values
// String
// Number
// Boolean
// Undefined
// Null
// ES6 Symbol

// Reference Values
// typeof "object"
// objects, arrays, functions, etc.

// Primitive Value CODING
let surname = "Doe";
let displayName = surname;

surname = "John";
console.log(surname); // John
console.log(displayName); // John

// Reference Value CODING
// let huxn = {
//   gender: "male",
//   name: "huxn",
// };

// let snoop = huxn;

// snoop.name = "Snoop";
// console.log(huxn.name); // Snoop
// console.log(snoop.name); // Snoop

// Primitive Comperison
// Primitive types are compared by there value
const name = "HuXn";
const friend = "HuXn";
console.log(name === friend); // true

// Reference Comperison
// Reference values are compared by there reference or there location in memory
let huxn = {
  gender: "male",
  name: "huxn",
};

let susy = {
  gender: "female",
  name: "susy",
};

console.log(huxn === susy); // false
