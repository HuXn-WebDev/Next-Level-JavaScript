// 1. Create a person constructor which has paratmers of (name, age, gender)
// 2. Access parameter values to the call object.
// 3. Create a method name (info), which will just print the info.
// 4. Create a few instances
// 5. Access each property

// constructor function
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.info = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
  };
}

// creating objects
const person1 = new Person("John", 23, "male");
const person2 = new Person("Sam", 25, "female");

// accessing properties
console.log(person1.name); // "John"
console.log(person2.name); // "Sam"
