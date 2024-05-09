"use strict";

// Default Parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH13");
createBooking("LH13", 2);
createBooking("LH13", 2, 800);
createBooking("LH13", 5);
createBooking("LH13", undefined, 1000);
