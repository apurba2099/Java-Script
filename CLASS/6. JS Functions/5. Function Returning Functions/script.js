"use strict";

// Function Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Biku");
greeterHey("Andrew");

greet("Hello")("Biku");

// Challenge
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hi")("Biku");
