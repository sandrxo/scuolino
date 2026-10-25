document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const loginBtn = document.getElementById("loginBtn")
  const logoutBtn = document.getElementById("logoutBtn")
  const userDisplay = document.getElementById("userDisplay")
  const usernameSpan = document.getElementById("username")
  const loginModal = document.getElementById("loginModal")
  const closeBtn = document.querySelector(".close")
  const loginForm = document.getElementById("loginForm")
  const usernameInput = document.getElementById("usernameInput")
  const passwordInput = document.getElementById("passwordInput")

  // Verifică dacă utilizatorul este conectat
  checkLoginStatus()

  // Event Listeners
  loginBtn.addEventListener("click", openLoginModal)
  closeBtn.addEventListener("click", closeLoginModal)
  loginForm.addEventListener("submit", handleLogin)
  logoutBtn.addEventListener("click", handleLogout)

  // Închide modalul când se face click în afara lui
  window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
      closeLoginModal()
    }
  })

  // Funcții
  function openLoginModal() {
    loginModal.style.display = "block"
    usernameInput.focus()
  }

  function closeLoginModal() {
    loginModal.style.display = "none"
    loginForm.reset()
  }

  function handleLogin(e) {
    e.preventDefault()

    const username = usernameInput.value.trim()
    const password = passwordInput.value.trim()

    if (username && password) {
      // Într-o aplicație reală, ar trebui să validezi credențialele cu un server
      // Pentru acest exemplu simplu, vom accepta orice valori care nu sunt goale

      // Salvează informațiile de conectare în localStorage
      localStorage.setItem("scuolino_user", username)
      localStorage.setItem("scuolino_logged_in", "true")

      // Actualizează interfața
      updateLoginUI(username)

      // Închide modalul
      closeLoginModal()
    }
  }

  function handleLogout() {
    // Șterge informațiile de conectare din localStorage
    localStorage.removeItem("scuolino_user")
    localStorage.removeItem("scuolino_logged_in")

    // Actualizează interfața
    loginBtn.classList.remove("hidden")
    logoutBtn.classList.add("hidden")
    userDisplay.classList.add("hidden")
  }

  function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("scuolino_logged_in") === "true"
    const username = localStorage.getItem("scuolino_user")

    if (isLoggedIn && username) {
      updateLoginUI(username)
    }
  }

  function updateLoginUI(username) {
    loginBtn.classList.add("hidden")
    logoutBtn.classList.remove("hidden")
    userDisplay.classList.remove("hidden")
    usernameSpan.textContent = username
  }
})
