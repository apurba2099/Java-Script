"use strict";
// Constructor Function
// constructor function variable name always name start capital letter.

// 1. New {} is created (empty object created),
// 2. funtion is called, this = {},
// 3. {} linked to prototype,
// 4. function automatically return {}.

// THIS IS THE BLUE PRINT OF THESE OBJECTS

/*
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
*/

/*
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
*/

/*
// 214. no video
//ES6 class
// Let class declaration
class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will be added to prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }
  greet() {
    console.log(`hello! ${this.firstName}`);
  }
}
const apurba = new PersonClass("Apurba Dutta", 2003);
const avishek = new PersonClass("Avishek Dutta", 1996);
// console.log(apurba)
// add method
apurba.calcAge();
console.log(PersonClass.prototype === apurba.__proto__);
apurba.greet();
avishek.greet();

// 1. classes are NOT hoisted 
// 2. Class are first-class citizens (class are special kind of functions)
// 3. classes are executed in strict mode
*/

/*
// 215 no video
// Setters and Getters
// class have and constructor to make
class Details {
  constructor(fullName, birthyear) {
    this.fullName = fullName;
    this.birthyear = birthyear;
  }

  // set a new fullName Function
  set fullName(name) {
    // console.log(name);
    if (name.includes(" ")) this._fullName = name;
    //this is a convention, this is not a js features diffrent variable name to avoid naming conflict _fullName.
    else alert(`${name} is not a full name!`);
  }

  // get the return name
  get fullName() {
    return this._fullName;
  }
}

const account = {
  owner: "apurba",
  movements: [10, 20, 300, 4300, 20],
  birthYear: 2003,
  // get
  get latest() {
    return this.movements.slice(-1).pop();
  },
  // Set
  set latest(mov) {
    this.movements.push(mov);
  },

  // get using age method
  get age() {
    return 2024 - this.birthYear;
  },
};
// get and set console.log
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
console.log(account.latest);
console.log(account.age);

// new instance
const jessica = new Details("jessica davis", 1996);
console.log(jessica.fullName);
// const walter = new Details("Walter", 1993);
*/

/*
// 216. video Static methods
const person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
person.hey = function () {
  console.log("Hey There! 👌");
  console.log(this) // call full constructor function
};
person.hey();
*/

/*
// 217. video Object.create
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// steven object
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2003;
steven.calcAge();
console.log(PersonProto, steven.__proto__);

// check true or flase
console.log(steven.__proto__ === PersonProto); // true

// sarah object
const sarah = Object.create(PersonProto);
sarah.name = "Sarah";
sarah.birthYear = 2004;
sarah.calcAge();
console.log(sarah);

// init method (just because dont use new operator)
sarah.init("Sarah", 1999);
sarah.calcAge()

//geeks for geeks
//create a first object
// const apurba = {
//   fname: 'Apurba',
//   lname: 'Dutta',
//   birthYear: 2003,
//   Ph_no: 6295324395
// }
// console.log(apurba)

// // second object Object.create
// const avishek = Object.create(apurba);
// avishek.fname = 'Avishek';
// avishek.lname ='Dutta';
// avishek.birthYear = 1996;
// avishek.ph_no = 8250766104;
// console.log(avishek)

// function calcAge(){
//       console.log(`this is the birth year ${2024-this.birthYear}`);
//   }
// apurba.calcAge = calcAge;
// avishek.calcAge = calcAge;
// apurba.calcAge();
// avishek.calcAge();
*/