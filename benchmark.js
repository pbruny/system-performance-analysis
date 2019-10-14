let accumulator = 0;
const population = 1000000;
const criticalT1Percent = 2.861;
const criticalT5Percent = 2.093;
const batch = 20;

const mean = (total, population) => {
  return parseFloat(total / population).toFixed(20);
}

const standardDeviation = (mean, population) => {
  return parseFloat(Math.sqrt((mean**2)/population));
}

const confidenceInterval = (mean, population, standardDeviation, criticalValue) => {
  let result = [];
  let critical = criticalValue * (standardDeviation/Math.sqrt(population));
  result[0] = (parseFloat(mean) - critical).toFixed(15) + 'ms';
  result[1] = (parseFloat(mean) + critical).toFixed(15) + 'ms';

  return result;
}

const sum = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator++;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const minus = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator--;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const multiply = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator *= 2;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const division = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator /= 2;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const mod = () => {
  let totalExecutionTime = 0;
  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator %= 2;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const and = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = 1 && 1;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const or = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = 1 || 1;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const exp = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.exp(i);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const log = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.log(i);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const sin = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.sin(i);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const cos = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.cos(i);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const tan = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.tan(i);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const benchmarkSummary = (functionToExecute, functionName) => {
    const totalTime = functionToExecute();
    const calculatedMean = mean(totalTime, population);
    const calculatedStandardDeviation = standardDeviation(calculatedMean, population);
    const calculatedConfidenceInterval1Percent = confidenceInterval(calculatedMean, population, calculatedStandardDeviation, criticalT1Percent);
    const calculatedConfidenceInterval5Percent = confidenceInterval(calculatedMean, population, calculatedStandardDeviation, criticalT5Percent);
    console.log('\n----------------------------------------------------------------------------------------');
    console.log("The total execution time of 20 loop of 1 milion \'%s\' operation batch was %dms", functionName, totalTime.toFixed(3));
    console.log("The mean is: %dms\nThe standard deviation is: %dms\nThe confidence interval with 1% is: ", calculatedMean, calculatedStandardDeviation, calculatedConfidenceInterval1Percent);
    console.log("\nThe confidence interval with 5% is: ", calculatedConfidenceInterval5Percent);
    console.log('----------------------------------------------------------------------------------------');   
}

const benchmark = () => {
  setTimeout(() => {
    benchmarkSummary(sum, 'sum');
  }, 1000);
  
  setTimeout(() => {
    benchmarkSummary(minus, 'minus');
  }, 1000);
  
  setTimeout(() => {
    benchmarkSummary(multiply, 'multiply');
  }, 1000);
  
  setTimeout(() => {
    benchmarkSummary(division, 'division');
  }, 1000);

  setTimeout(() => {
    benchmarkSummary(mod, 'mod');
  }, 1000);
  
  setTimeout(() => {
    benchmarkSummary(and, 'and');
  }, 1000);
  
  setTimeout(() => {
    benchmarkSummary(or, 'or');
  }, 1000);
  
  setTimeout(() => {
    benchmarkSummary(exp, 'exp');
  }, 1000);
  
  setTimeout(() => {
    benchmarkSummary(log, 'log');
  }, 1000);
  
  setTimeout(() => {
    benchmarkSummary(sin, 'sin');
  }, 1000);
  
  setTimeout(() => {
    benchmarkSummary(cos, 'cos');
  }, 1000);
  
  setTimeout(() => {
    benchmarkSummary(tan, 'tan');
  }, 1000);
}

benchmark();