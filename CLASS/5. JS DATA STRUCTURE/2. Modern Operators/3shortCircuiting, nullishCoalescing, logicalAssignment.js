"use strict";

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

/*
// Short Circuiting (&& and ||)

// Use ANY data type, return ANY datatype, short-circuiting

// ----OR----
console.log(3 || 'Biku');
console.log('' || 'Biku');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

resturant.numGuests = 23;

// const guest1 = resturant.numGuests ? resturant.numGuests : 10;
// console.log(guest1);

const guest2 = resturant.numGuests || 10;
console.log(guest2);

// ----AND----
console.log(0 && 'Biku');
console.log(7 && 'Biku');
console.log('Hello' && 23 && null && 'Biku');

// Practical example
// if (resturant.orderPizza) {
//   resturant.orderPizza('mushrooms', 'cheese');
// }

resturant.orderPizza && resturant.orderPizza('mushrooms', 'cheese');
*/

/*
//-- The Nullish Coalescing Operator (??) - ES2020 a.k.a ES11 --//

// resturant.numGuests = 0;
// const guests = resturant.numGuests || 10;
// console.log(guests);

// Nullish: null and undefined (NOT 0 and '')
resturant.numGuests = 0;

const guestCorrect = resturant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
//-- Logical Assignment Operator - ES2021 a.k.a ES12 --//
const rest1 = {
  rname: 'Capri',
  numGuests: 0,
};

const rest2 = {
  rname: 'La Plazza',
  owner: 'Biku Pal',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/
