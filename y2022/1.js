const sumCaloriesGroupByElfs = (input) => {
    const elfs = input.split("\n\n");
    const elfsCalories = elfs.map(e => e.split("\n").reduce((sum, v) => sum + +v, 0));
    return elfsCalories;
}

const ans1 = Math.max(...sumCaloriesGroupByElfs(input));

const top3 = sumCaloriesGroupByElfs(input).sort().slice(-3);
const ans2 = top3[0] + top3[1] + top3[2];
