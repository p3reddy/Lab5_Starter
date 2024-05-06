// explore.js


window.addEventListener('DOMContentLoaded', init);
let isSpeaking = false;

function init() {
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  const voiceSelect = document.querySelector("#voice-select");
  const text_area = document.querySelector("#text-to-speak");
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    const synth = window.speechSynthesis;
    const voices = speechSynthesis.getVoices();


    const utterThis = new SpeechSynthesisUtterance(text_area.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.addEventListener("start", () => {
      const face_image = document.querySelector("#explore > img");
      face_image.src = "assets/images/smiling-open.png";
    })
    utterThis.addEventListener("end", () => {
      const face_image = document.querySelector("#explore > img");
      face_image.src = "assets/images/smiling.png";
    })
    synth.speak(utterThis);
  })

  isSpeaking.addEventListener
}

function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}