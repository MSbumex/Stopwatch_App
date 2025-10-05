
// ===== TIME VARIABLES =====

let hours = 0, minutes = 0, seconds = 0, milliseconds = 0, timer = null, timerRunning = false;


/// ===== SELECT DOM ELEMENTS =====
const display = document.querySelector(".display-timer"); // Timer display area
const startBtn = document.querySelector("#start");       // Start button
const stopBtn = document.querySelector("#stop");         // Stop button
const resetBtn = document.querySelector("#reset");       // Reset button
const themeToggle = document.getElementById("themeToggle"); // Theme toggle button



// ===== UPDATE DISPLAY FUNCTION =====
// Updates the timer display with the current time values
function updateDisplay() {
  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");
  const ms = String(milliseconds).padStart(3, "0");
  display.textContent = `${h}:${m}:${s}.${ms}`;
}



// ===== START BUTTON =====
// Starts the stopwatch if it is not already running
startBtn.addEventListener("click", () => {
  if (!timerRunning) {
    timerRunning = true;
    timer = setInterval(() => {
         milliseconds += 10;
      if (milliseconds >= 1000) {milliseconds = 0; seconds++;}
      if (seconds === 60) { seconds = 0; minutes++; }
      if (minutes === 60) { minutes = 0; hours++; }
      updateDisplay();
    }, 10);
  }
});

// ===== STOP BUTTON =====
// Stops the stopwatch
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timerRunning = false;
});

// ===== RESET BUTTON =====
// Resets the stopwatch to 00:00:00.000
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timerRunning = false;
  hours = minutes = seconds = milliseconds = 0;
  updateDisplay();
});


// ===== THEME TOGGLE BUTTON =====
// Switches between light and dark mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});


// ===== INITIALIZE =====
// Sets the initial display when the page loads
updateDisplay();