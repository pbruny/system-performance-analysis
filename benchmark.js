let accumulator = 0;

const sum = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= 1000000; j++){
      accumulator = 1+1;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
    // console.log("The total execution time of sum function was: %ds %dms", endTime[0], endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const minus = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= 1000000; j++){
      accumulator = 2-1;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
    // console.log("The total execution time of minus function was: %ds %dms", endTime[0], endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const multiply = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= 1000000; j++){
      accumulator = 2*2;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
    // console.log("The total execution time of multiply function was: %ds %dms", endTime[0], endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const division = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= 1000000; j++){
      accumulator = 9/3;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
    // console.log("The total execution time of division function was: %ds %dms", endTime[0], endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const mod = () => {
  let totalExecutionTime = 0;
  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= 1000000; j++){
      accumulator = 9%4;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
    // console.log("The total execution time of mod function was: %ds %dms", endTime[0], endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const and = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= 1000000; j++){
      accumulator = 1 && 1;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
    // console.log("The total execution time of and operator was: %ds %dms", endTime[0], endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const or = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= 1000000; j++){
      accumulator = 1 || 1;
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
    // console.log("The total execution time of or operator was: %ds %dms", endTime[0], endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const exp = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= 10000; j++){
      accumulator = Math.exp(20);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
    // console.log("The total execution time of exp function was: %ds %dms", endTime[0], endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const log = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= 1000000; j++){
      accumulator = Math.log(100);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
    // console.log("The total execution time of log function was: %ds %dms", endTime[0], endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const sin = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= 1000000; j++){
      accumulator = Math.sin(45);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
    // console.log("The total execution time of sin function was: %ds %dms", endTime[0], endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const cos = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= 1000000; j++){
      accumulator = Math.cos(45);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
    // console.log("The total execution time of cos function was: %ds %dms", endTime[0], endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const tan = () => {
  let totalExecutionTime = 0;

  for(let i = 1; i <= 20; i++){
    const startTime = process.hrtime();
    for(let j = 1; j <= 1000000; j++){
      accumulator = Math.tan(45);
    }
    const endTime = process.hrtime(startTime);
    totalExecutionTime += (endTime[1] / 1000000);
    // console.log("The total execution time of tan function was: %ds %dms", endTime[0], endTime[1] / 1000000);
  }

  return totalExecutionTime;
}

const benchmarkSummary = () => {
  setTimeout(() => {
    console.log("The total execution time of 20 loop of 1 milion sum operation batch was %dms", sum().toFixed(2));
  }, 1000);
  
  setTimeout(() => {
    console.log("The total execution time of 20 loop of 1 milion minus operation batch was %dms", minus().toFixed(2));
  }, 1000);
  
  setTimeout(() => {
    console.log("The total execution time of 20 loop of 1 milion multiply operation batch was %dms", multiply().toFixed(2));
  }, 1000);
  
  setTimeout(() => {
    console.log("The total execution time of 20 loop of 1 milion division operation batch was %dms", division().toFixed(2));
  }, 1000);
  
  setTimeout(() => {
    console.log("The total execution time of 20 loop of 1 milion and operator batch was %dms", and().toFixed(2));
  }, 1000);
  
  setTimeout(() => {
    console.log("The total execution time of 20 loop of 1 milion or operator batch was %dms", or().toFixed(2));
  }, 1000);
  
  setTimeout(() => {
    console.log("The total execution time of 20 loop of 1 milion exp opreation batch was %dms", exp().toFixed(2));
  }, 1000);
  
  setTimeout(() => {
    console.log("The total execution time of 20 loop of 1 milion log operation batch was %dms", log().toFixed(2));
  }, 1000);
  
  setTimeout(() => {
    console.log("The total execution time of 20 loop of 1 milion sin operation batch was %dms", sin().toFixed(2));
  }, 1000);
  
  setTimeout(() => {
    console.log("The total execution time of 20 loop of 1 milion cos operation batch was %dms", cos().toFixed(2));
  }, 1000);
  
  setTimeout(() => {
    console.log("The total execution time of 20 loop of 1 milion tan operation batch was %dms", tan().toFixed(2));
  }, 1000);
}

benchmarkSummary();


