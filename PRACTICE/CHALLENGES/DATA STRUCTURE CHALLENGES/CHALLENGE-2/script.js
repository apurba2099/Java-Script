"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// task: 1
let goal = 0;
for (const score of game.scored) {
  console.log(`Goal ${++goal}: ${score}`);
}
// task: 2
const {
  odds: { team1: first, x: draw, team2: second },
} = game;
console.log(`${(first + draw + second / 3).toFixed(2)}% Average`);

// task: 3
const { team1, team2 } = game;
console.log(
  `Odd of victory ${team1}: ${first}\n Odd of draw: ${draw}\n  Odd of victory ${team2}: ${second}`
);

// task: 4
const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};
