const almir = document.querySelector('.almir');
const batata = document.querySelector('.batata');

const jump = () => {
    almir.classList.add('jump');

setTimeout(() => {
    almir.classList.remove('jump');
}, 500);

}

const loop = setInterval(() => {

    const batataPosition = batata.offsetLeft;
    const almirPosition = +window.getComputedStyle(almir).bottom.replace('px','');

    console.log(batataPosition)

    if (batataPosition <= 60  && batataPosition < 0 && almirPosition < 80) {

        batata.style.animation = 'none';
        batata.style.left = `${batataPosition}px`;

        almir.style.animation = 'none';
        almir.style.left = `${almirPosition}px`;

        almir.src = './images/game-over.png';
        almir.style.width = '75px'
        almir.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump)