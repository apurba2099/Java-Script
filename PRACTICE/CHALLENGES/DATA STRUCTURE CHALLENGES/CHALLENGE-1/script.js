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
// task-1
const [players1, players2] = game.players;
console.log(players1, players2);

// task-2
const [gk, ...fieldPlayers] = game.players[0];
console.log(gk, fieldPlayers);

// task-3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// task-4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// task-5
const { team1: teamOdd1, x: drawOdd, team2: teamOdd2 } = game.odds;
console.log(teamOdd1, teamOdd2, drawOdd);

// task-6
const printGoals = function (...players) {
  for (const player of players) {
    console.log(player);
  }
  console.log(`Total goals scored: ${players.length}`);
};
printGoals("Davis", "Muller", "Lewandowski", "Kimmich");
printGoals(game.scored);

// task-7
const moreLikelyToWin =
  teamOdd1 < teamOdd2 ? game.team1 : teamOdd2 < teamOdd1 ? game.team2 : "Draw";
console.log(`${moreLikelyToWin} is more likely to win based on odds.`);
