const button = document.querySelector("button");
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

// Attach Event Listener to Button
// When we click on button, we wanna provide (btn-style) class to it.
// & change the textContent of button to "Show Less"

// Attach event listener to textBox
// Any key we press in that input has to showup in that output paragraph
// eg: `You pressed x.`

button.addEventListener("click", () => {
  button.textContent = "Show Less";
  button.classList.toggle("btn-style");
});

textBox.addEventListener(
  "keydown",
  (event) => (output.textContent = `You pressed "${event.key}".`)
);
