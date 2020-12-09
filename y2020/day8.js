const { inputs } = require("./day8-input");
// const { inputs } = require("./day8-example");

const length = inputs.length;

function printAccBeforeTerminate(inputs) {
  let index = 0;
  let acc = 0;
  const executed = {};

  while (index < length) {
    if (executed[index]) {
      return "error";
    }
    executed[index] = true;
    if (inputs[index].ins === "acc") {
      acc += inputs[index].value;
      index += 1;
    } else if (inputs[index].ins === "jmp") {
      index += inputs[index].value;
    } else {
      index += 1;
    }
  }

  console.log(acc);
  return "terminated";
}

function findCorruptedOperation(inputs) {
  const possibleCorrupted = findNopJmpIndex(inputs);
  for (let i = 0; i < possibleCorrupted.length; i++) {
    const index = possibleCorrupted[i];
    toggleOperation(inputs[index]);
    const answer = printAccBeforeTerminate(inputs);
    if (answer === "terminated") {
      console.log("helloworld", index, inputs[index]);
    }
    toggleOperation(inputs[index]);
  }
}

function toggleOperation(cmd) {
  if (cmd.ins === "nop") {
    cmd.ins = "jmp";
  } else if (cmd.ins === "jmp") {
    cmd.ins = "nop";
  }
}
function findNopJmpIndex(inputs) {
  return inputs
    .map((input, index) => {
      if (input.ins === "jmp" || input.ins === "nop") {
        return index;
      }
      return -1;
    })
    .filter((index) => index != -1);
}

// console.log(printAccBeforeTerminate(inputs))

findCorruptedOperation(inputs);
