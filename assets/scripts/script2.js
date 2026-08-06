const inputOne = document.getElementById('input-number-1');
const inputTwo = document.getElementById('input-number-2');

const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const equalsBtn = document.getElementById('btn-equals');
const resetBtn = document.getElementById('btn-reset');

const operatorButtons = [addBtn, subtractBtn, multiplyBtn, divideBtn];

const currentCalculationOutput = document.getElementById('current-calculation');
const currentResultOutput = document.getElementById('current-result');
const errorMessageOutput = document.getElementById('error-message');

function outputResult(result, text) {
  currentCalculationOutput.textContent = text;
  currentResultOutput.textContent = result;
}

function showError(message) {
  errorMessageOutput.textContent = message;
}

function clearError() {
  errorMessageOutput.textContent = '';
}

function highlightOperator(selectedBtn) {
  operatorButtons.forEach((btn) => btn.classList.remove('active'));
  selectedBtn.classList.add('active');
}

function clearOperatorHighlight() {
  operatorButtons.forEach((btn) => btn.classList.remove('active'));
}
