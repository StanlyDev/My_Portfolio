document.addEventListener('DOMContentLoaded', function () {
    const sunButton = document.querySelector('.light-theme');
    const moonButton = document.querySelector('.dark-theme');
    const body = document.body;
    const myname = document.querySelector('.myname');
    const phrase = document.querySelector('.phrase');
    const myinfo = document.querySelector('.myinfo');

    sunButton.addEventListener('click', function () {
        body.style.backgroundColor = '#fff';
        myname.style.color = 'black';
        phrase.style.color = 'black';
        myinfo.style.color = '#495057';
        const icons = myinfo.querySelectorAll('lord-icon');
        icons.forEach(icon => {
            icon.setAttribute('colors', 'primary:#495057');
        });
    });

    moonButton.addEventListener('click', function () {
        body.style.backgroundColor = '#212121';
        myname.style.color = '#fff';
        phrase.style.color = '#fff';
        myinfo.style.color = '#b4b4b4';
        const icons = myinfo.querySelectorAll('lord-icon');
        icons.forEach(icon => {
            icon.setAttribute('colors', 'primary:#fff');
        });
    });
});
