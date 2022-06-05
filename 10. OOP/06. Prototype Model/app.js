// Every javascript object has a anonymous property called prototype
// Rememmber functions & arrays are also a object
// that prototype will be the parent of that object, prototype property is object by itself, which have some special properties & methods

const obj = {};
// console.log(obj.toString());

const arr = [];
// console.log(arr);

// function CreatePeople(firstName, lastName, pl) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.pl = pl;
//   this.info = function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
//     );
//   };
// }

// const john = new CreatePeople("John", "Doe", "Golang");
// const huxn = new CreatePeople("HuXn", "WebDev", "Javascript");
// console.log(john);

function CreatePeople(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;
}

CreatePeople.prototype.info = function () {
  console.log(
    `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
  );
};

CreatePeople.prototype.obj = { firstName: "elit", lastName: "anderson" };

const john = new CreatePeople("John", "Doe", "Golang");
const huxn = new CreatePeople("HuXn", "WebDev", "Javascript");
console.log(john);

// GETTING PROTOTYPE
// Object.constructor.prototype
// Object.getPrototypeOf({is expecting object})
// console.log(huxn.constructor.prototype); // first way of getting
// console.log(Object.getPrototypeOf(huxn)); // second way of getting

// CHANGING THE BUILTIN CONSTRUCTORS METHODS
// Array.prototype.pop = function () {
//   return "POP IT UP"
// };

// const arr = ["one", "two", "three", "four"];
// arr.pop();

// WE CAN DEFINE OUR OWN METHODS IN BUILTIN CONSTRUCTORS
// String.prototype.hello = function () {
//   console.log(this);
//   console.log(this.toUpperCase());
// };

// const str = "Helloooooo";
// str.hello();
