"use strict";

//Destructuring:  Unpacking values from an array or an object into a separate variable.

// Destructuring Arrays
const resturant = {
  rname: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

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
