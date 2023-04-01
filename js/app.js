const play = document.querySelector("#play");

const audio = new Audio("http://stream.zeno.fm/1s53a2gkuf9uv");
let audioplay = false;

const playicon = () => {
  if (audioplay) {
    play.className = "bi-pause-fill text-white";
  } else {
    play.className = "bi-play-fill text-white";
  }
};

const playaudio = async () => {
  try {
    if (audioplay) {
      audio.pause();
      audioplay = !audioplay;
    } else {
      await audio.play();
      audioplay = !audioplay;
    }
  } catch (error) {
    console.log("Error al reproducir audio:", error);
  }

  playicon();
};

playicon();

play.addEventListener("click", playaudio);
