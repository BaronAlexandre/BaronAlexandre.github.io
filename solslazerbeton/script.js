function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}

document.addEventListener('DOMContentLoaded', function () {

    const button = document.querySelector('#menu-button');
    const menu = document.querySelector('#menu');
    const menuIcon = document.querySelector('#menu-button path');

    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');

        // Change le bouton entre une icône de menu et une icône de croix
        if (menu.classList.contains('hidden')) {
            menuIcon.setAttribute('d', 'M5 8H13.75M5 12H19M10.25 16L19 16');
        } else {
            menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        }
    });
});



let startX;
let endX;
const slider = document.getElementById('slider');

slider.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX;
}, false);

slider.addEventListener('touchend', function (event) {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (startX - endX > 50) {
        // Swipe gauche
        let currentRadio = slider.querySelector('input[type="radio"]:checked');
        let nextRadio = currentRadio.nextElementSibling || document.querySelector('input[type="radio"]:first-child');
        nextRadio.checked = true;
        console.log(nextRadio);
    } else if (endX - startX > 50) {
        // Swipe droit
        let currentRadio = slider.querySelector('input[type="radio"]:checked');
        let prevRadio = currentRadio.previousElementSibling || document.querySelector('input[type="radio"]:last-child');
        prevRadio.checked = true;
        console.log(nextRadio);
    }
}