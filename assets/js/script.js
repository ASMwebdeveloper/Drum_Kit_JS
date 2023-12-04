
function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.key}"]`)
        const key = document.querySelector(`.key[data-key="${e.key}"]`)
    
        if (!audio) return; // if user press another key don't play audio
    
        audio.currentTime = 0 
        audio.play()
        key.classList.add("playing")
}

function removeTransition(e) {
    if (e.propertyName !== 'scale') return // skip it if it's not scale property
    this.classList.remove('playing')
}


const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend' , removeTransition))
window.addEventListener('keydown',playSound)
