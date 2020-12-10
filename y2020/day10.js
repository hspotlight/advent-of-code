// const { inputs } = require("./day10-example");``
const { inputs } = require("./day10-input");

function getAnswer(inputs) {
  inputs = inputs.sort((a, b) => a - b);
  const diffCount = {};
  diffCount[1] = 0;
  diffCount[2] = 0;
  diffCount[3] = 0;
  for (let i = 0; i < inputs.length - 1; i++) {
    // i, i + 1
    const diff = inputs[i + 1] - inputs[i];
    diffCount[diff]++;
  }
  return diffCount;
}

function getAnswer2(inputs) {
  inputs = inputs.sort((a, b) => a - b);
  const jump = {}; // map
  for (let i = 0; i < inputs.length; i++) {
    for (let j = i + 1; j < inputs.length; j++) {
      const diff = inputs[j] - inputs[i];
      if (diff <= 3) {
        if (!jump[[inputs[i]]]) jump[inputs[i]] = [];
        jump[inputs[i]].push(inputs[j]);
      }
    }
  }

  // find all paths
  //   console.log(jump);
  const x = search(jump, 0, inputs[inputs.length - 1], [1]);
  console.log(x)
}

const dp = {};

function search(jump, current, target, journey) {
  if (dp[current]) {
    return dp[current];
  }

  if (current === target) {
    return 1;
  }

  dp[current] = 0;
  const nexts = jump[current];
  if (nexts) {
    for (let i = 0; i < nexts.length; i++) {
        dp[current] += search(jump, nexts[i], target, [...journey, nexts[i]]);
    }
  }
  return dp[current];
}

// 1690
console.log(getAnswer(inputs));
getAnswer2(inputs);
