const { inputs } = require('./day9-input');
const preambleLength = 25
// const { inputs } = require('./day9-example');
// const preambleLength = 5 // for example


function printFirstInValid (inputs) {

    for (let i=preambleLength;i<inputs.length;i++) {
        const preambles = inputs.slice(i - preambleLength, i)
        const numberToCheck = inputs[i]
        // console.log(preambles, inputs[i])

        if (!isValid(preambles, numberToCheck)) {
            console.log(numberToCheck);
            break;
        }
    }
}

// part1: 507622668
function isValid(preambles, numberToCheck) {
    for (let i=0;i<preambles.length;i++) {
        for (let j=i+1;j<preambles.length;j++) {
            if (preambles[i] + preambles[j] === numberToCheck) {
                return true;
            }
        }
    }
    return false;
}

function findSetOfNumberAddUpToX(inputs, number) {
    for (let i=0;i<inputs.length;i++) {
        let sum = 0;
        for (let j=i;j<inputs.length;j++) {
            sum += inputs[j];
            if (sum === number) {
                console.log(i, j, number)
                return [i, j]
            }
        }
    }
} 

// 19457622 57230883 76688505
function findSumOfMinMaxBetweenRange(array, minIndex, maxIndex) {
    let max = 0, min = 999999999999;
    for (let i=minIndex; i<=maxIndex;i++) {
        max = Math.max(max, array[i]);
        min = Math.min(min, array[i]);
    }
    console.log(min, max, min + max)
}

printFirstInValid(inputs);

// findSetOfNumberAddUpToX(inputs, 127);
findSetOfNumberAddUpToX(inputs, 507622668);
findSumOfMinMaxBetweenRange(inputs, 515 ,531);