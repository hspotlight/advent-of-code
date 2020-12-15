// const { instructions } = require("./day12-example");
const { instructions } = require("./day12-input");

function turnLeft(direction, degree) {
  const turns = ["E", "N", "W", "S"];
  const move = degree / 90; // +1, +2, +3
  const index = (turns.indexOf(direction) + move) % 4;
  return turns[index];
}

function turnRight(direction, degree) {
  const turns = ["E", "S", "W", "N"];
  const move = degree / 90; // +1, +2, +3
  const index = (turns.indexOf(direction) + move) % 4;
  return turns[index];
}

function journey(instructions) {
  let north = 0,
    east = 0,
    direction = "E";
  for (let index = 0; index < instructions.length; index++) {
    const instruction = instructions[index];
    const operation = instruction[0];
    const argument = +instruction.substring(1);

    if (operation === "N") north += argument;
    else if (operation === "S") north -= argument;
    else if (operation === "E") east += argument;
    else if (operation === "W") east -= argument;
    else if (operation === "L") direction = turnLeft(direction, argument);
    else if (operation === "R") direction = turnRight(direction, argument);
    else if (operation === "F") {
      if (direction === "N") north += argument;
      else if (direction === "S") north -= argument;
      else if (direction === "E") east += argument;
      else if (direction === "W") east -= argument;
    }
  }
  console.log(Math.abs(north) + Math.abs(east));
  return [north, east, direction];
}

function turnWaypointLeft(waypointN, waypointE, degree) {
    const turnRadian = degree * (Math.PI/180)
    const newE = Math.round(waypointE * Math.cos(turnRadian) - waypointN * Math.sin(turnRadian))
    const newN = Math.round(waypointE * Math.sin(turnRadian) + waypointN * Math.cos(turnRadian))
    return [newN, newE]
}
function turnWaypointRight(waypointN, waypointE, degree) {
    const turnRadian = -degree * (Math.PI/180)
    const newE = Math.round(waypointE * Math.cos(turnRadian) - waypointN * Math.sin(turnRadian))
    const newN = Math.round(waypointE * Math.sin(turnRadian) + waypointN * Math.cos(turnRadian))
    return [newN, newE]
}

function journey2(instructions) {
  let north = 0, east = 0;
  let waypointN = 1;
  let waypointE = 10;
  for (let index = 0; index < instructions.length; index++) {
    const instruction = instructions[index];
    const operation = instruction[0];
    const argument = +instruction.substring(1);

    if (operation === "N") waypointN += argument;
    else if (operation === "S") waypointN -= argument;
    else if (operation === "E") waypointE += argument;
    else if (operation === "W") waypointE -= argument;
    else if (operation === "L") [waypointN, waypointE] = turnWaypointLeft(waypointN, waypointE, argument);
    else if (operation === "R") [waypointN, waypointE] = turnWaypointRight(waypointN, waypointE, argument);
    else if (operation === "F") {
        north = north + waypointN * argument;
        east = east + waypointE * argument;
        console.log([north, east], [waypointN, waypointE], argument);
    }
  }
  console.log(Math.abs(north) + Math.abs(east));
  return [north, east];
}

console.log(journey(instructions));
console.log(journey2(instructions));
