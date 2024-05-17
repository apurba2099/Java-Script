"use strict";

// For Each with Maps and Sets
// Map
const currencies = new Map([
  ["IND", "Indian Rupees"],
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "IND", "EUR", "EUR"]);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`, set);
});
