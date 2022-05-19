const defaultResult = 0;
let currentResult = defaultResult;

// gets input from inout field
function getUserInput () {
  return parseInt(usrInput.value)
}

// generates and writes calculation log
function createAndWriteOutput (operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
}

function substract () {
  const enteredNumber = getUserInput();
  const calcDescription = `${currentResult} - ${enteredNumber}`;
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}
function multiply () {
  const enteredNumber = getUserInput();
  const calcDescription = `${currentResult} * ${enteredNumber}`;
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}
function divide () {
  const enteredNumber = getUserInput();
  const calcDescription = `${currentResult} / ${enteredNumber}`;
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



// let errorMessage = 'An error ocurred';
