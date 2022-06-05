// 1. Create array with random numbers.
// 2. Map over each item in that array, & multiply each item by 10

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}

console.log(newArr);
