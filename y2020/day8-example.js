const inputs = [
  { ins: "nop", value: +0 },
  { ins: "acc", value: +1 },
  { ins: "jmp", value: +4 },
  { ins: "acc", value: +3 },
  { ins: "jmp", value: -3 },
  { ins: "acc", value: -99 },
  { ins: "acc", value: +1 },
  { ins: "jmp", value: -4 },
  { ins: "acc", value: +6 },
];

module.exports = {
    inputs
}