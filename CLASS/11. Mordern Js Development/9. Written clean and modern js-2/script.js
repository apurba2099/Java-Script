"use strict";

const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "apurba" },
  { value: -45, description: "Groceries 🥑", user: "apurba" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "apurba" },
  { value: 300, description: "Freelancing 👩‍💻", user: "apurba" },
  { value: -1100, description: "New iPhone 📱", user: "apurba" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "apurba" },
]);

// To make this Object.freeze(), for immutable
const spendinglimits = Object.freeze({
  apurba: 1500,
  matilda: 100,
});
// spendinglimits.jay = 200;
//   const limit = spendinglimits[user] ? spendinglimits[user] : 0;
// DRY
const getLimit = (limits, user) => spendinglimits?.[user] ?? 0;

//Pure function :D
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "apurba"
) {
  const cleanUser = user.toLowerCase();

  //   const limit = spendinglimits?.[user] ?? 0;

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendinglimits, 100, "Pizza 🍕");

const newBudget2 = addExpense(
  newBudget1,
  spendinglimits,
  100,
  "Going to movies 🍿",
  "Matilda"
);
console.log(newBudget1);

const newBudget3 = addExpense(newBudget2, spendinglimits, 200, "Stuff", "Jay");

// const checkExpenses2 = function (state, limits) {
//   return state.map((entry) => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: "limit" }
//       : entry;
//   });
//   // for (const entry of newBudget3)
//   //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = "limit";
// };

const checkExpenses = (state, limits) =>
  state.map((entry) =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendinglimits);
console.log(finalBudget);

//Impure
const logBigExpenses = function (state, biglimit) {
  const bigExpenses = state
    .filter((entry) => entry.value <= -biglimit)
    .map((entry) => entry.description.slice(-2))
    .join("/"); //more advance to use reduce()
    // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, "");

  console.log(bigExpenses);

  // let output = "";
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -biglimit ? `${entry.description.slice(-2)} / ` : "";

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log("Big Expense", output);
};
// console.log("Expenses", budget);

logBigExpenses(finalBudget, 500);
