"use strict";

// How Passing Arguments Works: Value vs Reference
const flight = "LH234";
const biku = {
  name: "Bikram Pal",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("Checked In");
  } else {
    alert("Wrong Passport!");
  }
};

// checkIn(flight, biku);

console.log(flight);
console.log(biku);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(biku);
checkIn(flight, biku);
