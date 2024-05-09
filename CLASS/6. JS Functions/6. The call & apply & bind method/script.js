"use strict";

// The call, apply & bind methods

const dumdum = {
  airline: "DumDum",
  iataCode: "CCU",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

dumdum.book(239, "Bikram Pal");
dumdum.book(635, "Aman Gupta");

const spiceJet = {
  airline: "SpiceJet",
  iataCode: "SJ",
  bookings: [],
};

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

const book = dumdum.book;
// book(23, 'Sarah Williams');

// Call method
book.call(spiceJet, 23, "Sarah Williams");
book.call(dumdum, 249, "Raj Shamani");

book.call(swiss, 583, "Tanmay Bhat");
console.log(swiss);

// Apply method
const flightData = [583, "Carry Minati"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

// Bind Method
const bookSJ = book.bind(spiceJet);
const bookCCU = book.bind(dumdum);
const bookLX = book.bind(swiss);
bookSJ(47, "Sharan Hedge");
bookLX(78, "Antik Mahmud");

const bookSJ23 = book.bind(spiceJet, 23);
bookSJ23("Bikram Pal");

const bookSJ23Biku = book.bind(spiceJet, 23, "Biku");
bookSJ23Biku();

// With EventListeners
dumdum.planes = 300;
dumdum.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", dumdum.buyPlane.bind(dumdum));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addGST = addTax.bind(null, 0.18);

console.log(addGST(100));
console.log(addGST(80));

// Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addGST1 = addTaxRate(0.18);

console.log(addGST1(100));
console.log(addGST1(80));
