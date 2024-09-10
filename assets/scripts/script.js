const unCheckMenu = () => {
  document.querySelector("#nav-toggle").checked = false;
};

const playAudio = () => {
  const checkbox = document.getElementById("nav-toggle");
  const audio = document.getElementById("audioPlayer");

  if (checkbox.checked) {
    audio.play();
  }
};
