"use strict";
// Constructor Function
// constructor function variable name always name start capital letter.

// 1. New {} is created (empty object created),
// 2. funtion is called, this = {},
// 3. {} linked to prototype,
// 4. function automatically return {}.

// THIS IS THE BLUE PRINT OF THESE OBJECTS
const Person = function (firstName, lastname, birthYear) {
  //   console.log(this);
  this.firstName = firstName;
  this.lastname = lastname;
  this.birthYear = birthYear;

  //Never create a method inside a constructor function!!
  // this.calcage = function () {
  //   console.log(2024 - this.birthYear);
  // };
};

// 1. Data
const apurba = new Person("Apurba", "Dutta", 2003);
console.log(apurba);
// 2. Data
const avishek = new Person("Avishek", "Dutta", 1996);
console.log(avishek);
//3. Data
const peter = new Person("Peter", "Parker", 1990);

// checking the constructor "instanceof"

// it is a instance of Person's constructuor
console.log(apurba instanceof Person);

const niranjan = "niran";
// its false cause its not an instance of Person constructor
console.log(niranjan instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcage = function () {
  console.log(2024 - this.birthYear);
};
apurba.calcage();
avishek.calcage();
peter.calcage();

console.log(apurba.__proto__);
console.log(apurba.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(apurba));
console.log(Person.prototype.isPrototypeOf(avishek));
console.log(Person.prototype.isPrototypeOf(peter));

// Prototype linked objects
Person.prototype.species = "Homo Sapiens";
console.log(apurba.species, avishek.species, peter.species);
console.log(apurba.hasOwnProperty("firstName"));
console.log(apurba.hasOwnProperty("species"));

//212. no video
console.log();
console.log(apurba.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 5, 76, 8]; //new Array === [];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr);
console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir(h1);

// 214. no video
//ES6 class


