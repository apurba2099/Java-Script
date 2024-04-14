'use strict';

//Destructuring:  Unpacking values from an array or an object into a separate variable.

const resturant = {
  rname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '15:00',
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

resturant.orderDelivery({
  time: '22:30',
  address: 'Kolkata',
  mainIndex: 2,
  starterIndex: 2,
});

resturant.orderDelivery({
  address: 'Kalna',
  starterIndex: 2,
});

// Destructuring Objects
const { rname, openingHours, categories } = resturant;
console.log(rname, openingHours, categories);

const {
  rname: resturantName,
  openingHours: hours,
  categories: tags,
} = resturant;
console.log(resturantName, hours, tags);

// console.log(resturant.menu);

// Default value
const { menu = [], starterMenu: starters = [] } = resturant;

console.log(menu, starters);

// Mutating Values
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = openingHours;

console.log(open, close);

const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);

/*
// Destructuring Arrays

const arr = [2, 3, 4];

// Without Destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// With Destructuring
const [x, y, z] = arr;
console.log(x, y, z);

console.log(arr);

// const [first, second] = resturant.categories;
// console.log(first, second);

const [first, , second] = resturant.categories;
console.log(first, second);

let [main, , secondary] = resturant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(resturant.order(2, 0));

const [starter, mainCourse] = resturant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
