function calculator(input) {
  let display = document.getElementById("inputDisplay");
  let result = document.getElementById("resultDisplay");

  switch (input) {
    case "C":
      display.innerHTML = "0";
      result.innerHTML = "";
      break;

    case "+/-":
      if (display.innerHTML === "0") break;

      if (display.innerHTML.startsWith("-")) {
        display.innerHTML = display.innerHTML.slice(1);
      } else {
        display.innerHTML = "-" + display.innerHTML;
      }
      break;

    case "=":
      try {
        let calculated = evaluateExpression(display.innerHTML);

        if (!isFinite(calculated)) throw new Error();

        result.innerHTML = calculated.toLocaleString("en-US");
      } catch {
        result.innerHTML = "ERROR";
      }
      break;

    default:
      if (display.innerHTML === "0" && !isNaN(input)) {
        display.innerHTML = input;
      } else {
        display.innerHTML += input;
      }

      let numericValue = display.innerHTML.replace(/,/g, "");

      if (!isNaN(numericValue)) {
        display.innerHTML = Number(numericValue).toLocaleString("en-US");
      }
      break;
  }
}

function evaluateExpression(expression) {
  expression = expression.replace(/×/g, "*").replace(/÷/g, "/");

  const tokens = expression.match(/(\d+(\.\d+)?|[+\-*/])/g);
  if (!tokens) return NaN;

  let values = [];
  let operators = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      values.push(Number(token));
    } else {
      operators.push(token);
    }
  }

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "*" || operators[i] === "/") {
      let a = values[i];
      let b = values[i + 1];
      let temp;

      switch (operators[i]) {
        case "*":
          temp = a * b;
          break;
        case "/":
          temp = a / b;
          break;
      }

      values.splice(i, 2, temp);
      operators.splice(i, 1);
      i--;
    }
  }

  let result = values[0];

  for (let i = 0; i < operators.length; i++) {
    switch (operators[i]) {
      case "+":
        result += values[i + 1];
        break;
      case "-":
        result -= values[i + 1];
        break;
    }
  }

  return result;
}

window.onload = function () {
  document.getElementById("inputDisplay").innerHTML = "0";
};
