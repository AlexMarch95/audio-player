
const audio = document.getElementById('music')
const stopBtn = document.getElementById('button.pause')
let isPlay = false;
function playAudio() {
    if (isPlay === false) {
        audio.play();
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false
    }
    
}