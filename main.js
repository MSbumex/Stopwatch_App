let hours = 0, minutes = 0, seconds = 0, milliseconds = 0, timer = null, timerRunning = false;
const display = document.querySelector(".display-timer");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");



function updateDisplay() {
display.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}



startBtn.addEventListener("click", () => {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) { seconds = 0; minutes++; }
      if (minutes === 60) { minutes = 0; hours++; }
      updateDisplay();
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  running = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  running = false;
  hours = minutes = seconds = 0;
  updateDisplay();
});

updateDisplay();