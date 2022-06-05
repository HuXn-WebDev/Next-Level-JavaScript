// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

let person = {
  greet: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

const huxn = Object.create(person);
huxn.firstName = "HuXn";
huxn.lastName = "WebDev";
huxn.greet();

let john = Object.create(person, {
  firstName: { value: "John" },
  lastName: { value: "Doe" },
});

console.log(john);
john.greet();

// ----------------------------------
let Student = {
  name: "Lisa",
  age: 24,
  marks: 78.9,
  display() {
    console.log("Name:", this.name);
  },
};

// create object from Student prototype
let std1 = Object.create(Student);

std1.name = "Sheeran";
std1.display();
