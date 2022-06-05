// CONSTRUCTOR FUNCTION
function CreatePeople(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;
  this.info = function () {
    console.log(
      `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
    );
  };
  console.log(this);
}

// NEW KEYWORD:
// 1. First create empty object {}
// 2. Sets "this" to point to that object
// 3. We can ommit the return statment using "new" keyword

const john = new CreatePeople("John", "Doe", "Golang");
const huxn = new CreatePeople("HuXn", "WebDev", "Javascript");
// john.info();
// huxn.info();
