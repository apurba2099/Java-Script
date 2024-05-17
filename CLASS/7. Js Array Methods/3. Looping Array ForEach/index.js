"use strict";

// For Each
const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, transaction] of transactions.entries()) {
  if (transaction > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${transaction}`);
  } else {
    console.log(`Transaction ${i + 1}:You withdrawl ${Math.abs(transaction)}`);
  }
}

console.log("----FOR EACH----");
// transactions.forEach(function(individual_value, index, transactions_arr){})

transactions.forEach(function (transact, i, arr) {
  if (transact > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${transact}`);
  } else {
    console.log(`Transaction ${i + 1}:You withdrawl ${Math.abs(transact)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)

// NOTE: continue and break statements do not work in forEach loop.
