
const audio1 = document.getElementById('music1')
const audio2 = document.getElementById('music2')
let isPlay = false;

function playAudio() {
    if (isPlay === false) {
        audio1.play();
        isPlay = true;
        document.querySelector('.button.play-pause').classList.toggle('open')
    } else {
        audio1.pause();
        isPlay = false
        document.querySelector('.button.play-pause').classList.toggle('open')
    }
    
}
function playNext() {
 if (audio1.play()) {
    audio1.pause()
    audio1.currentTime = 0;
    audio2.play()
    document.querySelector('.button.play-pause').classList.toggle('open')
 } 
}