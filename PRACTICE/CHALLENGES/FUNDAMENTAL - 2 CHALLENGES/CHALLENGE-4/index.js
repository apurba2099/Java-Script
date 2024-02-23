"use strict";

//AMOUNTS, TIPS AND TOTAL VARIABLE DECLARE
const billsAmount = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

//TIP CALCULATE
const calcTip = function (billValue){
    if( billValue >= 50 && billValue <= 300){
        return (`${billValue *15/100 }`);
    }
    else return (`${billValue *20/100}`);
};

//AVERAGE
const calcAverage = function (arr){
    let sum = 0;
    for (let amount of arr){
        sum+=amount;
    }
    let avg = sum/arr.length
    return avg
}

for (let amount in billsAmount)
{
    tips.push(calcTip(billsAmount[amount]));

    totals.push(billsAmount[amount] + tips[amount]);

    console.log(`Bill amount: ${billsAmount[amount]}, Tip: ${tips[amount]}, Total: ${totals[amount]}`);
}





 