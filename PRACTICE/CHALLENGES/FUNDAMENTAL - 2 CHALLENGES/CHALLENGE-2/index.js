"use strict";
//ONLY VALUE PART
const calcTip = function (billValue){
    if( billValue >= 50 && billValue <= 300){
        return (`${billValue *15/100 } on the 15% value`);
    }
    else{
        return (`${billValue *20/100} on the 20% value`);
    }
};

const amountBill = 100;
console.log(`The Tips amount is ${calcTip(amountBill)}`)

//ARRAY PART
const arrayTips = function (arrayBills){
   const emptyArray = [];
   for( let cost in arrayBills){
    if (arrayBills[cost] >=50 && arrayBills[cost] <= 300)
        emptyArray.push(arrayBills[cost]*(15/100));
    else
        emptyArray.push(arrayBills[cost]*(20/100));
   }
   return emptyArray;
}
const Tips= [125, 555, 44];
console.log(`Here the array values tips: ${arrayTips(Tips)}`)

//BONUS PART
const total = function(Tips, arrayTips){
    const result = []
    for(let  i = 0; i < Tips[i]; i++){
        result.push(Tips[i]+arrayTips[i])
    }
    return result
}
const Result = total(Tips, arrayTips(Tips))
console.log(`The amount is ${Tips}`);
console.log(`The Bills + Tips is : ${Result}`)












