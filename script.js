
const audio1 = document.getElementById('music1');
const audio2 = document.getElementById('music2');
const audio3 = document.getElementById('music3');
const back = document.getElementById('background');
const cover = document.getElementById('cover');
// button play-pause - button play and pause music
let isPlay = 0;
let playNum = 0;
let musics = [audio1, audio2, audio3];
const songsTitle = ["Don't Start Now", "Don't Hurt Yourself", "Dion"]
const songsArtist = ["Dua Lipa", "Beyonce", "Linage II"]

function playAudio() {
    isPlay++;
    if (isPlay % 2 !== 0) {
        musics[playNum].play();
        document.getElementById('cover').classList.add('big')
        document.querySelector('.button.play-pause').classList.add('play')
    } else if (isPlay % 2 === 0) {
        musics[playNum].pause();
        document.querySelector('.button.play-pause').classList.remove('play')
        document.getElementById('cover').classList.remove('big')
    }
}

// button play-Next , playPrev

function playNext() {
    if ((playNum + 1) % musics.length === 0) {
        musics[playNum].pause();
        musics[playNum].currentTime = 0;
        back.src = `/audio-player/assets/img/cover${playNum - 1}.png`
        cover.src = `/audio-player/assets/img/cover${playNum - 1}.png`
        playNum = -1
        document.getElementById('artists').innerText = `${songsArtist[playNum + 1]}`
        document.getElementById('title').innerText = `${songsTitle[playNum + 1]}`
    }
    document.getElementById('cover').classList.add('big')
    document.querySelector('.button.play-pause').classList.add('play')
    playNum++;
    musics[playNum].play();
    musics[playNum - 1].pause();
    musics[playNum - 1].currentTime = 0;
    document.getElementById('cover').classList.add('big')
    document.querySelector('.button.play-pause').classList.add('play')
    document.getElementById('artists').innerText = `${songsArtist[playNum]}`
    document.getElementById('title').innerText = `${songsTitle[playNum]}`
    back.src = `/audio-player/assets/img/cover${playNum + 1}.png`
    cover.src = `/audio-player/assets/img/cover${playNum + 1}.png`
}
function playPrev() {
    playNum--;
    if (playNum === -1) {
        musics[0].currentTime = 0;
        musics[0].pause();
        playNum = 2
        musics[playNum].play();

    } else if (playNum === 1){
        musics[2].pause();
        musics[2].currentTime = 0;
        musics[1].play();
    } else if (playNum === 0) {
        musics[1].currentTime = 0;
        musics[1].pause()
        musics[0].play()

    }
    document.getElementById('cover').classList.add('big')
    document.querySelector('.button.play-pause').classList.add('play')
    document.getElementById('artists').innerText = `${songsArtist[playNum]}`
    document.getElementById('title').innerText = `${songsTitle[playNum]}`
    back.src = `/audio-player/assets/img/cover${playNum + 1}.png`
    cover.src = `/audio-player/assets/img/cover${playNum + 1}.png`
}
// button play-Next , playPrev