'use strict';

/*
//////////////////////////
// Scoping in Practice

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  //console.log(firstName);

  function printAge() {
    // const output = `${firstName}, You are ${age}, born in ${birthYear}`;

    let output = `${firstName}, You are ${age}, born in ${birthYear}`;

    console.log(output);

    if (birthYear >= 1997 && birthYear <= 2012) {
      var genz = true;

      // Creating a new variable with same name as outer scope's variable
      const firstName = 'Devin';

      const str = `Oh, you're a genz, ${firstName}`;

      console.log(str);

      function add(a, b) {
        return a + b;
      }
      
      // Reasssigning outer scope's variable
      output = `New Output`;
    }
    console.log(output);
    // console.log(str);
    console.log(genz);
    // add(2, 3);
    // console.log(add(2, 3));
  }
  printAge();
  return age;
}

const firstName = 'Biku';
calcAge(2002);
// console.log(age);
// printAge();
*/

/*
//////////////////////////
// Hoisting in practice

// Variables
console.log(me);
// console.log(passion);
// console.log(year);

var me = 'Biku';
let passion = 'Coding';
const year = 2002;

// Functions
console.log(addGen(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addGen(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example 1
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

// Example 2
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
//////////////////////////
// this keyword in practice

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAge(2002);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  //console.log(this);
};

calcAgeArrow(2002);

const biku = {
  year: 2002,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.year);
  },
};

biku.calcAge();

const martin = {
  year: 2010,
};

martin.calcAge = biku.calcAge; //method borrowing

console.log(martin);

martin.calcAge();

// const f = biku.calcAge;
// f();

document.querySelector('h1').addEventListener('click', function () {
  console.log(this);
});
*/

/*
//////////////////////////
// Regular Functions vs Arrow Functions

// var firstName = 'Martin';

const biku = {
  firstName: 'Biku',
  year: 2002,

  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);

    //Older versions - Solution 1
    // const self = this;
    // const isGenz = function () {
    //   console.log(self);
    //   console.log(self.year >= 1997 && self.year <= 2012);
    // };

    //ES6 Solution 2
    const isGenz = () => {
      console.log(this);
      console.log(this.year >= 1997 && this.year <= 2012);
    };

    isGenz();
  },

  greet: () => {
    // console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

biku.greet();
biku.calcAge();
// console.log(this.firstName);

// Arguments keywords

function addGen(a, b) {
  console.log(arguments);
}

addGen(4, 7);

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 6, 7, 8);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
*/

/*
//////////////////////////
// Primitives and Objects

let age = 21;
let oldAge = age;
age = 22;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Biku',
  age: 21,
};

const friend = me;
friend.age = 24;

console.log('Friend:', friend);
console.log('Me:', me);
*/

//////////////////////////
// Primitives and Objects in practical

// Primitives
let lastName = 'Snow';
let oldLastName = lastName;
lastName = 'Allen';

console.log(lastName, oldLastName);

// Reference Types
const caitlin = {
  firstName: 'Caitlin',
  lastName: 'Snow',
  age: 27,
};

const marriedCaitlin = caitlin;
marriedCaitlin.lastName = 'Allen';

console.log('Before marriage:', caitlin);
console.log('After Marriage:', marriedCaitlin);

// marriedCaitlin = {} //illegal

// Copying objects
const caitlin2 = {
  firstName: 'Caitlin',
  lastName: 'Snow',
  age: 27,
  family: ['Iris', 'Ramson'],
};

const caitlinCopy = Object.assign({}, caitlin2);
caitlinCopy.lastName = 'Allen';

caitlinCopy.family.push('Mary');
caitlinCopy.family.push('John');

console.log('Before marriage:', caitlin2);
console.log('After Marriage:', caitlinCopy);
