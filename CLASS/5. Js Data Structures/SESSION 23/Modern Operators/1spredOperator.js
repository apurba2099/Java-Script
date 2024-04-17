"use strict";

// Spread Operator: Expand an array into all its elements.

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
};

// Spread Operator
const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...resturant.mainMenu, "Kebab"];
console.log(newMenu);

// 1. Shallow copy
const mainMenuCopy = [...resturant.mainMenu];
console.log(mainMenuCopy);

// 2. Merging 2 arrays
const menu = [...resturant.starterMenu, ...resturant.mainMenu];

console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT object.
const str = "Bikram";
const letters = [...str, " ", "P."];
console.log(letters);

console.log(...str);
console.log("B", "i");

// Can't use spread operator in template literals.
// console.log(`${...str} Pal`); //BUG: Illegal

/*
// Function
const ingredients = [
  prompt("Let's make pasta! Ingredients 1?"),
  prompt('Ingredients 2?'),
  prompt('Ingredients 3?'),
];

console.log(ingredients);

// resturant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

resturant.orderPasta(...ingredients);
*/

// Objects (From ES 2018 or ES9)
const newResturant = { foundedIn: 2010, ...resturant, founder: "Biku Da" };

console.log(newResturant);

// Shallow copy
const resturantCopy = { ...resturant };
resturantCopy.rname = "Rameswar Swami";
resturantCopy.mainMenu = ["Kebab"];

console.log(resturantCopy.rname);
console.log(resturant.rname);

console.log(resturantCopy.mainMenu);
console.log(resturant.mainMenu);
