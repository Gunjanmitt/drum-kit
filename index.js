document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();
    playSound(key);
    buttonAnimation(key);
});

document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function() {
        const key = this.innerHTML.toLowerCase();
        playSound(key);
        buttonAnimation(key);
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
    const button = document.querySelector("." + key);
    if (!button) return;

    button.classList.add("pressed");

    setTimeout(() => {
        button.classList.remove("pressed");
    }, 100);
}
