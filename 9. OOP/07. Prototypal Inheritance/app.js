function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");

// console.log(person1.greeting());

function Customer(firstName, lastName, phone, membership) {
  // call is a function that allows us to call another function
  // from sommewhere else in the current context
  // The first paramter will be "this"
  // after that whatever properties is in constructor that we're inheriting
  Person.call(this, firstName, lastName);
  // After that whatever properties is left we can assign that
  this.phone = phone;
  this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

// Create Customer
const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");
console.log(customer1);
console.log(customer1.greeting);
