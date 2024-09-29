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
};

// 1. Data
const apurba = new Person("Apurba", "Dutta", 2003);
console.log(apurba);
// 2. Data
const avishek = new Person("Avishek", "Dutta", 1996);
console.log(avishek);

// checking the constructor "instanceof"

// it is a instance of Person's constructuor
console.log(apurba instanceof Person);

const niranjan = "niran";
// its false cause its not an instance of Person constructor
console.log(niranjan instanceof Person);
