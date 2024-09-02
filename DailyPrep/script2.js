"use-strict";

const a = function helloWorld() {
  console.log("hello, World !!");
};
const loop = function numberOf(b) {
  for (let i = 0; i < b; i++) {
    a();
  }
};
loop(10);

const btnJs = document.querySelector(".btn");
const cat = document.querySelector(".element");

btnJs.addEventListener("click", function () {
  console.log("clicked!");
});
document.addEventListener("keydown", function (e) {
  console.log("pressing");
  console.log(e.key)
});
