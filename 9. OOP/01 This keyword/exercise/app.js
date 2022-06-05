const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42
// ---------------------------------
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"

// ---------------------------------
function f1() {
  return this;
}

// In a browser:
f1() === window; // true

// In Node:
f1() === globalThis; // true
// ---------------------------------
function f2() {
  "use strict"; // see strict mode
  return this;
}

f2() === undefined; // true
