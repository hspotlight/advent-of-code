const {inputs} = require('./day6-input');
// const {inputs} = require('./day6-example');

function countYes1(input) {
    const char = {}
    let personAnswers = input.split(/\s+/)
    personAnswers.forEach(answer => {
        for (let i=0;i<answer.length;i++) {
            char[answer[i]] = true;
        }
    })
    return Object.keys(char).length
}

function countYes2(input) {
    const char = {}
    let personAnswers = input.split(/\s+/)
    personAnswers.forEach(answer => {
        for (let i=0;i<answer.length;i++) {
            
            if (!char[answer[i]]) char[answer[i]] = 0
            char[answer[i]] += 1;
        }
    })
    
    let count = 0;
    Object.keys(char).forEach(c => {
        if (char[c] === personAnswers.length) count++;
    })
    return count
}

function sumYes(inputs) {
    let sum = 0
    inputs.forEach(input => {
        sum += countYes1(input)
    })
    return sum;

    // v2
    // return inputs.reduce((sum, value) => sum + countYes(value), 0)
}
console.log(sumYes(inputs))

