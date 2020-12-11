
const example = [
  "L.LL.LL.LL",
  "LLLLLLL.LL",
  "L.L.L..L..",
  "LLLL.LL.LL",
  "L.LL.LL.LL",
  "L.LLLLL.LL",
  "..L.L.....",
  "LLLLLLLLLL",
  "L.LLLLLL.L",
  "L.LLLLL.LL",
];

// const inputs = example;
const {inputs} = require('./day11-input');

console.log(countOccupiedSeat(inputs));
function countOccupiedSeat(inputs) {
    let prevSeatMap = [...inputs.map(seatRow => seatRow.slice(0))]
    let newSeatMap
    while(true) {
        newSeatMap = applyRule(prevSeatMap)
        if (compare(prevSeatMap, newSeatMap)) break;
        prevSeatMap = newSeatMap
    }

    let count = 0;
    for (let i=0;i<newSeatMap.length;i++) {
        for (let j=0;j<newSeatMap[0].length;j++) {
            if (newSeatMap[i][j] === '#') count++;
        }
    }
    return count;
}

function applyRule(seatMap) {
    const newSeatMap = [...seatMap.map(seatRow => seatRow.slice(0))]

    const rows = seatMap.length;
    const cols = seatMap[0].length;
    for (let i=0;i<rows;i++) {
        for (let j=0;j<cols;j++) {
            if (seatMap[i][j] === 'L') {
                // if (countOccupiedAdjacent(seatMap, i, j) === 0) {
                //     newSeatMap[i]
                //     newSeatMap[i] = newSeatMap[i].substring(0, j) + '#' + newSeatMap[i].substring(j + 1);
                // }
                if (countOccupiedFirstSeen(seatMap, i, j) === 0) {
                    newSeatMap[i]
                    newSeatMap[i] = newSeatMap[i].substring(0, j) + '#' + newSeatMap[i].substring(j + 1);
                }
            }
            else if (seatMap[i][j] === '#') {
                // if (countOccupiedAdjacent(seatMap, i, j) >= 4) {
                //     newSeatMap[i] = newSeatMap[i].substring(0, j) + 'L' + newSeatMap[i].substring(j + 1);
                // }
                if (countOccupiedFirstSeen(seatMap, i, j) >= 5) {
                    newSeatMap[i] = newSeatMap[i].substring(0, j) + 'L' + newSeatMap[i].substring(j + 1);
                }
            }
        }
    }
    console.log(newSeatMap)
    return newSeatMap
}

function countOccupiedAdjacent(seatMap, i, j) {
    const incI = [-1, -1, -1, 0, 1, 1, 1, 0];
    const incJ = [-1, 0, 1, 1, 1, 0, -1, -1];
    let count = 0;
    for (let k=0;k<8;k++) {
        if (inRange(seatMap, i + incI[k], j + incJ[k])) {
            if (seatMap[i + incI[k]][j + incJ[k]] === '#') {
                count++;
            }
        }
    }
    return count;
}

function countOccupiedFirstSeen(seatMap, i, j) {
    const incI = [-1, -1, -1, 0, 1, 1, 1, 0];
    const incJ = [-1, 0, 1, 1, 1, 0, -1, -1];
    let count = 0;
    for (let k=0;k<8;k++) {

        let w = 1;
        while(inRange(seatMap, i + incI[k] * w, j + incJ[k] * w)) {
            if (seatMap[i + incI[k] * w][j + incJ[k] * w] === '#') {
                count++;
                break;
            }
            if (seatMap[i + incI[k] * w][j + incJ[k] * w] === 'L') {
                break;
            }
            w++;
        }

    }
    return count;
}

function inRange(seatMap, i, j) {
    return 0 <= i && i < seatMap.length && 0 <= j && j < seatMap[0].length;
}

function compare(seatMapA, seatMapB) {
    for (let i=0;i<seatMapA.length;i++) {
        if (seatMapA[i] !== seatMapB[i]) return false;
    }
    return true;
}