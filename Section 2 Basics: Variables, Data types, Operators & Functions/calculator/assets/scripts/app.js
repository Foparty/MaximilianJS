const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

// console.log(currentResult);

let calculationDescription = `( ${currentResult}  + 10) * 3 / 2 - 1`;
let errorMessage = 'An error ocurred';
outputResult(currentResult, calculationDescription);