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

//-------------------------

/*
// 219. no video
// this a person constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

// as same this is child student constructor function
const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  // DRY CODE
  Person.call(this, firstName, birthYear); // set the "Person.call()" method to call the parent constructor function

  this.course = course; // additional property course
};

Student.prototype = Object.create(Person.prototype);

//Linking prototype
// Student.prototype = Person.prototype;

// add this introduce function in Student constructor by the proptotype
Student.prototype.introduce = function () {
  console.log(
    `My name ${this.firstName} and i study in ${this.course} and my age is ${
      2024 - this.birthYear
    }`
  );
};

const apurba = new Student("Apurba", 2003, "Computer science");
console.log(apurba);
apurba.introduce();
apurba.calcAge();

console.log(apurba.__proto__);
console.log(apurba.__proto__.__proto__);

console.log(apurba instanceof Person, apurba instanceof Student, apurba instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

//-------------------------

/*
// 221. no video
// inheritance Between "classes". ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2024 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      console.error(`${name} is not a full name`);
    }
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log(`hey there 👌`);
  }
  calcAge() {
    return console.log(2024 - this.birthYear);
  }
}

// now ES6 iherit this class to another
class StudentCl extends PersonCl {
  //extend keyword link with PersonCl with StudentCl inheritance
  constructor(fullName, birthYear, course) {
    // PersonCl.call() here we don't need to do that! we use super() function

    // Always needs to happen first !
    super(fullName, birthYear); //super is a basically the constructor function of the parent class.
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2024 - this.birthYear
      } years old, but as a student I feel more like ${
        2024 - this.birthYear + 10
      }`
    );
  }
}
const apurba = new StudentCl("Apurba Dutta", 2003, "Computer Science");
console.log(apurba);
apurba.fullName = "Apurba";
apurba.greet();
console.log(apurba.age);
console.log(apurba.course);
//Over ridding method
apurba.calcAge();
*/

//-------------------------

/*
// 222. no video 
// inheritance between ES6 "Classes" Object.create 
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const apurba = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthyear, course) {
  PersonProto.init.call(this, firstName, birthyear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
// data1
const avishek = Object.create(StudentProto);
avishek.init("Avishek", 1996, "Arts");
avishek.introduce();
avishek.calcAge();

// data2
const ram = Object.create(StudentProto);
ram.init("Ram", 2001, "Mythology");
ram.introduce();
ram.calcAge();
*/

//-------------------------

/*
// 223 no video
// Another class example

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thank you for opening this bank account, ${owner} ❤️`);
  }
  deposite(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposite(-val);
  }
  // internal method ( data privacy/ encapsulations)
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposite(val);
      console.log("Loan Approve!");
    }
  }
}

const acc1 = new Account("Apurba", "INR", 4099);
// acc1.movements.push(1000);
// acc1.movements.push(-90);
acc1.deposite(1000);
acc1.withdraw(90);
console.log(acc1);
console.log("pin", acc1.pin);
acc1.requestLoan(1000);
acc1.approveLoan(100);
*/

//-------------------------

/*
// 224. no video
// Encapsulation: Protected propertiese and methods

// to copy the previous code for example
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this._pin = pin;
    this._movements = []; // protect this data to no one can access this data

    this.locale = navigator.language;
    console.log(`Thank you for opening this bank account, ${owner} ❤️`);
  }
  //public interface
  getMovements() {
    return this._movements;
  }
  deposite(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposite(-val);
  }
  // internal method ( data privacy/ encapsulations)
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposite(val);
      console.log("Loan Approve!");
    }
  }
}

const acc1 = new Account("Apurba", "INR", 4099);
// still accessable
// acc1._movements.push(1000);
// acc1._movements.push(-90);
acc1.deposite(1000);
acc1.withdraw(90);
console.log(acc1);
console.log("pin", acc1.pin);
acc1.requestLoan(1000);
acc1.approveLoan(100);
console.log(acc1.getMovements());
*/

/*
//225. no video
// Encapsulation: private class Fields and methods
// // console.log(acc1.#pin) Private field '#movements' must be declared in an enclosing class
// // 1) Public fields
// // 2) Private fields
// // 3) Public methods
// // 4) Private methods
// // (there is also the static version)
class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // chaining methods
  }

  withdraw(val) {
    this.deposit(-val);
    return this; // chaining methods
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this; // chaining methods
    }
  }

  static helper() {
    console.log("Helper");
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);

// Note: //error message which is : Private field '#movements' must be declared in an enclosing class (we can not access to out side)

// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));


// 226 no vide0
// chaining methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000);
// console.log(acc1.getMovements());
*/
