for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = 'square'; // square wave for a sharper beep

  switch (key) {
    case "w":
      oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
      break;
    case "a":
      oscillator.frequency.setValueAtTime(250, audioCtx.currentTime);
      break;
    case "s":
      oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
      break;
    case "d":
      oscillator.frequency.setValueAtTime(350, audioCtx.currentTime);
      break;
    case "j":
      oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
      break;
    case "k":
      oscillator.frequency.setValueAtTime(450, audioCtx.currentTime);
      break;
    case "l":
      oscillator.frequency.setValueAtTime(500, audioCtx.currentTime);
      break;
    default:
      console.log("Unknown key: " + key);
      return; // exit if key not recognized
  }

  gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.2);
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (!activeButton) return;  // safety check
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
