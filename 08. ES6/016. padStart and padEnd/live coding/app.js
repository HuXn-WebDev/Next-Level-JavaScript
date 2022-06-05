// -----------------------------------
// padStart and padEnd are two new methods available on JavaScript strings. As their name implies, they allow for formatting a string by adding padding characters at the start or the end. Keep in mind that these two methods are new and browser support is still very limited.

// Both methods work in the same way, with the only difference being that with padStart the padding is added at the start of the string and with padEnd the padding added at then end.

// They take a targetLength argument for the desired length or the string an optional padString argument that defaults to a space when not provided. The padString will be repeated if needed to fill the desired targetLength.

"Dog!".padStart(10); // "      Dog!"
"Dog!".padEnd(14, " Woof"); // "Dog! Woof Woof"

"A longer string here".padEnd(10); // "A longer string here"
// -----------------------------------

// -----------------------------------
// padStart and padEnd come-in handy for formatting numbers and formatting for console outputting:
let values = ["17.99", "200", "3400.57", "7.97", "567"];

let formattedValues = values.map((value) => {
  let nbr = parseFloat(value).toFixed(2);

  return ("$" + nbr.toString()).padStart(9);
});

console.log(formattedValues.join("\n"));

//    $17.99
//   $200.00
//  $3400.57
//     $7.97
//   $567.00
// -----------------------------------
