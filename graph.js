import { Chart } from "@/components/ui/chart"
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM încărcat, inițializez graficul...")

  // Elemente DOM
  const functionInput = document.getElementById("function")
  const plotBtn = document.getElementById("plot-btn")
  const xMinInput = document.getElementById("x-min")
  const xMaxInput = document.getElementById("x-max")
  const yMinInput = document.getElementById("y-min")
  const yMaxInput = document.getElementById("y-max")
  const graphCanvas = document.getElementById("graph-canvas")
  const errorMessage = document.getElementById("error-message")
  const presetBtns = document.querySelectorAll(".preset-btn")

  // Verifică dacă elementele DOM au fost găsite
  if (!graphCanvas) {
    console.error("Elementul canvas pentru grafic nu a fost găsit!")
    return
  }

  // Verifică dacă Chart.js este disponibil
  if (typeof Chart === "undefined") {
    console.error("Chart.js nu este disponibil!")
    alert("Chart.js nu este disponibil. Reîncărcați pagina sau verificați conexiunea la internet.")
    return
  }

  // Verifică dacă math.js este disponibil
  if (typeof math === "undefined") {
    console.error("math.js nu este disponibil!")
    alert("math.js nu este disponibil. Reîncărcați pagina sau verificați conexiunea la internet.")
    return
  }

  console.log("Toate dependențele sunt disponibile.")

  // Inițializează graficul
  let chart = null

  // Event Listeners
  plotBtn.addEventListener("click", () => {
    console.log("Buton plot apăsat")
    plotFunction()
  })

  presetBtns.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Buton preset apăsat:", button.dataset.function)
      functionInput.value = button.dataset.function
      plotFunction()
    })
  })

  // Funcția principală pentru desenarea graficului
  function plotFunction() {
    console.log("Desenez graficul...")

    // Obține valorile din input-uri
    const functionString = functionInput.value.trim()
    if (!functionString) {
      showError("Introduceți o funcție!")
      return
    }

    const xMin = Number.parseFloat(xMinInput.value)
    const xMax = Number.parseFloat(xMaxInput.value)
    const yMin = Number.parseFloat(yMinInput.value)
    const yMax = Number.parseFloat(yMaxInput.value)

    console.log("Parametri grafic:", { functionString, xMin, xMax, yMin, yMax })

    // Validează valorile introduse
    if (isNaN(xMin) || isNaN(xMax) || isNaN(yMin) || isNaN(yMax)) {
      showError("Valorile introduse trebuie să fie numere!")
      return
    }

    if (xMin >= xMax) {
      showError("X Min trebuie să fie mai mic decât X Max")
      return
    }

    if (yMin >= yMax) {
      showError("Y Min trebuie să fie mai mic decât Y Max")
      return
    }

    try {
      // Analizează funcția
      const expression = math.compile(functionString)
      console.log("Funcție compilată cu succes")

      // Generează punctele
      const points = []
      const numPoints = 500 // Număr de puncte pentru grafic
      const step = (xMax - xMin) / numPoints

      for (let i = 0; i <= numPoints; i++) {
        const x = xMin + i * step
        try {
          const y = expression.evaluate({ x: x })

          // Verifică dacă y este un număr valid și în intervalul specificat
          if (!isNaN(y) && isFinite(y) && y >= yMin && y <= yMax) {
            points.push({ x, y })
          }
        } catch (e) {
          // Ignoră punctele care cauzează erori de evaluare
          console.warn("Eroare la evaluarea funcției pentru x =", x, e)
        }
      }

      console.log("Puncte generate:", points.length)

      // Verifică dacă avem suficiente puncte pentru a desena graficul
      if (points.length < 2) {
        showError("Nu există suficiente puncte valide în intervalul specificat")
        return
      }

      // Creează sau actualizează graficul
      createChart(points, functionString, xMin, xMax, yMin, yMax)
      hideError()
    } catch (error) {
      console.error("Eroare la evaluarea funcției:", error)
      showError("Funcție invalidă: " + error.message)
    }
  }

  function createChart(points, functionString, xMin, xMax, yMin, yMax) {
    console.log("Creez graficul cu", points.length, "puncte")

    // Asigură-te că canvas-ul este vizibil și are dimensiuni corecte
    graphCanvas.style.display = "block"
    graphCanvas.width = graphCanvas.parentElement.clientWidth * 0.95
    graphCanvas.height = 500

    console.log("Dimensiuni canvas:", graphCanvas.width, "x", graphCanvas.height)

    // Distruge graficul anterior dacă există
    if (chart) {
      chart.destroy()
    }

    // Pregătește datele pentru Chart.js
    const data = {
      datasets: [
        {
          label: "f(x) = " + functionString,
          data: points,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 2,
          pointRadius: 0,
          showLine: true,
          fill: false,
        },
      ],
    }

    // Configurația graficului
    const config = {
      type: "scatter",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: "linear",
            position: "center",
            min: xMin,
            max: xMax,
            title: {
              display: true,
              text: "X",
            },
          },
          y: {
            type: "linear",
            position: "center",
            min: yMin,
            max: yMax,
            title: {
              display: true,
              text: "Y",
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => `(${context.parsed.x.toFixed(2)}, ${context.parsed.y.toFixed(2)})`,
            },
          },
        },
      },
    }

    // Creează noul grafic
    try {
      chart = new Chart(graphCanvas, config)
      console.log("Grafic creat cu succes")
    } catch (error) {
      console.error("Eroare la crearea graficului:", error)
      showError("Eroare la crearea graficului: " + error.message)
    }
  }

  function showError(message) {
    console.error("Eroare grafic:", message)
    if (errorMessage) {
      errorMessage.textContent = message
      errorMessage.classList.remove("hidden")
    }
  }

  function hideError() {
    if (errorMessage) {
      errorMessage.classList.add("hidden")
    }
  }

  // Desenează graficul inițial după încărcarea paginii
  console.log("Inițializez graficul implicit")
  setTimeout(() => {
    plotFunction()
  }, 1000)
})
