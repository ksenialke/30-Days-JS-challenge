function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //showing which key we want to get in our document
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //selecting the div with the key
    if (!audio) return; // if a key that does not exist is pressed we do not execute the function
    audio.currentTime = 0; //so we can play one sound over and over again even when .play() method is running
    audio.play(); //play that sound
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing'); //this = key :)
}

const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);