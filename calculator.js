document.addEventListener("DOMContentLoaded", () => {
  // Elemente DOM
  const display = document.getElementById("display")
  const history = document.getElementById("history")
  const numberBtns = document.querySelectorAll(".number-btn")
  const operatorBtns = document.querySelectorAll(".operator-btn")
  const functionBtns = document.querySelectorAll(".function-btn")
  const equalsBtn = document.querySelector(".equals-btn")
  const scientificBtns = document.querySelectorAll(".sci-btn")

  // Starea calculatorului
  let currentInput = "0"
  let previousInput = ""
  let operation = null
  let shouldResetDisplay = false
  const memoryValue = 0

  // Event Listeners
  numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
      inputNumber(button.dataset.num)
    })
  })

  operatorBtns.forEach((button) => {
    button.addEventListener("click", () => {
      inputOperator(button.dataset.action)
    })
  })

  functionBtns.forEach((button) => {
    button.addEventListener("click", () => {
      handleFunction(button.dataset.action)
    })
  })

  equalsBtn.addEventListener("click", calculate)

  scientificBtns.forEach((button) => {
    button.addEventListener("click", () => {
      handleScientificFunction(button.dataset.action)
    })
  })

  // Funcții
  function updateDisplay() {
    display.textContent = currentInput
  }

  function inputNumber(number) {
    if (currentInput === "0" || shouldResetDisplay) {
      currentInput = number
      shouldResetDisplay = false
    } else {
      // Previne puncte zecimale multiple
      if (number === "." && currentInput.includes(".")) return
      currentInput += number
    }
    updateDisplay()
  }

  function inputOperator(op) {
    if (operation !== null) calculate()

    previousInput = currentInput
    operation = op
    history.textContent = `${previousInput} ${getOperatorSymbol(op)}`
    shouldResetDisplay = true
  }

  function calculate() {
    if (operation === null || shouldResetDisplay) return

    const prev = Number.parseFloat(previousInput)
    const current = Number.parseFloat(currentInput)
    let result

    switch (operation) {
      case "add":
        result = prev + current
        break
      case "subtract":
        result = prev - current
        break
      case "multiply":
        result = prev * current
        break
      case "divide":
        if (current === 0) {
          result = "Eroare"
        } else {
          result = prev / current
        }
        break
      default:
        return
    }

    history.textContent += ` ${currentInput} =`
    currentInput = result.toString()
    operation = null
    updateDisplay()
    shouldResetDisplay = true
  }

  function handleFunction(func) {
    switch (func) {
      case "clear":
        currentInput = "0"
        previousInput = ""
        operation = null
        history.textContent = ""
        break
      case "backspace":
        if (currentInput.length === 1) {
          currentInput = "0"
        } else {
          currentInput = currentInput.slice(0, -1)
        }
        break
      case "percent":
        currentInput = (Number.parseFloat(currentInput) / 100).toString()
        break
      case "negate":
        currentInput = (Number.parseFloat(currentInput) * -1).toString()
        break
    }
    updateDisplay()
  }

  function handleScientificFunction(func) {
    const value = Number.parseFloat(currentInput)

    switch (func) {
      case "sin":
        currentInput = Math.sin(value).toString()
        break
      case "cos":
        currentInput = Math.cos(value).toString()
        break
      case "tan":
        currentInput = Math.tan(value).toString()
        break
      case "log":
        if (value <= 0) {
          currentInput = "Eroare"
        } else {
          currentInput = Math.log10(value).toString()
        }
        break
      case "ln":
        if (value <= 0) {
          currentInput = "Eroare"
        } else {
          currentInput = Math.log(value).toString()
        }
        break
      case "sqrt":
        if (value < 0) {
          currentInput = "Eroare"
        } else {
          currentInput = Math.sqrt(value).toString()
        }
        break
      case "power":
        previousInput = currentInput
        operation = "power"
        history.textContent = `${previousInput} ^`
        shouldResetDisplay = true
        break
      case "factorial":
        if (value < 0 || !Number.isInteger(value)) {
          currentInput = "Eroare"
        } else {
          currentInput = factorial(value).toString()
        }
        break
      case "pi":
        currentInput = Math.PI.toString()
        break
      case "e":
        currentInput = Math.E.toString()
        break
    }
    updateDisplay()
  }

  function factorial(n) {
    if (n === 0 || n === 1) return 1
    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    return result
  }

  function getOperatorSymbol(op) {
    switch (op) {
      case "add":
        return "+"
      case "subtract":
        return "−"
      case "multiply":
        return "×"
      case "divide":
        return "÷"
      case "power":
        return "^"
      default:
        return ""
    }
  }
})
