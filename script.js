document.getElementById("btn").addEventListener("click", () => {
  let txt = document.getElementById("input-text").value;
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = txt;
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;
  speechSynthesis.speak(speech);
});
document.getElementById("btn1").addEventListener("click", () => {
  let txt = document.getElementById("input-text");
  txt.value = "";
});
