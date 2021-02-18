const secondsInMin = 60;
const mins_25 = 25 * secondsInMin;
const mins_30 = 30 * secondsInMin;
const mins_5 = 5 * secondsInMin;
const themeChanger = document.querySelector("i.fas");
const bodyDiv = document.querySelector(".main__container");

let isRunning = false;
let interval;
let currentDuration = mins_25;
let timeLeft = 0;
let countdownWasStarted = false;

const playPauseButton = document.getElementById("playPause");

function playPause() {
  isRunning = !isRunning;

  if (!countdownWasStarted) {
    resetCountdown();
    updateString();
  }

  countdownWasStarted = true;

  if (isRunning) {
    interval = setInterval(updateCountdown, 1000);
    playPauseButton.innerHTML = "Pause";
  } else {
    stopCountdown();
    playPauseButton.innerHTML = "Start";
  }
}

function updateCountdown() {
  if (!isRunning) {
    return;
  }

  timeLeft--;
  updateString();

  if (timeLeft == 0) {
    document.getElementById("timerAudio").play();
    playPause();
    stopCountdown();
    timeLeft = currentDuration;
    updateString();
    isRunning = false;
  }
}

function stopCountdown() {
  clearInterval(interval);
}

function resetCountdown() {
  isRunning = true;
  timeLeft = currentDuration;
}

//Button Handler
function updateDuration(mins) {
  if (isRunning) {
    playPause();
  }
  if (mins == 30) {
    currentDuration = mins_30;
  } else if (mins == 5) {
    currentDuration = mins_5;
  } else {
    currentDuration = mins_25;
  }

  timeLeft = currentDuration;
  isRunning = false;
  updateString();
}

// Visual Changes
function updateString() {
  let minutes = Math.floor(timeLeft / secondsInMin);
  let seconds = timeLeft % secondsInMin;

  if (seconds < 10) {
    secondsString = "0" + seconds;
  } else {
    secondsString = seconds;
  }

  document.getElementById("timer").innerHTML = minutes + ":" + secondsString;
}

themeChanger.addEventListener("click", () => {
  bodyDiv.classList.toggle("light");
});
