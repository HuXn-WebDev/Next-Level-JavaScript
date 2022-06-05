// In object destructuring order doesn't matter but the name does matter

// --------------------------
// Extracting a property
const student = { name: "Arun", position: "First", rollno: "24" };
const { name, position, rollno } = student;
console.log(name); // Arun
console.log(position); // First
console.log(rollno); // 24
// --------------------------

// --------------------------
// Assigning new variable names
const num = { x: 100, y: 200 };
const { x: new1, y: new2 } = num;

console.log(new1); //100
console.log(new2); //200
// --------------------------

// --------------------------
// Assignment without declaration
let name, division;
({ name, division } = { name: "Anil", division: "First" });
console.log(name); // Anil
console.log(division); // First
// --------------------------

// --------------------------
// Object destructuring and rest operator
let { a, b, ...args } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
console.log(a);
console.log(b);
console.log(args);
// --------------------------
