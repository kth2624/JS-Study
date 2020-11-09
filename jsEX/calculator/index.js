const numberInput = document.querySelector("#input");
const clearButton = document.querySelector("#clear");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const divideButton = document.querySelector("#divide");
const multiplayButton = document.querySelector("#multiply");
const calculateButton = document.querySelector("#calculate");
const resultInput = document.querySelector("#result");

let temp;
let operator;

plusButton.addEventListener("click", () => {
  if (temp) {
    operator = "+";
    numberInput.value = null;
  } else {
    if (numberInput.value) {
      operator = "+";
      temp = Number(numberInput.value);
      numberInput.value = null;
      resultInput.value = null;
    }
  }
  numberInput.focus();
});

minusButton.addEventListener("click", () => {
  if (temp) {
    operator = "-";
    numberInput.value = null;
  } else {
    if (numberInput.value) {
      operator = "-";
      temp = Number(numberInput.value);
      numberInput.value = null;
      resultInput.value = null;
    }
  }
  numberInput.focus();
});

divideButton.addEventListener("click", () => {
  if (temp) {
    operator = "/";
    numberInput.value = null;
  } else {
    if (numberInput.value) {
      operator = "/";
      temp = Number(numberInput.value);
      numberInput.value = null;
      resultInput.value = null;
    }
  }
  numberInput.focus();
});

multiplayButton.addEventListener("click", () => {
  if (temp) {
    operator = "*";
    numberInput.value = null;
  } else {
    if (numberInput.value) {
      operator = "*";
      temp = Number(numberInput.value);
      numberInput.value = null;
      resultInput.value = null;
    }
  }
  numberInput.focus();
});

clearButton.addEventListener("click", () => {
  operator = null;
  numberInput.value = null;
  resultInput.value = null;
  temp = null;
});

calculateButton.addEventListener("click", () => {
  console.log(temp, operator, numberInput.value);
  if (operator) {
    if (numberInput.value) {
      if (operator === "+") {
        resultInput.value = temp + Number(numberInput.value);
      } else if (operator === "-") {
        resultInput.value = temp - Number(numberInput.value);
      } else if (operator === "/") {
        resultInput.value = temp / Number(numberInput.value);
      } else if (operator === "*") {
        resultInput.value = temp * Number(numberInput.value);
      }
      temp = Number(resultInput.value);
    }
  } else {
    if (numberInput.value) {
      resultInput.value = temp;
    }
  }
});
