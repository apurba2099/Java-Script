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
const getLimit = (user) => spendinglimits?.[user] ?? 0;

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

  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendinglimits, 1000, "Pizza 🍕");
console.log(newBudget1);

addExpense(budget, spendinglimits, 100, "Going to movies 🍿", "Matilda");

addExpense(budget, spendinglimits, 200, "Stuff", "Jay");

const checkExpenses = function () {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = "limit";
};
checkExpenses();

const logBigExpenses = function (biglimit) {
  let output = "";
  for (const entry of budget)
    output +=
      entry.value <= -biglimit ? `${entry.description.slice(-2)} / ` : "";

  output = output.slice(0, -2); // Remove last '/ '
  console.log("Big Expense", output);
};
console.log("Expenses", budget);
logBigExpenses(10);
