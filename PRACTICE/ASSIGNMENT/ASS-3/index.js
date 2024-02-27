//L. functions
const describeCountry = function (country, population, capitalCtiy){
   return `'${country} has ${population} million people and its capital city is ${capitalCtiy}'.`
};
//different country
const description = describeCountry('Finland', 6, 'Helsinki');
console.log(description);
//different country
const description2 = describeCountry('India', 10, 'New Delhi');
console.log(description2);
//different country
const description3 = describeCountry('United state America', 30, 'Washinton DC');
console.log(description3);
console.log('/////////////////////////');
/////////////////////////////////////
//M. General Functions vs. Expressions
const percentageOfWorld1 = function (population){
    const data = (population/7900)*100;
    return data;
};
//1st Country Data
let firstCountry = percentageOfWorld1(1441);
console.log(`China has 1441 million people, so it's about ${firstCountry.toFixed(2)}% of the world's population.`) 
//2nd Country Data
let secondCountry = percentageOfWorld1(1437);
console.log(`India has 1437 million people, so it's about ${secondCountry.toFixed(2)}% of the world's population.`)
//3rd Country Data
let thirdCountry = percentageOfWorld1(336);
console.log(`Unite State has 336 million people, so it's about ${thirdCountry.toFixed(2)}% of the world's population.`)
console.log('/////////////////////////');
////////////////////////////////////
//N. Arrow Functions
percentageOfWorld3 = (population) =>{
    return (population/7900)*100;
};
//1st Country Data
firstCountry = percentageOfWorld3(1441);
console.log(`China has 1441 million people, so it's about ${firstCountry.toFixed(2)}% of the world's population.`) 
//2nd Country Data
secondCountry = percentageOfWorld3(1437);
console.log(`India has 1437 million people, so it's about ${secondCountry.toFixed(2)}% of the world's population.`)
//3rd Country Data
thirdCountry = percentageOfWorld3(336);
console.log(`Unite State has 336 million people, so it's about ${thirdCountry.toFixed(2)}% of the world's population.`);
console.log('/////////////////////////');
////////////////////////////////////
//O. Functions Calling Other Functions
const describePopulation = function (country, population){
    const percentage= (population / 7900) * 100;
    return `${country} has ${population} million people, which is about ${percentage.toFixed(2)}% of the world.`;
};
//1st Country Data
firstCountry = describePopulation("China", 1441)
console.log(firstCountry);
//2nd Country Data
secondCountry = describePopulation("India", 1437)
console.log(secondCountry);
//3rd Country
thirdCountry = describePopulation("America", 336)
console.log(thirdCountry);
console.log('/////////////////////////');
////////////////////////////////////
//P. Introduction to Arrays







