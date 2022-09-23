/**variables */
const moon = document.querySelector('.moon-base'), solarSystem = document.querySelector('.solar-system');

/**events */
document.addEventListener('DOMContentLoaded', event => {
    setTimeout(() => {
        moon.classList.add('active');
        setTimeout(() => {
            solarSystem.classList.add('active');
        }, 3000);
    }, 10000);
});