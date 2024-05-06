// expose.js

const jsConfetti = new JSConfetti()
window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn_select = document.getElementById("horn-select");
  const sound_image = document.querySelector("#expose > img");
  const audio = document.querySelector("audio");

  sound_image.src = `./assets/images/${horn_select.value}.svg`;
  audio.src = `./assets/audio/${horn_select.value}.mp3`;

  console.log(`assets/images/.png`)

  horn_select.addEventListener("change", (event) => {
    sound_image.src = `./assets/images/${event.target.value}.svg`;
    audio.src = `./assets/audio/${event.target.value}.mp3`;
  });


  const volume = document.getElementById("volume");
  const audio_image = document.querySelector("div > img");

  volume.addEventListener("change", (event) => {
    let level = 0;
    if (event.target.value >= 67) {
      level = 3;
    } else if (event.target.value >= 33) {
      level = 2;
    } else if (event.target.value >= 1) {
      level = 1;
    }
    audio_image.src = `./assets/icons/volume-level-${level}.svg`;
    audio.volume = event.target.value / 100;
  });

  const play_button = document.querySelector("button");
  play_button.addEventListener("click", () => {
    if (horn_select.value === "party-horn") {
      jsConfetti.addConfetti()
    }
    if (horn_select.value != "selected")
      audio.play();
  })

}