# Calculator App


## :beginner: Overview
A simple, responsive calculator web app built with *HTML*, *CSS*, and *JavaScript*. It performs basic arithmetic operations making it both beginner-friendly and secure.
Below are some of the supported operations;

| Operation        | Example   |
| ---------------- | --------- |
| Addition         | `5 + 3`   |
| Subtraction      | `9 - 3`   |
| Multiplication   | `4 × 2`   |
| Division         | `8 ÷ 4`   |
| Negative numbers | `-5 + 10` |



### :file_folder: Project Structure
The project follows the frontend structure below;

```text
|
|--- .github/
| |--- workflows/
|    |--- linters.yml # Contains the linters code for checking code errors
|
|--- index.html # The main HTML file containing the page structure
|
|--- Calculator.js # contains the JavaScript implementation of the app
|
|--- style.css # All CSS styling
|
|---README.md # Project overview and documentation
|
```

### :star: Tech Stack
- HTML
- CSS
- JavaScript
- VS Code/ Browser


### :electric_plug: How to run this project
1) Clone the repository [here](git@github.com:AsohLove/Calculator-App.git)
2) Open index.html in a browser
3) Start calculating


**Code snippet**

```JavaScript
    
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
    }
```

* :rocket: [Deployed page](https://asohlove.github.io/Calculator-App/)



:fire: **Love Asoh**

- GitHub: [@loveasoh](https://github.com/AsohLove)
- Twitter: [@loveasoh](https://x.com/LoveTheModifier)
- LinkedIn: [@love asoh](https://www.linkedin.com/in/asohlove/)

## :lock: License
This project is [MIT](./LICENSE) licensed.