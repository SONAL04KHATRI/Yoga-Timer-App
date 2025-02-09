let timeLeft, interval;
function startTimer() {
    let minutes = document.getElementById("timeInput").value;
    timeLeft = minutes * 60;
    document.getElementById("sound").play();
    interval = setInterval(updateTimer, 1000);
}
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timerDisplay").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (timeLeft-- <= 0) clearInterval(interval);
}
function pauseTimer() {
    clearInterval(interval);
    document.getElementById("sound").pause();
}
