/**variables */
const volumeUp = document.querySelector('.volume-up'), volumeDown = document.querySelector('.volume-down'), audio = document.querySelector('.sounds audio');
const play = document.querySelector('.play'), pause = document.querySelector('.pause');
/**events */
play.addEventListener('click', event => {
    pause.classList.add('active');
    play.classList.remove('active');
    audio.pause();
});

pause.addEventListener('click', event => {
    play.classList.add('active');
    pause.classList.remove('active');
    audio.play();
});

volumeUp.addEventListener('click', event => {
    volumeDown.classList.add('active');
    volumeUp.classList.remove('active');
    audio.muted = true;
});

volumeDown.addEventListener('click', event => {
    volumeUp.classList.add('active');
    volumeDown.classList.remove('active');
    audio.muted = false;
});