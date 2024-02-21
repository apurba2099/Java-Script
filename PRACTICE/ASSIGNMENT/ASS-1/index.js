// A. VALUSE AND VARIABLES
const country = "INDIA";
const continet = "ASIA";
let population = 10000000;
console.log(country);
console.log(continet);
console.log(population);

// B.DATA TYPES
const isIsland = true;
let language

console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

//C. LET, CONST AND VAR
language = "BENGALI"


//D. BASIC OPERATOR

//1.
console.log(`THe half of Population is ${population / 2}`);

//2.
console.log(`Increasing the population by 1 ${population+1}`);

//3.
let FinlandPopulation = 60000000;
if (population > FinlandPopulation) {
    console.log(`More people have our country`)
} else {
    console.log(`less people`)
}

//4.
const avgPeopleOfCountry = 330000000;
console.log(population<avgPeopleOfCountry);

//5.
let Description1 = "Portugal is in Europe.";
let Description2 = "Its 11 million people speak portuguese!";
console.log(Description1+" "+Description2);

//E. STRINGS AND TEMPLATE LITERALS
console.log(`This is using Template literals : ${Description1} ${Description2}`)

//F. TAKING DECISIONS IF/ELSE STATEMENTS
//1.
if(population > avgPeopleOfCountry){
    console.log("Portugal population is above average!")
}else{
    console.log("Portugal Population is above average")
}

//2.
population = 13000000;
if (population > avgPeopleOfCountry)
{
  console.log("Portugal's population is above average");
}
else
{
  console.log(
    `Portugal's population is ${
      (avgPeopleOfCountry - population) / 2
    } million below average`
  );
}

population = 130000000;
if (population > avgPeopleOfCountry)
{
  console.log("Portugal's population is above average");
}
else
{
  console.log(
    `Portugal's population is ${
      (avgPeopleOfCountry - population) / 2
    } million below average`
  );
}