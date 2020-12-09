// remove new line \n(?!^$) and replace by space

function countValid(lines) {
    let count = 0;
    lines.forEach(line => {
        const obj = getObj(line)
        if (isValid(obj)) {
            count++;
        }
    })
    return count;
}

function getObj(line) {
    const object = {}
    const keyValue = line.split(" ")
    keyValue.forEach(kv => {
        const keyV = kv.split(":")
        object[keyV[0]] = keyV[1];
    })
    return object
}

function isValid(obj) {
    const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
    const hgtPattern = /^(\d+)(cm|in)$/
    const hclPattern = /^#[0-9a-f]{6}$/
    const eclPattern = /^(amb|blu|brn|gry|grn|hzl|oth)$/
    const pidPattern = /^0*[0-9]{9}$/
    for (let i=0;i<requiredFields.length;i++) {
        const field = requiredFields[i]
        const value = obj[field]

        if (!value) {
            return false;
        }
        else {
            if (field === "byr" && !(1920 <= +value && +value <= 2002)) return false;
            if (field === "iyr" && !(2010 <= +value && +value <= 2020)) return false;
            if (field === "eyr" && !(2020 <= +value && +value <= 2030)) return false;
            if (field === "hgt") {
                const result = value.match(hgtPattern)
                if (!result) return false;
                const [x, height, unit] = result
                if (unit === 'cm' && !(150 <= +height && height <= 193)) return false;
                if (unit === 'in' && !(59 <= +height && height <= 76)) return false;
            }
            if (field === "hcl") {
                const result = value.match(hclPattern)
                if (!result) return false;
            }
            if (field === "ecl") {
                const result = value.match(eclPattern)
                if (!result) return false;
            }
            if (field === "pid") {
                const result = value.match(pidPattern)
                if (!result) return false;
            }
        }
    }
    return true;
}