let startTime = 0;
let endTime = 0;
accumulator = 0;

for (let i = 0; i < 20; i++) {
    startTime = process.hrtime();
    for (let j = 0; j < 1000000; j++) {

    }
    endTime = process.hrtime(startTime);
    accumulator += parseFloat(endTime[1] / 1000000);
    console.log("Overhead execution time: %d", endTime[1] / 1000000);
}

console.log("mean: %d", (accumulator / 20));

