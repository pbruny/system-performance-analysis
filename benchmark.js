let accumulator = 0;
const population = 1000000;
const criticalT1Percent = 2.861;
const criticalT5Percent = 2.093;
const batch = 20;
const fs = require('fs');
let resultHtmlTable = `
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Benchmark Result</title>
	<style>
		table {
			border-collapse: collapse;
			width: 100%;
			font-family: sans-serif;
    }
    
    h2 {
      text-align: center;
      font-family: sans-serif;
      color: #ddd;
    }

		th,
		td {
			text-align: center;
			padding: 10px;
    }
    
    tr:nth-child(odd) {
      background-color: #393939;
      color: #ddd;
		}

		tr:nth-child(even) {
      color: #808080;
      background-color: #222222;
    }
    body {
      background-color: #272727;
    }
	</style>
</head>

<body>
`;
fs.writeFileSync('index.html', resultHtmlTable);

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
      accumulator = i && j;
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
      accumulator = i || j;
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
    console.log("The mean of each batch is: %dms\nThe standard deviation of each batch is: %dms\nThe confidence interval with 1% is: ", calculatedMean, calculatedStandardDeviation, calculatedConfidenceInterval1Percent);
    console.log("\nThe confidence interval with 5% is: ", calculatedConfidenceInterval5Percent);
    console.log('----------------------------------------------------------------------------------------');
    const logResult = `
    <h2>Result Benchmark for ' ${functionName} ' operation of each execution batch</h2>
    <table>
    <tr>
      <th>Total Batches Execution Time </th>
      <th>Mean</th>
      <th>Standard Deviation</th>
      <th>Confidence Interval 5%</th>
      <th>Confidence Interval 1%</th>
    </tr>
    <tr>
      <td>${totalTime.toFixed(3)}ms</td>
      <td>${calculatedMean}ms</td>
      <td>${calculatedStandardDeviation}ms</td>
      <td>[${calculatedConfidenceInterval1Percent[0]}, ${calculatedConfidenceInterval1Percent[1]}]</td>
      <td>[${calculatedConfidenceInterval5Percent[0]}, ${calculatedConfidenceInterval5Percent[1]}]</td>
    </tr>
  </table><br/><br/><br/>`

    return logResult;          
}

const benchmark = () => {
  setTimeout(() => {
    const result = benchmarkSummary(sum, '+');
    fs.appendFileSync('index.html', result);
  }, 1000);
  
  setTimeout(() => {
    const result = benchmarkSummary(minus, '-');
    fs.appendFileSync('index.html', result);
  }, 1000);
  
  setTimeout(() => {
    const result = benchmarkSummary(multiply, '*');
    fs.appendFileSync('index.html', result);
  }, 1000);
  
  setTimeout(() => {
    const result = benchmarkSummary(division, '/');
    fs.appendFileSync('index.html', result);
  }, 1000);

  setTimeout(() => {
    const result = benchmarkSummary(mod, '%');
    fs.appendFileSync('index.html', result);
  }, 1000);
  
  setTimeout(() => {
    const result = benchmarkSummary(and, 'and');
    fs.appendFileSync('index.html', result);
  }, 1000);
  
  setTimeout(() => {
    const result = benchmarkSummary(or, 'or');
    fs.appendFileSync('index.html', result);
  }, 1000);
  
  setTimeout(() => {
    const result = benchmarkSummary(exp, 'exp');
    fs.appendFileSync('index.html', result);
  }, 1000);
  
  setTimeout(() => {
    const result = benchmarkSummary(log, 'log');
    fs.appendFileSync('index.html', result);
  }, 1000);
  
  setTimeout(() => {
    const result = benchmarkSummary(sin, 'sin');
    fs.appendFileSync('index.html', result);
  }, 1000);
  
  setTimeout(() => {
    const result = benchmarkSummary(cos, 'cos');
    fs.appendFileSync('index.html', result);
  }, 1000);
  
  setTimeout(() => {
    const result = benchmarkSummary(tan, 'tan');
    fs.appendFileSync('index.html', result);
  }, 1000);
}

benchmark();