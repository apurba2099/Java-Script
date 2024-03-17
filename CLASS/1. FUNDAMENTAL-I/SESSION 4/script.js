//SESSION 4
/*
///////////////////////////////////////////////
// BASIC OPERATORS
// Arithmetical / Mathematical Operator
const now = 2023;

const ageBiku = now - 2002; 
// console.log(ageBiku);
const ageSarah = now - 2010;
// console.log(ageSarah);

console.log(ageBiku, ageSarah);

console.log(ageBiku*2, ageBiku/10, ageBiku%2, 2**3);
// 2**3 means 2 to the power of 3, 2*2*2 = 8;

const firstName = "Biku";
const lastName = "Pal";
// console.log(firstName+lastName);
console.log(firstName + ' ' + lastName);

// Assignment Operator
let x = 10 + 5; //x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 2; // x = x / 2 = 50
x++; // x = x + 1 = 51
x--; 
x--; //post decrement
++x;
--x; // pre decrement
console.log(x);

// Comparison Operator
console.log(ageBiku > ageSarah); // >, <, >=, <=

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now-2002 > now-2010);


///////////////////////////////////////////////
// OPERATOR PRECEDENCE
const now = 2023;
const ageBiku = now - 2002;
const ageSarah = now - 2010;

console.log(now - 2002 > now - 2010);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x = 10;
console.log(x, y);

const averageAge = (ageBiku + ageSarah) / 2;
console.log(ageBiku, ageSarah, averageAge);


///////////////////////////////////////////////
// STRINGS AND TEMPLATE LITERALS
const firstName = 'Justin';
const job = 'Programmer';
const birthYear = 2002;
const year = 2023;

const justin = "I,m " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(justin);

const justinNew = `I,m ${firstName}, a ${year-birthYear} years old ${job}!`;

console.log(justinNew);

console.log(`Just a regular string....`);

// Multiple Lines
console.log("String with \n\
multiple \n\
lines");

console.log(`The quick
brown fox
jumps over
the lazy dog`);


///////////////////////////////////////////////
// TAKING DECISIONS: IF/ELSE STATEMENTS
const age = 15;

if (age >= 18) {
  console.log("Sarah can get driving license 😎");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2023;

let century;
if (birthYear <= 1900) {
  century = 19;
} else if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

*/
