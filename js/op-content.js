document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.op-page a');
    const contents = document.querySelectorAll('.op-content > div');

    contents.forEach(content => {
        if (!content.classList.contains('feed-content')) {
            content.classList.remove('active');
        }
    });

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            contents.forEach(content => {
                content.classList.remove('active');
            });
            target.classList.add('active');
        });
    });
});
