 const carousel = document.querySelector('.carousel');
        
 carousel.addEventListener('click', (event) => {
     if (!event.target.classList.contains('carousel-button')) return;
     
     const direction = event.target.dataset.direction;
     const scrollAmount = carousel.clientWidth / 2;
     
     if (direction === 'prev') {
         carousel.scrollBy({
             left: -scrollAmount,
             behavior: 'smooth'
         });
     } else if (direction === 'next') {
         carousel.scrollBy({
             left: scrollAmount,
             behavior: 'smooth'
         });
     }
 });

 let scrollInterval = 2000;

 function startCarousel() {
     let carousel = document.querySelector('.carousel');
     let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

     let position = 0;
     setInterval(() => {
         position += carousel.clientWidth;
         if (position > scrollWidth) {
             position = 0;
         }
         carousel.scrollTo({
             left: position,
             behavior: 'smooth'
         });
     }, scrollInterval);
 }

 document.addEventListener('DOMContentLoaded', startCarousel);

     // Función para abrir el modal con la imagen clicada
    function openModal(imgElement) {
        // Obtener el modal y la imagen dentro del modal
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('modalImg');

        // Asignar la imagen clicada al modal
        modal.style.display = 'block';
        modalImg.src = imgElement.src;
    }

    // Función para cerrar el modal
    function closeModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
    }