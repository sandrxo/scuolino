# Scuolino — Platformă Educațională pentru Bacalaureat

**Scuolino** este o platformă web educațională modernă, concepută ca un instrument complet de pregătire pentru examenul de bacalaureat la disciplinele **Matematică** și **Informatică**.

---

## Caracteristici Principale

1. **Secțiunea de Matematică**: Colecție de formule, teoreme și concepte fundamentale, organizate pe categorii (algebră, analiză matematică, geometrie, trigonometrie) și randerizate profesional folosind **MathJax** (sintaxă LaTeX).
2. **Secțiunea de Informatică**: Resurse structurate pentru programare în **C++** și algoritmi fundamentali, beneficiind de evidențierea sintaxei prin **Highlight.js**.
3. **Quiz-uri Interactive**: Modul de autoevaluare cu întrebări grilă, feedback imediat și urmărire a progresului.
4. **Calculator Științific**: Instrument complet pentru operații aritmetice și funcții trigonometrice/logaritmice avansate.
5. **Generator de Grafice**: Reprezentare vizuală interactivă a funcțiilor matematice folosind **Chart.js** și **Math.js**.
6. **Sistem de Autentificare**: Gestionarea sesiunilor utilizatorilor bazată pe `localStorage`.

---

## Tehnologii Utilizate

* **HTML5**: Structură semantică modernă și elemente orientate spre accesibilitate.
* **CSS3**: Layout-uri responsive folosind *Flexbox* și *Grid*, media queries, animații și variabile CSS.
* **JavaScript (ES6+)**: Logica dinamică a aplicației, manipularea DOM-ului și prelucrarea datelor.
* **Biblioteci externe**:
  * **MathJax**: Afișarea ecuațiilor și a formulelor matematice.
  * **Highlight.js**: Colorarea sintaxei pentru codul C++.
  * **Chart.js / Math.js**: Randarea graficelor de funcții și evaluarea expresiilor matematice.

---

## Structura Fișierelor

* `index.html` — Pagina principală a platformei
* `mathematics.html` — Secțiunea de matematică
* `informatics.html` — Secțiunea de informatică
* `quiz.html` — Pagina de quiz-uri interactive
* `calculator.html` — Calculatorul științific
* `graph.html` — Generatorul de grafice
* `styles.css` — Fișierul de stilizare globală și responsivă
* `auth.js` — Logica de autentificare și sesiune
* `calculator.js` — Logica de calcul matematic
* `graph.js` — Integrarea cu Chart.js și generarea graficelor
* `quiz.js` — Gestionarea întrebărilor și a scorurilor
* `Documentatie Atestat.pdf` — Documentația tehnică completă a proiectului

---

## Rulare Locală

Pentru a rula proiectul local pe calculatorul tău sau în mediul de dezvoltare (cum ar fi VS Code):
1. Clonează acest repository sau descarcă arhiva.
2. Deschide folderul în **Visual Studio Code**.
3. Pornește o sesiune locală folosind extensia **Live Server** pe fișierul `index.html`.