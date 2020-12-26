let isRunning = true;

const secondsInMin = 60;
const mins_25 = 25 * secondsInMin;
const mins_30 = 30 * secondsInMin;
const mins_5 = 5 * secondsInMin;

let currentDuration = mins_25;

const playPauseButton = document.getElementById("playPause");

function playPause() {
  if (isRunning) {
    playPauseButton.innerHTML = "Pause";
  } else {
    playPauseButton.innerHTML = "Play";
  }
}

//Button Handler
function updateDuration(mins) {
  if (mins == 30) {
    currentDuration = mins_30;
  } else if (mins == 5) {
    currentDuration = mins_5;
  } else {
    currentDuration = mins_25;
  }

  timeLeft = currentDuration;
  updateString();
}
