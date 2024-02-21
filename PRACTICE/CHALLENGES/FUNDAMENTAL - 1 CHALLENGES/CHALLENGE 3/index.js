"use strict";

//DATA-1
const dolphineAverageScore = (96 + 108 + 89) / 3 ;
console.log("The Dolphine's score is",dolphineAverageScore.toFixed(2));

const koalasAverageScore = (88 + 91 + 110) / 3 ;
console.log("The Koala's score is ",koalasAverageScore.toFixed(2));

if(dolphineAverageScore > koalasAverageScore){
    console.log(`The Dolphines Team is Winner!🐬🎉🥇Team's Score is ${dolphineAverageScore.toFixed(2)}`);
}
else if (dolphineAverageScore == koalasAverageScore){
    console.log('Draw the Match!');
}
else{
    console.log(`The Koala's Team is Winner!🐨🎉🥇Team's Score is ${dolphineAverageScore.toFixed(2)}`);
}

////PARTITION THE PROGRAM TO CLEARLY UNDERSTANDABLE 
const style = ("-------------------")
console.log(style)


//BONUS-1 TEST DATA-1
const minScore = 100;
let dolphinsAverage = (97 + 112 + 101) / 3
let koalasAverage = (109 + 95 + 123) / 3
console.log(`The Dolphine's Average Bonus score is ${dolphinsAverage.toFixed(2)}`);
console.log(`The Koala's Average Bonus score is ${koalasAverage.toFixed(2)}`);

if (dolphinsAverage >= minScore && dolphinsAverage > koalasAverage) {
    console.log(`Dolphin wins ${dolphinsAverage}`)
} else if (koalasAverage >= minScore && koalasAverage > dolphinsAverage) {
    console.log(`Koala wins 🐨🥇🎉${koalasAverage}`)
} else if (dolphinsAverage >= minScore && koalasAverage >= minScore && dolphinsAverage === koalasAverage) {
    console.log(`Its a draw`)
} else {
    console.log(`No team will won the trophy`)  
}


