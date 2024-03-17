//SESSION 6
///////////////////////////////////////////////
// LOGICAL OPERATOR

const hasDriverLicense = true; //A
const hasGoodVison = true; //B

console.log(hasDriverLicense && hasGoodVison);
console.log(hasDriverLicense || hasGoodVison);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVison) {
//   console.log("Sarah is able to drive.");
// } else {
//   console.log("Someone else should drive.");
// }

const isTired = true; //C

console.log(hasDriverLicense || hasGoodVison || isTired);
console.log(hasDriverLicense && hasGoodVison && isTired);

if (hasDriverLicense && hasGoodVison && !isTired) {
  console.log("Sarah is able to drive.");
} else {
  console.log("Someone else should drive.");
}


///////////////////////////////////////////////
// SWITCH STATEMENT

const day = "wednesday";

switch (day.toLowerCase()) {
  case "monday": // day === "Monday"
    console.log("Planning Backend");
    break;
  case "tuesday":
    console.log("Prepare DB Models");
    break;
  case "wednesday":
  case "thursday":
    console.log("Writing Codes");
    break;
  case "friday":
    console.log("Implemented Successfull");
    break;
  case "saturday":
  case "sunday":
    console.log("Deployed to production");
    break;
  default:
    console.log("Not a valid day! :)");
}

if (day === "monday") {
  console.log("Planning Backend");
} else if (day === "tuesday") {
  console.log("Prepare DB Models");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Writing Codes");
} else if (day === "friday") {
  console.log("Implemented Successfull");
} else if (day === "saturday" || day === "sunday") {
  console.log("Deployed to production");
} else {
  console.log("Not a valid day! :)");
}


///////////////////////////////////////////////
// STATEMENT & EXPRESSIONS

//expression
3 + 4;
2002;
true && false && !false;

//statement
if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Biku";
console.log(`I'm ${2037 - 2002} years old ${me}`);


///////////////////////////////////////////////
// THE CONDITIONAL (TERNARY) OPERATOR
//Sytax: condition ? Statement1 : Statement2

const age = 23;

// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");

// if (age >= 18) {
//   console.log("I like to drink wine 🍷");
// } else {
//   console.log("I like to drink water 💧");
// }

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
