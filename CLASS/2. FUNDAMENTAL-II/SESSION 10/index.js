//SESSION 10
/*
//////////////////////////////////////
// INTRODUCTON TO OBJECTS
const bikuArray = [
  "Bikram",
  "Pal",
  2024 - 2002,
  "Coder",
  ["Michael", "Peter", "Steven"],
];

const biku = {
  firstName: "Bikram",
  lastName: "Pal",
  age: 2024 - 2002,
  work: "Coder",
  friends: ["Michael", "Peter", "Steven"],
};
*/

/*
//////////////////////////////////////
// DOT VS. BRACKET NOTATION
const biku = {
  firstName: "Bikram",
  lastName: "Pal",
  age: 2024 - 2002,
  work: "Coder",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(biku);

console.log(biku.firstName);
console.log(biku["firstName"]);

const nameKey = "Name";
console.log(biku["first" + nameKey]);
console.log(biku["last" + nameKey]);

// console.log(biku.'last' + nameKey); //invalid

const interestedIn = prompt(
  "What do you want to know about me? Choose between firstName, lastName, age, work and friends"
);

if (biku[interestedIn]) {
  console.log(biku[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, work and friends"
  );
}

//add
biku.location = "Kalna";
biku["instagram"] = "bikrampal_";
console.log(biku);

//Challenge
// "Bikram has 3 friends, and his one of the friend is Michael"

console.log(
  `${biku.firstName} has ${biku.friends.length} friends and his one of the friend is ${biku.friends[0]}`
);
*/

/*
//////////////////////////////////////
// OBJECT METHODS
const biku = {
  firstName: "Bikram",
  lastName: "Pal",
  birthYear: 2002,
  work: "Coder",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.work
    }, and he has ${this.hasDriverLicense ? "a" : "not"} driver's license`;
  },
};

console.log(biku.calcAge());

console.log(biku.age);
console.log(biku.age);

// Challenge
// "Bikram is a 22 year old Coder, and he has a driver's license"

console.log(biku.getSummary());
*/

/*
//////////////////////////////////////
// ITERATION: FOR LOOP

// console.log("lifting weights repetition 1 ✨");
// console.log("lifting weights repetition 2 ✨");
// console.log("lifting weights repetition 3 ✨");
// console.log("lifting weights repetition 4 ✨");
// console.log("lifting weights repetition 5 ✨");
// console.log("lifting weights repetition 6 ✨");
// console.log("lifting weights repetition 7 ✨");
// console.log("lifting weights repetition 8 ✨");
// console.log("lifting weights repetition 9 ✨");
// console.log("lifting weights repetition 10 ✨");

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep} ✨`);
}
*/

/*
//////////////////////////////////////
// LOOPING ARRAYS, BREAKING AND CONTINUING
const biku = [
  "Bikram",
  "Pal",
  2024 - 2002,
  "Coder",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

// console.log(biku[0]);
// console.log(biku[4]);
// console.log(biku[6]); //does not exist

for (let i = 0; i < biku.length; i++) {
  console.log(biku[i], typeof biku[i]);

  //Filling types array
  // types[i] = typeof biku[i];
  types.push(typeof biku[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2003];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}

console.log(ages);

// continue and break

// "continue" skips the current iteration
console.log("--- CONTINUE ---");
for (let i = 0; i < biku.length; i++) {
  if (typeof biku[i] !== "string") continue;

  console.log(biku[i], typeof biku[i]);
}

console.log("--- BREAK ---");
for (let i = 0; i < biku.length; i++) {
  if (typeof biku[i] === "number") break;

  console.log(biku[i], typeof biku[i]);
}
*/

/*
//////////////////////////////////////
// LOOPING BACKWARDS AND LOOPS IN LOOPS
const biku = [
  "Bikram",
  "Pal",
  2024 - 2002,
  "Coder",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = biku.length - 1; i >= 0; i--) {
  console.log(i, biku[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 😎`);
  }
}
*/

/*
//////////////////////////////////////
// The While Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep} ✨`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: lifting weights repetition ${rep} ✨`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/