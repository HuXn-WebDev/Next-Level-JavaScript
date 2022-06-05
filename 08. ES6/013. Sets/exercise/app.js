// 1. Create a Set name (letters)
// 2. Add ("a", "b", "c") as properties
// 3. Add ("a", "b", "c") as values
// 4. Iterate over Set & log the values.

// -------------------------------
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Create Variables
const a = "a";
const b = "b";
const c = "c";

for (let value of letters) {
  console.log(value);
}
