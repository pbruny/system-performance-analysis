let accumulator = 0;
const population = 1000000;
const criticalT1Percent = 2.861;
const criticalT5Percent = 2.093;

const mean = (total, population) => {
  return parseFloat(total / population).toFixed(20);
}

const standardDeviation = (mean, population) => {
  return Math.sqrt((mean**2)/population);
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

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = 1+1;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const minus = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = 2-1;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const multiply = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = 2*2;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const division = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = 9/3;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const mod = () => {
  let totalExecutionTime = 0;
  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = 9%4;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const and = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
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

  for(let i = 1; i <= 20; i++){
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

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.exp(20);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const log = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.log(100);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const sin = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.sin(45);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const cos = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.cos(45);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const tan = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.tan(45);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const benchmarkSummary = () => {
  setTimeout(() => {
    const totalTime = sum();
    const calculatedMean = mean(totalTime, population);
    const calculatedStandardDeviation = standardDeviation(calculatedMean, population);
    const calculatedConfidenceInterval = confidenceInterval(calculatedMean, population, calculatedStandardDeviation, 2.861);
    console.log("The total execution time of 20 loop of 1 milion sum operation batch was %dms", totalTime.toFixed(3));
    console.log("The mean is: %dms\nThe standard deviation is: %d\nThe confidence interval is: ", calculatedMean, calculatedStandardDeviation, calculatedConfidenceInterval);
  }, 1000);
  
  // setTimeout(() => {
  //   console.log("The total execution time of 20 loop of 1 milion minus operation batch was %dms", minus().toFixed(2));
  // }, 1000);
  
  // setTimeout(() => {
  //   console.log("The total execution time of 20 loop of 1 milion multiply operation batch was %dms", multiply().toFixed(2));
  // }, 1000);
  
  // setTimeout(() => {
  //   console.log("The total execution time of 20 loop of 1 milion division operation batch was %dms", division().toFixed(2));
  // }, 1000);
  
  // setTimeout(() => {
  //   console.log("The total execution time of 20 loop of 1 milion and operator batch was %dms", and().toFixed(2));
  // }, 1000);
  
  // setTimeout(() => {
  //   console.log("The total execution time of 20 loop of 1 milion or operator batch was %dms", or().toFixed(2));
  // }, 1000);
  
  // setTimeout(() => {
  //   console.log("The total execution time of 20 loop of 1 milion exp opreation batch was %dms", exp().toFixed(2));
  // }, 1000);
  
  // setTimeout(() => {
  //   console.log("The total execution time of 20 loop of 1 milion log operation batch was %dms", log().toFixed(2));
  // }, 1000);
  
  // setTimeout(() => {
  //   console.log("The total execution time of 20 loop of 1 milion sin operation batch was %dms", sin().toFixed(2));
  // }, 1000);
  
  // setTimeout(() => {
  //   console.log("The total execution time of 20 loop of 1 milion cos operation batch was %dms", cos().toFixed(2));
  // }, 1000);
  
  // setTimeout(() => {
  //   console.log("The total execution time of 20 loop of 1 milion tan operation batch was %dms", tan().toFixed(2));
  // }, 1000);
}

benchmarkSummary();


