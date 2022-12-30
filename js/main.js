const video = document.getElementById("video");
var wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#ddd",
  progressColor: "#034efe",
  barWidth: 4,
  responsive: true,
  height: 140,
  barRadius: 4,
  plugins: [
    WaveSurfer.cursor.create({
      showTime: true,
      opacity: 1,
      customShowTimeStyle: {
        "background-color": "#000",
        color: "#fff",
        padding: "2px",
        "font-size": "10px",
      },
    }),
  ],
});

wavesurfer.load(
  "audios/radio_resp-2022-12-30-11-00-26_Pri_Baltika-2022-12-30-11-59-13.mp3"
);

wavesurfer.on("audioprocess", function () {
  if (wavesurfer.getCurrentTime() !== video.currentTime) {
    video.currentTime = wavesurfer.getCurrentTime();
  }
});
wavesurfer.on("finish", function () {
  document.getElementById("play").setAttribute("src", "images/play.png");
  document.getElementById("video").pause();
});

document.getElementById("play").addEventListener("click", function () {
  if (wavesurfer.isPlaying()) {
    document.getElementById("play").setAttribute("src", "images/play.png");
    document.getElementById("video").pause();
  }
  if (!wavesurfer.isPlaying()) {
    document.getElementById("play").setAttribute("src", "images/pause.png");
    document.getElementById("video").play();
  }
  wavesurfer.playPause();
});
