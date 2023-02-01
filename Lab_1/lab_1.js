//1
const game = {
  team1: "Bayern Munich",
  team2: "Dortmund",
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
      "Ganarby",
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
  scored: ["Lewandowski", "Ganarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//2
const gk = game.players[0][0];

const [, ...players] = Object.entries(game.players[0]);
for (const [, ...player] of players) {
  const fieldPlayers = player;
  console.log(`${fieldPlayers}`);
}

//3
for (const [, ...player] of Object.entries([game.players])) {
  const allPlayers = player;
  console.log(`${allPlayers}`);
}

//4
const players1Final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`${teamStr} ${odd}`);
}

//6
const printGoals = (n) => {
  console.log(`Player Goal: ${[...new Set(n)]}`);
  console.log(`All goal: ${[...new Set(n)].length}`);
};
printGoals(game.scored);

//7
console.log(`Victory: ${game.team2}`) ||
  (game.odds.team1 < game.odds.team2 && console.log(`Victory: ${game.team1}`));

// 8
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 9
const odds = Object.entries(game.odds);
let average = 0;
for (const [, odd] of odds) average += odd;
average /= odds.length;
console.log(`${average}`);

// 10
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr =
    team === "x" ? "Tỉ lệ hòa of draw" : `Tỉ lệ thắng của ${game[team]}:`;
  console.log(`${teamStr} ${odd}`);
}

//11
const scorers = new Map();
for (const [i, player] of Object.entries(game.scored)) {
  scorers.set(player, i);
}
console.log(scorers);
