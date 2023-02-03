const gameEvents = new Map([
  [17, "Goal"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [80, "Goal"],
  [90, "Yellow card"],
]);

// 1
const events = new Set(gameEvents.values());
// console.log(events)

// 2
gameEvents.delete(64);
// console.log(gameEvents);

// 3
const time = [...gameEvents.keys()].pop();
console.log(
  `Một sự kiện xảy ra, trung bình mỗi ${time / gameEvents.size} phút.`
);

// 4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half}  HALF] ${min} : ${event}`);
}

// 5
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"❤".repeat(i + 1)}`);
  }
});

// 6
const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao937661
09;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis
2323639855;12:30`;

const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "�" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}

// 7
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
