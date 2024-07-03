function openModal(element) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg');
    const modalVideo = document.getElementById('modalVideo');

    modal.style.display = 'block';

    if (element.tagName.toLowerCase() === 'video') {
        modalImg.style.display = 'none';
        modalVideo.style.display = 'block';
        modalVideo.src = element.src;
        modalVideo.play();
    } else {
        modalVideo.style.display = 'none';
        modalImg.style.display = 'block';
        modalImg.src = element.src;
    }
}

function closeModal() {
    const modal = document.getElementById('myModal');
    const modalVideo = document.getElementById('modalVideo');

    modal.style.display = 'none';
    modalVideo.pause();
}
    
let currentIndex = 0;

function moveCarousel(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-inner img, .carousel-inner video');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const transformValue = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${transformValue}%)`;
}
