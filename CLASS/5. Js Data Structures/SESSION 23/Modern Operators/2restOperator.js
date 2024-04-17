"use strict";

// Rest Pattern: It is exact same in syntax of spread operator and it uses to collect multiple elements and condense them in an array.

// Spread operator is to unpack an array while rest is to pack elements into an array.

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

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

// Rest Pattern and Parameters

// SPREAD, because on RIGHT side of assignment operator

const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of assignment operator

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...resturant.mainMenu,
  ...resturant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// BUG
// const [pizza2, , risotto2, ...otherFood2, bread]= [];

// Objects
const { sat, ...weekdays } = resturant.openingHours;
console.log(weekdays);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 5, 6, 7);
add(2, 3, 5, 6, 7, 8, 9, 12);

const x = [23, 5, 7];
add(...x);

// Practical example
resturant.orderPizza("Mushrooms", "onions", "chillies", "spinach");

resturant.orderPizza(["Mushrooms", "Lettuce"], "onions", "chillies", "spinach");

resturant.orderPizza("Mushrooms");
