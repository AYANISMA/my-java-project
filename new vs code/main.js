
const song = document.getElementById("song");
const progress = document.getElementById("progress");

const playBtn = document.querySelector(".fa-play");
const forwardBtn = document.querySelector(".fa-forward");
const backwardBtn = document.querySelector(".fa-backward");

// Marka audio-ga xogtiisa load noqoto
song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

// Play & Pause
playBtn.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        playBtn.classList.replace("fa-play", "fa-pause");
    } else {
        song.pause();
        playBtn.classList.replace("fa-pause", "fa-play");
    }
});

// Progress bar update
setInterval(() => {
    progress.value = song.currentTime;
}, 500);

// Marka progress la beddelo
progress.addEventListener("input", () => {
    song.currentTime = progress.value;
    song.play();
    playBtn.classList.replace("fa-play", "fa-pause");
});

// Forward & Backward
forwardBtn.addEventListener("click", () => {
    song.currentTime += 10;
});

backwardBtn.addEventListener("click", () => {
    song.currentTime -= 10;
});
