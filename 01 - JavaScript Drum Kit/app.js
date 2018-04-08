window.addEventListener('keydown', function (e) {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }

    else return;

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('transitionend', function () {
        key.classList.remove('playing');
    })
});