let button = document.getElementById('play-stop');
let elements = document.querySelectorAll('.element');

button.addEventListener('click', () => {
    elements.forEach(element => {
        if (element.style.animationPlayState === 'running') {
            element.style.animationPlayState = 'paused';
        } else {
            element.style.animationPlayState = 'running';
        }
    });
});