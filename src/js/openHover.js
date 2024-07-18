// Obtenemos los elementos relevantes del DOM
const contactLink = document.getElementById('contact-link');
const card2 = document.getElementById('c2');
const card3 = document.getElementById('c3'); // Asegúrate de tener el elemento con id 'c3' en tu HTML

// Variable para rastrear el estado del card
let isOpen = false;

// Función para abrir o cerrar los cards
function toggleCard() {
    isOpen = !isOpen;
    card2.classList.toggle('open', isOpen);
    card3.classList.toggle('open', isOpen);
}

// Evento click en el enlace para abrir o cerrar los cards
contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    if (window.innerWidth <= 768) {
        toggleCard();
    }
    else{
        toggleCard();
    }
});

// Evento click fuera de los cards para cerrarlos
document.addEventListener('click', function(event) {
    if (isOpen && event.target !== contactLink && !card2.contains(event.target) && !card3.contains(event.target)) {
        toggleCard();
    }
});
