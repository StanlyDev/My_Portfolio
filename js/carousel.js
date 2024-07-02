    function openModal(imgElement) {
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('modalImg');

        modal.style.display = 'block';
        modalImg.src = imgElement.src;
    }

    function closeModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
    }