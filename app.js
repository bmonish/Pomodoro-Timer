let isRunning = true;
const playPauseButton = document.getElementById("playPause");

function playPause() {
  if (isRunning) {
    playPauseButton.innerHTML = "Pause";
  } else {
    playPauseButton.innerHTML = "Play";
  }
}
