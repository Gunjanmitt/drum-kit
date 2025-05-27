document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function() {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
});

function playSound(key) {
    let sound;

    switch (key) {
        case "w":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Tom1.mp3");
            break;
        case "a":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Tom2.mp3");
            break;
        case "s":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Tom3.mp3");
            break;
        case "d":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Tom4.mp3");
            break;
        case "j":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3");
            break;
        case "k":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"); // crash-like
            break;
        case "l":
            sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
            break;
        default:
            console.log(key);
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
