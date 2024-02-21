"use strict";

//AVERAGE OF THE SCORES:)
 const calAverage = scores => {
    let sum = 0 
    for (let i = 0 ; i < scores.length; i++){
        sum+=scores[i]
    }
    return sum/scores.length
 }

//DATA: 1
// const dolphineScore = [44, 23, 71];
// const koalasScore = [65, 54, 49];

// DATA: 2
const dolphineScore = [85, 54, 41];
const koalasScore = [23, 34, 27];

console.log(`The average of Dolphine's Score: ${calAverage(dolphineScore)}`)
console.log(`The average of Koala's Score: ${calAverage(koalasScore)}`)

const checkWinner = function (avgDolphines, avgKoalas) {
    if (avgDolphines >= avgKoalas * 2){
        return (`Dolphines wins ${avgDolphines} vs ${avgKoalas}`);
    }
    else if (avgKoalas >= avgDolphines * 2){
        return (`Koalas wins ${avgKoalas} vs ${avgDolphines}`);
    }
    else{
        return `No one will wins`
    }
}

const avgDolphines = calAverage(dolphineScore);
const avgKoalas = calAverage(koalasScore);
console.log(checkWinner(avgDolphines,avgKoalas));




