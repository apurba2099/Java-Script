"use strict";

// IIFE (Immediately Invoked Function Expression) pattern

(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

(() => console.log("This will never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
