let startTime = 0;
let endTime = 0;
accumulator = 0;

for (let i = 0; i < 10000; i++) {
    startTime = process.hrtime();
    for (let j = 0; j < 1000000; j++) {

    }
    endTime = process.hrtime(startTime);
    accumulator += (parseFloat(endTime[1] / 1000000));
}

const mean = (values, population) => {
  let mean = values.reduce((total, arr) => {
    return total + arr;
  })

  return parseFloat(mean / population);
}

// accumulator.splice(0, 3);
// console.log(accumulator);
// console.log(mean(accumulator, 22));

console.log("mean: %d", (accumulator / 10000));

