let accumulator = 0;
const population = 10000000;
const criticalT1Percent = 2.861;
const criticalT5Percent = 2.093;
const batch = 20;
const fs = require('fs');
const overhead = 0.29;
nanosecond = 1000000;

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
      font-size: 18px;
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

const mean = (values, population) => {
  let mean = values.reduce((total, arr) => {
    return total + arr;
  })

  return parseFloat(mean / population);
}

const summation = (values) => {
  return values.reduce((total, arr) => {
    return total + arr;
  });
}

const variance = (values, mean) => {
  let variance = 0;
  let totalSum = 0
  for(let i = 0; i < values.length; i++){
    totalSum += ((values[i] - mean) ** 2);
    variance = totalSum / (values.length - 1);
  }
  return variance;
}

const standardDeviation = (variance) => {
  return parseFloat(Math.sqrt(variance));
}

const confidenceInterval = (mean, population, standardDeviation, criticalValue) => {
  let result = [];
  let critical = criticalValue * (standardDeviation/Math.sqrt(population));
  result[0] = parseFloat((mean) - critical).toFixed(12);
  result[1] = parseFloat((mean) + critical).toFixed(12);

  return result;
}

const sum = () => {
  let totalExecutionTime = [];

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator++;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime.push(((endTime[1] / 1000000) - overhead) / population);
  }

  return totalExecutionTime;
}

const minus = () => {
  let totalExecutionTime = [];

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator--;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime.push(((endTime[1] / 1000000) - overhead) / population);
  }

  return totalExecutionTime;
}

const multiply = () => {
  let totalExecutionTime = [];

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator *= 2;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime.push(((endTime[1] / 1000000) - overhead) / population);
  }

  return totalExecutionTime;
}

const division = () => {
  let totalExecutionTime = [];

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator /= 2;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime.push(((endTime[1] / 1000000) - overhead) / population);
  }

  return totalExecutionTime;
}

const mod = () => {
  let totalExecutionTime = [];
  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator %= 2;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime.push(((endTime[1] / 1000000) - overhead) / population);
  }

  return totalExecutionTime;
}

const and = () => {
  let totalExecutionTime = [];

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = i && j;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime.push(((endTime[1] / 1000000) - overhead) / population);
  }

  return totalExecutionTime;
}

const or = () => {
  let totalExecutionTime = [];

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = i || j;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime.push(((endTime[1] / 1000000) - overhead) / population);
  }

  return totalExecutionTime;
}

const exp = () => {
  let totalExecutionTime = [];

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.exp(i+1);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime.push(((endTime[1] / 1000000) - overhead) / population);
  }

  return totalExecutionTime;
}

const log = () => {
  let totalExecutionTime = [];

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.log(i);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime.push(((endTime[1] / 1000000) - overhead) / population);
  }

  return totalExecutionTime;
}

const sin = () => {
  let totalExecutionTime = [];

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.sin(i);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime.push(((endTime[1] / 1000000) - overhead) / population);
  }

  return totalExecutionTime;
}

const cos = () => {
  let totalExecutionTime = [];

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.cos(i);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime.push(((endTime[1] / 1000000) - overhead) / population);
  }

  return totalExecutionTime;
}

const tan = () => {
  let totalExecutionTime = [];

  for(let i = 1; i <= batch; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= population; j++){
      accumulator = Math.tan(i);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime.push(((endTime[1] / 1000000) - overhead) / population);
  }

  return totalExecutionTime;
}

const benchmarkSummary = (functionToExecute, functionName) => {
    const totalTime = functionToExecute();
    const testTotalTime = summation(totalTime);
    const calculatedMean = mean(totalTime, batch);
    const calculatedVariance = variance(totalTime, calculatedMean);
    const calculatedStandardDeviation = standardDeviation(calculatedVariance);
    const calculatedConfidenceInterval1Percent = confidenceInterval(calculatedMean, batch, calculatedStandardDeviation, criticalT1Percent);
    const calculatedConfidenceInterval5Percent = confidenceInterval(calculatedMean, batch, calculatedStandardDeviation, criticalT5Percent);
    console.log('\n----------------------------------------------------------------------------------------');
    console.log("Average single operation summation of \'%s\' operation: %dms", functionName, testTotalTime.toFixed(12));
    console.log("The mean of each operation is: %dms\nThe standard deviation is: %dms\nThe confidence interval with 1% is: ", calculatedMean, calculatedStandardDeviation, calculatedConfidenceInterval1Percent);
    console.log("\nThe confidence interval with 5% is: ", calculatedConfidenceInterval5Percent);
    console.log('----------------------------------------------------------------------------------------');
    const logResult = `
    <h2>Result Benchmark for ' ${functionName} ' operation of each execution batch</h2>
    <table>
    <tr>
      <th>Average single operation summation</th>
      <th>Single operation mean</th>
      <th>Standard Deviation</th>
      <th>Confidence Interval 5%</th>
      <th>Confidence Interval 1%</th>
    </tr>
    <tr>
      <td>${(testTotalTime * nanosecond).toFixed(6)}ns</td>
      <td>${(calculatedMean * nanosecond).toFixed(6)}ns</td>
      <td>${(calculatedStandardDeviation * nanosecond).toFixed(6)}ns</td>
      <td>[${parseFloat(calculatedConfidenceInterval1Percent[0] * nanosecond).toFixed(6)}ns, ${parseFloat(calculatedConfidenceInterval1Percent[1] * nanosecond).toFixed(6)}ns]</td>
      <td>[${parseFloat(calculatedConfidenceInterval5Percent[0] * nanosecond).toFixed(6)}ns, ${parseFloat(calculatedConfidenceInterval5Percent[1] * nanosecond).toFixed(6)}ns]</td>
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

const debug = () => {
  let total = sum();
let testMean = mean(total, 20);
let testSummation = summation(total);
let testVariance = variance(total, testMean);
let testStandard = standardDeviation(testVariance);
let testConfidence = confidenceInterval(testMean, 20, testStandard, criticalT5Percent);

console.log(total);
console.log("media: " + testMean);
console.log("somatorio: " + testSummation);
console.log("teste de media: " + testSummation/20);
console.log("variancia: " + testVariance);
console.log("desvio: " + testStandard);
console.log("intervalo: " + testConfidence);

}