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
  switch (key) {
    case "w":
      new Audio("tom-1.mp3").play();
      break;
    case "a":
      new Audio("tom-2.mp3").play();
      break;
    case "s":
      new Audio("tom-3.mp3").play();
      break;
    case "d":
      new Audio("tom-4.mp3").play();
      break;
    case "j":
      new Audio("crash.mp3").play();
      break;
    case "k":
      new Audio("kick-bass.mp3").play();
      break;
    case "l":
      new Audio("snare.mp3").play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
