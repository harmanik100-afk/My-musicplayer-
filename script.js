const fileInput = document.getElementById("fileInput");
const audio = document.getElementById("audio");
const songName = document.getElementById("songName");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];

  if (!file) return;

  audio.src = URL.createObjectURL(file);
  songName.textContent = file.name;
});

playBtn.addEventListener("click", () => {
  if (audio.src) {
    audio.play();
  }
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
});
