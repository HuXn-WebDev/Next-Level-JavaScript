//////////////////////////////////////////
// The every() and some() array helpers are somewhat similar so I will discuss them both in this post. Both of these array helpers return a boolean result.

// The purpose of the every() array helper is to execute a function for every array element and test if it meets a certain condition. In the end if all elements meet that condition, true is returned.

// The purpose of the some() array helper is to execute a function for every array element and test if it meets a certain condition. In the end if one or more elements meet that condition, true is returned.
//////////////////////////////////////////

const peoples = ["huxn", "jordan", "alex"];

const res = peoples.every((people) => people.length === 4);
const res2 = peoples.some((people) => people.length < 3);

console.log(res);
console.log(res2);

//////////////////////////////////////////
const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

const everyRes = songs.every((song) => song.duration > 3);
const someRes = songs.some((song) => song.duration > 3);
console.log(everyRes);
console.log(someRes);
