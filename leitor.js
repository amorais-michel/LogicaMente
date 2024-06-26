function lerTexto() {


  var paragrafo = document.getElementById("paragrafo1").textContent;
  var synth = window.speechSynthesis;
  var utterance = new SpeechSynthesisUtterance(paragrafo);
  synth.speak(utterance);

}


