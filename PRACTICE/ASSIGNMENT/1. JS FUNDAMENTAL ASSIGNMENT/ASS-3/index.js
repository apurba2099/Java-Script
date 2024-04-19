//L. functions
console.log('//L. functions//')
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
/////////////////////////////////////
//M. General Functions vs. Expressions
console.log('//M. General Functions vs. Expressions//')
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
////////////////////////////////////
//N. Arrow Functions
console.log('//N. Arrow Functions//')
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
////////////////////////////////////
//O. Functions Calling Other Functions
console.log('//O. Functions Calling Other Functions//')
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
////////////////////////////////////
//P. Introduction to Arrays
console.log('//P. Introduction to Arrays//')
const population = [1441, 1437, 336, 172];
const lengthpopulation = population.length === 4;

console.log("It has 4 elements the country population ",lengthpopulation);
//I learn my personal research map() meythod that i used here!!
const percentage =population.map(percentageOfWorld1);
//I learn my personal research join() meythod that i used here!!
const joinPercentage = percentage.join("% ")
console.log(`Here the all percentage the given array: ${joinPercentage}%`);
////////////////////////////////////
//Q. Basic Array Operations (Methods)
console.log('//Q. Basic Array Operations (Methods)//')
const neighbours = ['China', 'Srilanka', 'Nepal', 'Bhutan'];
console.log(`Before adding new country: ${neighbours}`)
neighbours.push('Utopia');
console.log(`After Dissolved new country: ${neighbours}`);
//----PERSONAL PRACTICE--- 
//const newCountry = "Utopia";
// const addcountry = neighbours.push(newCountry);
// const addcountry2 = neighbours.pop(newCountry);
//console.log(addcountry);
//console.log(addcountry2);


//HELPING THIS PART WITH INTERNET
if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country.");
}
const indexToReplace = neighbours.indexOf("Netherlands");
if (indexToReplace !== -1) {
    neighbours[indexToReplace] = "Republic of Sweden";
}
console.log(neighbours);
////////////////////////
// R. Introduction to Objects
console.log('// R. Introduction to Objects//')
 let myCountry = {
     Country:'India',
     Captial:'New Delhi',
     language:'English',
     Population:'150',
     Neighbours:['China','Bangladesh','Pakistan']
 };
 console.log(myCountry) ;
/////////////////
//S. Dot vs. Bracket Notation
console.log('////S. Dot vs. Bracket Notation////')
 let finland = {
    name: "Finland",
    population: 6,//million
    language: "Finnish",
    neighbouringCountries: 3,
    capital: "Helsinki"
};
console.log(`${finland.name} has ${finland.population} million ${finland.language} speaking people, ${finland.neighbouringCountries} neighbouring countries and a capital called ${finland.capital}.`);

const increaseCountryPopulation = finland.population + 2;
const decreaseCountryPopulation = finland['population'] - 2;

console.log(`The increase country population by two million is: ${increaseCountryPopulation} millions`);
console.log(`The decrease country population by two million is: ${decreaseCountryPopulation} millions`);
console.log('//////////////////////')
/////////////////////////
//T. Object Methods
console.log('////T. Object Methods////')
   myCountry = {
    Country: 'India',
    Capital: 'New Delhi',
    Language: 'English',
    Population: 150,
    Neighbours: ['China', 'Bangladesh', 'Pakistan'],
    describe: function() {
        console.log(`${this.Country} has ${this.Population} million ${this.Language} speaking people, ${this.Neighbours.length} neighbouring countries and a capital called ${this.Capital}.`);
    },
    checkIsland: function() {
        this.isIsland = this.Neighbours.length === 0 ? true : false;
    }
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);

/////////////////////////
//U. Iteration: The for Loop
console.log('////U. Iteration: The for Loop////')
for(let i=1; i<=50; i++){
    console.log(`Voter number ${i} is currently voting`);
}
/////////////////////////
//V. Looping Arrays, Breaking and Continuing
console.log('////V. Looping Arrays, Breaking and Continuing ////')

//NOT done!!
// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
// }
// console.log(`percentages: ${percentages}`);
// console.log(`percentages2: ${percentages2}`);
// const areArraysEqual = (percentages) === (percentages2);
// console.log(`Are the arrays equal? ${areArraysEqual}`);




//W. Looping Backwards and Loops in Loops
console.log('////W. Looping Backwards and Loops in Loops ////')

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        if (j > 0) {
            console.log(`Neighbour: ${listOfNeighbours[i][j - 1]}`);
        }
        if (j < listOfNeighbours[i].length - 1) {
            console.log(`Neighbour: ${listOfNeighbours[i][j + 1]}`);
        }
    }
};


//W. Looping Backwards and Loops in Loops
console.log('////X. The while Loop////')
const populations = [1441, 130, 83, 328];
const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const percentage = (populations[i] / 7900) * 100;
    percentages3.push(percentage);
    i++;
}
console.log(percentages3);







 














