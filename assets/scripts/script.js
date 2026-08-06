let selectedOperator = null;

const operatorSymbols = {
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
};

function parseNumberInput(inputElement, label) {
  const rawValue = inputElement.value.trim();

  if (rawValue === "") {
    showError(`Please enter the ${label}.`);
    return null;
  }

  const parsedNumber = parseFloat(rawValue);

  if (Number.isNaN(parsedNumber)) {
    showError(`${label} is not a valid number.`);
    return null;
  }

  return parsedNumber;
}

function selectOperator(operator, btn) {
  clearError();
  selectedOperator = operator;
  highlightOperator(btn);
}

function calculate() {
  clearError();

  if (selectedOperator === null) {
    showError("Please choose an operator (+, -, *, /).");
    return;
  }

  const numberOne = parseNumberInput(inputOne, "first number");
  if (numberOne === null) return;

  const numberTwo = parseNumberInput(inputTwo, "second number");
  if (numberTwo === null) return;

  if (selectedOperator === "divide" && numberTwo === 0) {
    showError("Cannot divide by zero.");
    return;
  }

  let result;
  switch (selectedOperator) {
    case "add":
      result = numberOne + numberTwo;
      break;
    case "subtract":
      result = numberOne - numberTwo;
      break;
    case "multiply":
      result = numberOne * numberTwo;
      break;
    case "divide":
      result = numberOne / numberTwo;
      break;
  }

  const calcDescription = `${numberOne} ${operatorSymbols[selectedOperator]} ${numberTwo}`;
  outputResult(result, calcDescription);

  inputOne.value = result;
  inputTwo.value = "";
  selectedOperator = null;
  clearOperatorHighlight();
  inputTwo.focus();
}

function resetPage() {
  selectedOperator = null;
  inputOne.value = "";
  inputTwo.value = "";
  clearOperatorHighlight();
  outputResult(0, "0");
  clearError();
}

addBtn.addEventListener("click", () => selectOperator("add", addBtn));
subtractBtn.addEventListener("click", () =>
  selectOperator("subtract", subtractBtn),
);
multiplyBtn.addEventListener("click", () =>
  selectOperator("multiply", multiplyBtn),
);
divideBtn.addEventListener("click", () => selectOperator("divide", divideBtn));
equalsBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", resetPage);
