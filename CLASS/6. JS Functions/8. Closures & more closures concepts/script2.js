"use strict";

// More Closure Examples

// Example 1
let f;
const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

g();
f();
console.dir(f);

const h = function () {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
};

h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

boardPassengers(180, 3);
