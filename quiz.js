document.addEventListener("DOMContentLoaded", () => {
  // Date pentru quiz-uri
  const quizzes = {
    math1: {
      title: "Quiz Matematică 1",
      questions: [
        {
          question: "Care este derivata funcției f(x) = x²?",
          options: ["f'(x) = x", "f'(x) = 2x", "f'(x) = 2", "f'(x) = x²"],
          answer: 1,
        },
        {
          question: "Rezolvă ecuația: 2x + 5 = 15",
          options: ["x = 5", "x = 10", "x = 7.5", "x = 5.5"],
          answer: 0,
        },
        {
          question: "Care este valoarea lui sin(π/2)?",
          options: ["0", "1", "-1", "1/2"],
          answer: 1,
        },
        {
          question: "Dacă f(x) = 3x - 2 și g(x) = x² + 1, care este valoarea (f ∘ g)(2)?",
          options: ["13", "15", "17", "19"],
          answer: 0,
        },
        {
          question: "Care este limita expresiei (1 + 1/n)^n când n tinde spre infinit?",
          options: ["0", "1", "e", "∞"],
          answer: 2,
        },
        {
          question: "Care este aria unui cerc cu raza 4?",
          options: ["8π", "12π", "16π", "4π"],
          answer: 2,
        },
        {
          question: "Rezolvă inegalitatea: 3x - 7 > 5",
          options: ["x > 4", "x > 12/3", "x > 4/3", "x > 6"],
          answer: 0,
        },
        {
          question: "Care este suma primelor 10 numere naturale?",
          options: ["45", "50", "55", "60"],
          answer: 2,
        },
        {
          question: "Care este valoarea lui log₁₀(100)?",
          options: ["1", "2", "10", "100"],
          answer: 1,
        },
        {
          question: "Care este soluția sistemului de ecuații: x + y = 5 și x - y = 3?",
          options: ["x = 4, y = 1", "x = 1, y = 4", "x = 2, y = 3", "x = 3, y = 2"],
          answer: 0,
        },
      ],
    },
    math2: {
      title: "Quiz Matematică 2",
      questions: [
        {
          question: "Care este integrala funcției f(x) = 2x?",
          options: ["f(x) = x² + C", "f(x) = x² + 2 + C", "f(x) = x² + 1 + C", "f(x) = 2x² + C"],
          answer: 0,
        },
        {
          question: "Care este valoarea lui cos(π)?",
          options: ["0", "1", "-1", "nedefinit"],
          answer: 2,
        },
        {
          question: "Care este domeniul de definiție al funcției f(x) = √(x - 3)?",
          options: ["x ≥ 0", "x > 0", "x ≥ 3", "x > 3"],
          answer: 2,
        },
        {
          question: "Care este valoarea lui 5! (factorial 5)?",
          options: ["24", "60", "120", "720"],
          answer: 2,
        },
        {
          question: "Care este panta dreptei care trece prin punctele (2, 3) și (4, 7)?",
          options: ["1", "2", "3", "4"],
          answer: 1,
        },
        {
          question: "Care este ecuația cercului cu centrul (2, -3) și raza 4?",
          options: [
            "(x - 2)² + (y + 3)² = 16",
            "(x + 2)² + (y - 3)² = 16",
            "(x - 2)² + (y - 3)² = 16",
            "(x + 2)² + (y + 3)² = 16",
          ],
          answer: 0,
        },
        {
          question: "Care este probabilitatea de a obține suma 7 la aruncarea a două zaruri?",
          options: ["1/6", "1/8", "1/12", "1/36"],
          answer: 0,
        },
        {
          question: "Care este valoarea expresiei sin²(θ) + cos²(θ) pentru orice unghi θ?",
          options: ["0", "1", "2", "Depinde de θ"],
          answer: 1,
        },
        {
          question: "Care este soluția ecuației de gradul al doilea x² - 5x + 6 = 0?",
          options: ["x = 2, x = 3", "x = -2, x = -3", "x = 2, x = -3", "x = -2, x = 3"],
          answer: 0,
        },
        {
          question: "Care este derivata funcției f(x) = e^x?",
          options: ["f'(x) = e^x", "f'(x) = xe^x", "f'(x) = e^(x-1)", "f'(x) = 1"],
          answer: 0,
        },
      ],
    },
    info1: {
      title: "Quiz Informatică 1 (C++)",
      questions: [
        {
          question: "Care este modul corect de a declara o variabilă întreagă în C++?",
          options: ["var x = 5;", "integer x = 5;", "int x = 5;", "x = 5;"],
          answer: 2,
        },
        {
          question: "Care dintre următoarele este modul corect de a comenta o singură linie în C++?",
          options: [
            "// Acesta este un comentariu",
            "/* Acesta este un comentariu */",
            "# Acesta este un comentariu",
            "<!-- Acesta este un comentariu -->",
          ],
          answer: 0,
        },
        {
          question: 'Care este rezultatul următorului cod?\nint x = 5;\ncout << x++ << " " << x;',
          options: ["5 5", "5 6", "6 6", "6 5"],
          answer: 1,
        },
        {
          question: "Care structură de date în C++ urmează principiul LIFO (Last In First Out)?",
          options: ["Queue", "Stack", "List", "Vector"],
          answer: 1,
        },
        {
          question: "Care este complexitatea algoritmului de căutare binară?",
          options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
          answer: 2,
        },
        {
          question: "Care dintre următoarele nu este o buclă validă în C++?",
          options: ["for", "while", "do-while", "foreach"],
          answer: 3,
        },
        {
          question: "Ce face operatorul 'new' în C++?",
          options: [
            "Creează o nouă variabilă",
            "Alocă memorie dinamic",
            "Creează o nouă clasă",
            "Inițializează o variabilă cu zero",
          ],
          answer: 1,
        },
        {
          question: "Care este modul corect de a accesa primul element al unui vector 'arr' în C++?",
          options: ["arr[0]", "arr[1]", "arr(0)", "arr.first()"],
          answer: 0,
        },
        {
          question: "Ce fișier header este necesar pentru a utiliza containerul vector în C++?",
          options: ["<array>", "<vector>", "<list>", "<container>"],
          answer: 1,
        },
        {
          question: "Care este rezultatul următorului cod?\nint a = 10, b = 5;\ncout << (a > b ? a : b);",
          options: ["10", "5", "true", "false"],
          answer: 0,
        },
      ],
    },
    info2: {
      title: "Quiz Informatică 2 (C++)",
      questions: [
        {
          question: "Ce este moștenirea în C++?",
          options: [
            "O modalitate de a crea mai multe instanțe ale unei clase",
            "Un proces prin care o clasă dobândește proprietățile altei clase",
            "O metodă de a ascunde datele de accesul extern",
            "O tehnică de supraîncărcare a funcțiilor",
          ],
          answer: 1,
        },
        {
          question: "Care este modul corect de a deschide un fișier pentru citire în C++?",
          options: [
            'File file("data.txt");',
            'ifstream file("data.txt");',
            'ofstream file("data.txt");',
            'fstream file = open("data.txt");',
          ],
          answer: 1,
        },
        {
          question: "Care dintre următoarele nu este un specificator de acces în C++?",
          options: ["public", "private", "protected", "internal"],
          answer: 3,
        },
        {
          question: "Ce este un constructor în C++?",
          options: [
            "O funcție specială care este executată când un obiect este creat",
            "O funcție care distruge obiectele când nu mai sunt necesare",
            "O funcție care convertește tipuri de date",
            "O funcție care verifică dacă un obiect este valid",
          ],
          answer: 0,
        },
        {
          question:
            "Care este rezultatul următorului cod?\nint arr[5] = {1, 2, 3, 4, 5};\nint *ptr = arr;\ncout << *(ptr + 2);",
          options: ["1", "2", "3", "5"],
          answer: 2,
        },
        {
          question: "Care container STL în C++ este implementat ca un arbore binar de căutare?",
          options: ["vector", "list", "set", "deque"],
          answer: 2,
        },
        {
          question: "Ce este supraîncărcarea funcțiilor în C++?",
          options: [
            "Definirea mai multor funcții cu același nume dar cu parametri diferiți",
            "Apelarea unei funcții din interiorul ei",
            "Ascunderea unei funcții de accesul extern",
            "Extinderea capacităților unei funcții",
          ],
          answer: 0,
        },
        {
          question: "Care este modul corect de a defini o variabilă constantă în C++?",
          options: ["var x = 5;", "let x = 5;", "constant x = 5;", "const int x = 5;"],
          answer: 3,
        },
        {
          question: "Ce operator este folosit pentru alocarea dinamică de memorie în C++?",
          options: ["malloc", "alloc", "new", "create"],
          answer: 2,
        },
        {
          question: "Care este scopul cuvântului cheie 'virtual' în C++?",
          options: [
            "Pentru a crea o mașină virtuală",
            "Pentru a declara o funcție care poate fi suprascrisă în clasele derivate",
            "Pentru a aloca memorie virtual",
            "Pentru a crea o variabilă temporară",
          ],
          answer: 1,
        },
      ],
    },
  }

  // Elemente DOM
  const quizBtns = document.querySelectorAll(".quiz-btn")
  const quizArea = document.getElementById("quiz-area")
  const quizTitle = document.getElementById("quiz-title")
  const currentQuestionEl = document.getElementById("current-question")
  const totalQuestionsEl = document.getElementById("total-questions")
  const questionText = document.getElementById("question-text")
  const optionsContainer = document.getElementById("options-container")
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")
  const submitBtn = document.getElementById("submit-btn")
  const resultsArea = document.getElementById("results-area")
  const scoreEl = document.getElementById("score")
  const maxScoreEl = document.getElementById("max-score")
  const percentageBar = document.getElementById("percentage-bar")
  const percentageText = document.getElementById("percentage-text")
  const reviewBtn = document.getElementById("review-btn")
  const retryBtn = document.getElementById("retry-btn")
  const newQuizBtn = document.getElementById("new-quiz-btn")

  // Starea quiz-ului
  let currentQuiz = null
  let currentQuestionIndex = 0
  let userAnswers = []
  let reviewMode = false

  // Event Listeners
  quizBtns.forEach((btn) => {
    btn.addEventListener("click", () => startQuiz(btn.dataset.quiz))
  })

  prevBtn.addEventListener("click", showPreviousQuestion)
  nextBtn.addEventListener("click", showNextQuestion)
  submitBtn.addEventListener("click", submitQuiz)
  reviewBtn.addEventListener("click", reviewQuiz)
  retryBtn.addEventListener("click", retryQuiz)
  newQuizBtn.addEventListener("click", resetQuiz)

  // Funcții
  function startQuiz(quizId) {
    if (!quizzes[quizId]) return

    currentQuiz = quizzes[quizId]
    currentQuestionIndex = 0
    userAnswers = Array(currentQuiz.questions.length).fill(null)
    reviewMode = false

    // Actualizează interfața
    quizTitle.textContent = currentQuiz.title
    totalQuestionsEl.textContent = currentQuiz.questions.length

    // Arată zona de quiz
    document.querySelector(".quiz-selection").classList.add("hidden")
    quizArea.classList.remove("hidden")
    resultsArea.classList.add("hidden")

    // Arată prima întrebare
    showQuestion(0)
  }

  function showQuestion(index) {
    const question = currentQuiz.questions[index]
    currentQuestionIndex = index

    // Actualizează textul întrebării
    questionText.textContent = question.question

    // Actualizează numărul întrebării
    currentQuestionEl.textContent = index + 1

    // Șterge opțiunile
    optionsContainer.innerHTML = ""

    // Adaugă opțiunile
    question.options.forEach((option, i) => {
      const optionEl = document.createElement("div")
      optionEl.className = "option"

      // Dacă suntem în modul de revizuire, arată corect/incorect
      if (reviewMode) {
        if (i === question.answer) {
          optionEl.classList.add("correct")
        } else if (i === userAnswers[index] && i !== question.answer) {
          optionEl.classList.add("incorrect")
        }
      }

      // Dacă utilizatorul a selectat această opțiune
      if (userAnswers[index] === i) {
        optionEl.classList.add("selected")
      }

      optionEl.textContent = option

      // Adaugă eveniment de click (doar dacă nu suntem în modul de revizuire)
      if (!reviewMode) {
        optionEl.addEventListener("click", () => selectOption(i))
      }

      optionsContainer.appendChild(optionEl)
    })

    // Actualizează butoanele de navigare
    prevBtn.disabled = index === 0

    if (reviewMode) {
      nextBtn.disabled = index === currentQuiz.questions.length - 1
      submitBtn.classList.add("hidden")
    } else {
      nextBtn.textContent = index === currentQuiz.questions.length - 1 ? "Finalizează" : "Următor"
      submitBtn.classList.toggle("hidden", index !== currentQuiz.questions.length - 1)
    }
  }

  function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex
    showQuestion(currentQuestionIndex)
  }

  function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      showQuestion(currentQuestionIndex - 1)
    }
  }

  function showNextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      showQuestion(currentQuestionIndex + 1)
    } else if (!reviewMode) {
      submitQuiz()
    }
  }

  function submitQuiz() {
    // Calculează scorul
    let score = 0
    userAnswers.forEach((answer, index) => {
      if (answer === currentQuiz.questions[index].answer) {
        score++
      }
    })

    // Actualizează rezultatele
    scoreEl.textContent = score
    maxScoreEl.textContent = currentQuiz.questions.length

    const percentage = Math.round((score / currentQuiz.questions.length) * 100)
    percentageBar.style.width = `${percentage}%`
    percentageText.textContent = `${percentage}%`

    // Arată rezultatele
    quizArea.classList.add("hidden")
    resultsArea.classList.remove("hidden")
  }

  function reviewQuiz() {
    reviewMode = true
    currentQuestionIndex = 0

    // Arată din nou zona de quiz
    resultsArea.classList.add("hidden")
    quizArea.classList.remove("hidden")

    // Arată prima întrebare în modul de revizuire
    showQuestion(0)
  }

  function retryQuiz() {
    // Resetează răspunsurile dar păstrează același quiz
    userAnswers = Array(currentQuiz.questions.length).fill(null)
    reviewMode = false
    currentQuestionIndex = 0

    // Arată din nou zona de quiz
    resultsArea.classList.add("hidden")
    quizArea.classList.remove("hidden")

    // Arată prima întrebare
    showQuestion(0)
  }

  function resetQuiz() {
    // Resetează totul și arată selecția de quiz-uri
    currentQuiz = null
    currentQuestionIndex = 0
    userAnswers = []
    reviewMode = false

    resultsArea.classList.add("hidden")
    quizArea.classList.add("hidden")
    document.querySelector(".quiz-selection").classList.remove("hidden")
  }
})
