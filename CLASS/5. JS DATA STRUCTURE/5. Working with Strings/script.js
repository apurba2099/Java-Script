"use strict";

/*
//////////////////////////////////
// Working with Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// Practice
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);

  if (s === 'B') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
checkMiddleSeat('9B');

// How string works behind the scenes!
console.log(new String('Biku'));
console.log(typeof new String('Biku'));
console.log(typeof new String('Biku').slice(1));
*/

/*
//////////////////////////////////
// Working with Strings - Part 2
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

console.log('bikram'.toUpperCase());

// Fix capitalization in name
const passenger = 'bIkRaM';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing email
const email = 'hello@biku.com';
const loginEmail = '    Hello@Biku.CoM\n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// Replacing
const priceIND = '28,897₹';
const priceUSD = priceIND.replace('₹', '$').replace(',', '.');
console.log(priceUSD);

const announcement =
  'Attention please, the train number 1376 will be arrived at road no 2. The road no 2!';

console.log(announcement.replace('road', 'platform'));
console.log(announcement.replaceAll('road', 'platform'));

console.log(announcement.replace(/road/g, 'platform'));

// Booleans
const plane = 'Airbus A320neo';

console.log(plane.includes('A320'));
console.log(plane.includes('spice'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('A320'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.warn('You are NOT allowed onboard.');
  } else {
    console.log('Welcome abroad!');
  }
};

checkBaggage('I have a laptop, some Food, and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
//////////////////////////////////
// Working with Strings - Part 3

// split()
console.log('a+very+nice+string'.split('+'));
console.log('Bikram Pal'.split(' '));

const [firstName, lastName] = 'Bikram Pal'.split(' ');
console.log(firstName, lastName);

// join()
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Capitalize first letter
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('swami ram chandra');
capitalizeName('bikram pal');

// Padding
const message = 'Aao kabhi haveli pe!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Biku'.padStart(30, '+'));

const maskCreditCard = function (number) {
  // const str = String(number);
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(46698741336974));
console.log(maskCreditCard(8954652123674598));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInline(5);
planesInline(3);
planesInline(12);
*/

//////////////////////////////////
// String Methods Practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// console.log(flights.split('+'));

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");

  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(45);

  console.log(output);
}
