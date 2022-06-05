// =======================================
window.firstName = "HuXn";
this.lastName = "WebDev";

let fullName = function () {
  console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
};

fullName();

let huxn = {
  firstName: "HuXn",
  lastName: "WebDev",
  fullName: function () {
    // let firstName = "HuXn";
    // let lastName = "WebDev";
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

huxn.fullName();

// =======================================
console.log(window);
console.log(this);
