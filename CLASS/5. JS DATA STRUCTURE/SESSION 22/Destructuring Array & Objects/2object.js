"use strict";

//Destructuring:  Unpacking values from an array or an object into a separate variable.

// Destructuring Objects
const resturant = {
  rname: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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
    time = "15:00",
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

resturant.orderDelivery({
  time: "22:30",
  address: "Kolkata",
  mainIndex: 2,
  starterIndex: 2,
});

resturant.orderDelivery({
  address: "Kalna",
  starterIndex: 2,
});

// Basic Destructuring Objects
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
