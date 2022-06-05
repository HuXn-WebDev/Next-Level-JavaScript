// ------------------------------------
// createElement()
// append()
// prepend()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

// Creating Element
const h1 = document.createElement("h1");
const body = document.body;

// Adding Text
h1.textContent = "Hello World";

// Attaching our element to the body
body.append(h1);
