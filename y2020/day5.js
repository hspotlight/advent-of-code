
const { inputs } = require("./day5-input");

answer2(inputs);

function answer(inputs) {
    let max = 0
    for (let i=0;i<inputs.length;i++) {
        max = Math.max(max, getSeatId(inputs[i]))
    }
    console.log(max);
    return max;
}

function answer2(inputs) {
    let seatBooked = {}
    for (let i=0;i<inputs.length;i++) {
        const seatId = getSeatId(inputs[i])
        if (!seatBooked[seatId]) seatBooked[seatId] = 1;
    }
    for (let i=0;i<128;i++) {
        let line = "";
        for (let j=0;j<8;j++) {
            line += seatBooked[i*8 + j] ? "1 " : "0 ";   
        }
        console.log(i, ": ", line)
    }
    return seatBooked;
}

function getSeatId(input) {
    const row = input.substring(0, 7);
    const col = input.substring(7);
    const r = convertRowToBinary(row);
    const c = convertColToBinary(col);
    return r * 8 + c
}

function convertRowToBinary(row) {
    let output = "";
    for(let i=0;i<row.length;i++) {
        output += row[i] === 'B' ? 1 : 0
    }
    console.log(output);
    return parseInt(output, 2)
}

function convertColToBinary(col) {
    let output = "";
    for(let i=0;i<col.length;i++) {
        output += col[i] === 'R' ? 1 : 0
    }
    console.log(output);
    return parseInt(output, 2)
}

// v2
function getSeatIdv2(input) {
    return convertToBinary(input);
}

function convertToBinary(str) {
    let bin = "";
    for (let i=0;i<str.length;i++) {
        bin = (str === 'B' || str === 'R') ? 1 : 0;
    }
    return parseInt(bin, 2);
}