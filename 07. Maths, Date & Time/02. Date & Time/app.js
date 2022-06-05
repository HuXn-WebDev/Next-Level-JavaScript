const d = new Date();
d.getTime();
d.getFullYear();
d.getMonth();
d.getDate();
d.getHours();
d.getMinutes();
d.getSeconds();
d.getMilliseconds();
d.getDay();

// ------------------------
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const d = new Date();
let month = months[d.getMonth()];

// ------------------------
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// const d = new Date();
let day = days[d.getDay()];

// ------------------------
// Set Date Methods
// Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.
// const d = new Date();
d.setFullYear(2020);
d.setFullYear(2020, 11, 3);
d.setMonth(11);
d.setDate(15);
d.setDate(d.getDate() + 50);
d.setHours(22);
d.setMinutes(30);
d.setSeconds(30);

// ------------------------
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
