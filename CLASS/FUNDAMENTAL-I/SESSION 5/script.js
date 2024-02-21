//SESSION 5
/*
///////////////////////////////////////////////
// TYPE CONVERSION AND COERCION
// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Biku"));

console.log(typeof NaN); //invalid

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old.");
console.log("I am " + "23" + " years old.");
console.log("I am " + String(23) + " years old.");

console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


///////////////////////////////////////////////
// TRUTHY AND FALSY VALUES

//Falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Biku")); //true
console.log(Boolean({})); //true
console.log(Boolean("")); //false

const money = 0;

if (money) {
  console.log("Don't spent it all.");
} else {
  console.log("You should get a way to make money.");
}

let height = 0;

if (height) {
  console.log("YAY! Height is defined.");
} else {
  console.log("Height is undefined.");
}


///////////////////////////////////////////////
// EQUALITY OPERATOR
const age = "18";

if (age === 18) console.log("You just became an adult. (strict)");

if (age == 18) console.log("You just became an adult. (loose)");

// "18" === 18 // false
// "18" == 18 // true

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number.");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}

*/
