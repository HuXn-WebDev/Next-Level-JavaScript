const btn = document.querySelector("button");
const input = document.querySelector("input");
const para = document.querySelector(".para");

// Click, dblclick Event
btn.addEventListener("click", () => {
  console.log("Clicked");
  document.querySelector("p").style.color = "red";
});

// Keypress, keyup, keydown Event
input.addEventListener("keypress", (e) => {
  console.log("keypress");
  console.log(e.key);
});

// Copy, paste Event
para.addEventListener("copy", () => {
  para.textContent = "Stop Stealing My Content";
  para.style.color = "red";
});
