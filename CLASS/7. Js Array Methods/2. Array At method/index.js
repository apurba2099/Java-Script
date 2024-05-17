"use strict";

// The new at method (ES2022 a.k.a. ES13)
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("Bikram".at(0));
console.log("Bikram".at(-1));
