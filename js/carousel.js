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