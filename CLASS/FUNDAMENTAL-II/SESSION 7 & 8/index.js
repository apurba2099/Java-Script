"use strict";

/*
//////////////////////////////////////
// ACTIVATING STRICT MODE

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log(`I can Drive.`);

// const interface = 'Audio';
// const private = 534;
*/

/*
//////////////////////////////////////
// FUNCTIONS

function logger() {
  console.log(`My name is Biku Pal.`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);

//Built-in function
const num = Number(23);
*/

/*
//////////////////////////////////////
// FUNCTIONS VS. EXPRESSIONS

//Generic Function
function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(2002);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(2002);
console.log(age2);
*/

/*
//////////////////////////////////////
// ARROW FUNCTIONS
const calcAge3 = (birthYear) => 2024 - birthYear;

const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 60 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2002, "Biku"));
console.log(yearsUntilRetirement(2003, "Apurba"));
*/

/*
//////////////////////////////////////
// FUNCTIONS CALLING OTHER FUNCTIONS
const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;

  return juice;
};

console.log(fruitProcessor(2, 3));
*/
