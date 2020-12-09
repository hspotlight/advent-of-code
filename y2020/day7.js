/**
 * lr c 1 bw, 2 my    light red bags      contain 1 bright white bag,  2 muted yellow bags.
 * do c 3 bw, d my    dark orange bags    contain 3 bright white bags, 4 muted yellow bags.
 * bw c 1 sg          bright white bags   contain 1 shiny gold bag.
 * my c 2 sg, 9 fb    muted yellow bags   contain 2 shiny gold bags,   9 faded blue bags.
 * sg c 1 do, 2 vp    shiny gold bags     contain 1 dark olive bag,    2 vibrant plum bags.
 * do c 3 fb, 4 db    dark olive bags     contain 3 faded blue bags,   4 dotted black bags.
 * vp c 5 fb, 6 db    vibrant plum bags   contain 5 faded blue bags,   6 dotted black bags.
 * fb c               faded blue bags     contain no other bags.
 * db c               dotted black bags   contain no other bags.
 */

const { inputs } = require("./day7-input");
// const { inputs } = require("./day7-example");

function createRelationship(inputs) {
  const rules = inputs.map((rule) => extractBags(rule));
  const relationship = {};
  rules.forEach((rule) => {
    addRelationship(relationship, rule);
  });
  return relationship;
}

function extractBags(rule) {
  const bags = rule
    .split(/(contain|,|\.)/)
    .filter(
      (text) => !(text.match(/(contain|,|\.|^$)/) || text === " no other bags")
    )
    .map((bag) => bag.replace(/(bags?|\d+)/g, "").trim());
  return bags;
}

function addRelationship(relationship, bags) {
  // reverse relationship direction
  const container = bags[0];
  for (let i = 1; i < bags.length; i++) {
    const bag = bags[i];
    if (!relationship[bag]) {
      relationship[bag] = [];
    }

    if (!relationship[bag].includes(container))
      relationship[bag].push(container);
  }
}

function countContainer(inputs) {
  // dfs, find visited
  const relationship = createRelationship(inputs);
  const visited = {};
  const initialColor = "shiny gold";
  findAllContainer(relationship, visited, initialColor);
  return Object.keys(visited).length - 1; // - 1 for source
}

function findAllContainer(relationship, visited, currentColor) {
  if (visited[currentColor]) return;
  visited[currentColor] = true;

  (relationship[currentColor] || []).forEach((nextColor) => {
    findAllContainer(relationship, visited, nextColor);
  });
}

// console.log(createRelationship(inputs));

// console.log(countContainer(inputs));

// part 2
function extractBagsWithNumber(rule) {
  const bags = rule
    .split(/(contain|,|\.)/)
    .filter(
      (text) => !(text.match(/(contain|,|\.|^$)/) || text === " no other bags")
    )
    .map((bag) => bag.replace(/(bags?)/g, "").trim());
  return bags;
}

function createRelationship2(inputs) {
  const rules = inputs.map((rule) => extractBagsWithNumber(rule));
  const relationship = {};
  rules.forEach((rule) => {
    addRelationship2(relationship, rule);
  });
  return relationship;
}

function addRelationship2(relationship, bags) {
  const container = bags[0];
  console.log(bags);
  for (let i = 1; i < bags.length; i++) {
    const bag = bags[i];
    if (!relationship[container]) {
      relationship[container] = {};
    }

    const result = bag.match(/(\d+) ([\w ]+)/);
    if (result) {
      relationship[container][result[2]] = result[1];
    }
  }
}

function countBagUnderIt(inputs) {
  const relationship = createRelationship2(inputs);
  console.log(relationship);
  const sum = {};
  const initialColor = "shiny gold";

  const countAllBag = (relationship, currentColor, sum) => {
    if (sum[currentColor]) return sum[currentColor];
    if (!relationship[currentColor]) return 0;

    sum[currentColor] = 0;
    let localSum = 0;
    Object.keys((relationship[currentColor] || [])).forEach(nextColor => {
        const nBags = +relationship[currentColor][nextColor];
        localSum += nBags + nBags * countAllBag(relationship, nextColor, sum); // plus under it
    })
    sum[currentColor] = localSum
    return localSum;
  }
  return countAllBag(relationship, initialColor, sum);
}

console.log(countBagUnderIt(inputs));
