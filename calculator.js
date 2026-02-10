window.calculator = function (input) {
  const display = document.getElementById('input-display')
  const result = document.getElementById('result-display')

  switch (input) {
    case 'C':
      display.innerHTML = '0'
      result.innerHTML = ''
      break

    case '+/-': {
      const lastChar = display.innerHTML.slice(-1)
      if (isNaN(lastChar)) break

      display.innerHTML =
        display.innerHTML.startsWith('-')
          ? display.innerHTML.slice(1)
          : '-' + display.innerHTML
      break
    }
    case '=':
      try {
        const rawExpress = display.innerHTML.replace(/,/g, '')
        const calculated = evaluateExpression(rawExpress)

        if (!isFinite(calculated)) throw new Error()

        result.innerHTML = Number(calculated).toLocaleString('en-US')
      } catch {
        result.innerHTML = 'ERROR'
      }
      break

    default: {
      const lastChar = display.innerHTML.slice(-1)

      if (isNaN(input) && isNaN(lastChar)) return

      if (display.innerHTML === '0' && !isNaN(input)) {
        display.innerHTML = input
      } else {
        display.innerHTML += input
      }

      const numericValue = display.innerHTML.replace(/,/g, '')

      if (!isNaN(numericValue)) {
        display.innerHTML = Number(numericValue).toLocaleString('en-US')
      }
      break
    }
  }
}

function evaluateExpression (expression) {
  expression = expression.replace(/×/g, '*').replace(/÷/g, '/')
  if (expression.startsWith('-')) {
    expression = '0' + expression
  }

  const tokens = expression.match(/\d+(\.\d+)?|[+\-*/]/g)
  if (!tokens) return NaN

  const values = []
  const operators = []

  for (const token of tokens) {
    if (!isNaN(token)) {
      values.push(Number(token))
    } else {
      operators.push(token)
    }
  }

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === '*' || operators[i] === '/') {
      const a = values[i]
      const b = values[i + 1]
      let temp

      switch (operators[i]) {
        case '*':
          temp = a * b
          break
        case '/':
          temp = a / b
          break
      }

      values.splice(i, 2, temp)
      operators.splice(i, 1)
      i--
    }
  }

  let result = values[0]

  for (let i = 0; i < operators.length; i++) {
    switch (operators[i]) {
      case '+':
        result += values[i + 1]
        break
      case '-':
        result -= values[i + 1]
        break
    }
  }

  return result
}

window.onload = function () {
  document.getElementById('input-display').innerHTML = '0'
}
