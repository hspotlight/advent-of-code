const input = ``;
const score = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
  lost: 0,
  draw: 3,
  win: 6,
};
// lost 0, draw 3, win 6
// rock 1, paper 2, scissor 3

const opWinPairs = {
  A: "Z",
  B: "X",
  C: "Y",
};

const isOpWin = (op, us) => {
  return Object.keys(opWinPairs).reduce(
    (result, key) => (result |= key === op && opWinPairs[key] === us),
    false
  );
};

const getTotalScore1 = (input) => {
  const lines = input.split("\n");
  let total = 0;
  lines.forEach((line) => {
    const op = line[0];
    const us = line[2];
    if (score[op] === score[us]) {
      //   console.log("draw", score.draw, score[us]);
      total += score.draw + score[us];
    } else if (isOpWin(op, us)) {
      //   console.log("lost", score.lost, score[us]);
      total += score.lost + score[us];
    } else {
      //   console.log("win", score.win, score[us]);
      total += score.win + score[us];
    }
  });
  return total;
};

const ans1 = getTotalScore1(input);

const getTotalScore2 = (input) => {
  const options = ["A", "B", "C"];
  const lines = input.split("\n");
  let total = 0;
  lines.forEach((line, lineN) => {
    const op = line[0];
    const strategy = line[2];
    if (strategy === "Y") {
        console.log(lineN, "draw", op);
      total += score.draw + score[op];
    } else if (strategy === "X") {
        const us = options[(options.findIndex(x => x === op) - 1 + 3) % 3];
        console.log(lineN, "lost", us);
      total += score.lost + score[us];
    } else {
      //   console.log("win", score.win, score[us]);
      const us = options[(options.findIndex(x => x === op) + 1 + 3) % 3];
      console.log(lineN, "win", us);
      total += score.win + score[us];
    }
  });
  return total;
};

const ans2 = getTotalScore2(input);
