document.addEventListener("keydown", function(event) {
    playSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
});

document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function() {
        playSound(this.innerHTML.toLowerCase());
        buttonAnimation(this.innerHTML.toLowerCase());
    });
});

function playSound(key) {
    let sound;

    switch (key) {
        case "w":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
            break;
        case "a":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
            break;
        case "s":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
            break;
        case "d":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
            break;
        case "j":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3");
            break;
        case "k":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
            break;
        case "l":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
            break;
        default:
            return;
    }

    sound.play();
}

function buttonAnimation(key) {
    let activeButton = document.querySelector("." + key);
    if (!activeButton) return;

    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}
