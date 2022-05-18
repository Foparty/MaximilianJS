const defaultResult = 0;
let currentResult = defaultResult;


function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

currentResult = add (1, 2);
// console.log(currentResult);


currentResult = (currentResult + 10) * 3 / 2 - 1;

// console.log(currentResult);

let calculationDescription = `( ${currentResult}  + 10) * 3 / 2 - 1`;
// let errorMessage = 'An error ocurred';
outputResult(currentResult, calculationDescription);