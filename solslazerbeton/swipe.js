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
    } else if (endX - startX > 50) {
        // Swipe droit
        let currentRadio = slider.querySelector('input[type="radio"]:checked');
        let prevRadio = currentRadio.previousElementSibling || document.querySelector('input[type="radio"]:last-child');
        prevRadio.checked = true;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    // Générer la modal
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.className = 'modal';
    modal.innerHTML = `
      <span class="close-btn">&times</span>
      <img id="modal-img" class="modal-content" src="" alt="Image en grande taille">
    `;
    document.body.appendChild(modal);

    cards.forEach(card => {
        card.addEventListener('click', function () {
            if (getComputedStyle(card).zIndex === '1') {
                const imgSrc = this.querySelector("img").src.replace("/reduce","");
                document.getElementById('modal-img').src = imgSrc;
                modal.style.display = 'block';
            }
        });
    });

    // Fonction pour récupérer le bouton radio actif
    function getActiveRadioButton() {
        return [...document.querySelectorAll('input[type="radio"]')].find(radio => radio.checked);
    }

    // Fermer la modal en cliquant sur le bouton de fermeture
    document.querySelector('.close-btn').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fermer la modal en cliquant en dehors de la modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});