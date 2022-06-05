// classlist
// add()
// remove()
// toggle()

const h1 = document.querySelector("h1");
console.log(h1.classList);
console.log((h1.style.color = "skyblue"));
console.log((h1.style.fontWeight = "normal"));

h1.classList.add("styles");
h1.classList.remove("styles");
h1.classList.toggle("styles");
