
// Time variables
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0, timer = null, timerRunning = false;


// Select elements using querySelector
const display = document.querySelector(".display-timer");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const lapBtn = document.querySelector("#lap");
const themeToggle = document.getElementById("themeToggle");
const lapsList = document.querySelector("#laps");



// Update display function
function updateDisplay() {
  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");
  const ms = String(milliseconds).padStart(3, "0");
  display.textContent = `${h}:${m}:${s}.${ms}`;
}



// Start button
startBtn.addEventListener("click", () => {
  if (!timerRunning) {
    running = true;
    timer = setInterval(() => {
         milliseconds += 10;
      if (milliseconds >= 1000) {milliseconds = 0; seconds++;}
      if (seconds === 60) { seconds = 0; minutes++; }
      if (minutes === 60) { minutes = 0; hours++; }
      updateDisplay();
    }, 10);
  }
});

// Stop button
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timerRunning = false;
});

// Reset button
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timerRunning = false;
  hours = minutes = seconds = milliseconds = 0;
  lapsList.innerHTML = ""; // clear laps
  updateDisplay();
});

// Lap button
lapBtn.addEventListener("click", () => {
  if (timerRunning) {
    const lapTime = display.textContent;
    const li = document.createElement("li");
    li.textContent = `Lap ${lapsList.children.length + 1}: ${lapTime}`;
    lapsList.appendChild(li);
  }
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Initialize
updateDisplay();