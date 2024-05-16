document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const nav = document.querySelector('nav');
    const myname = document.querySelector('.myname');
    const phrase = document.querySelector('.phrase');
    const myinfo = document.querySelector('.myinfo');
    const modoOscuroCheckbox = document.getElementById('modoOscuro');
    const listaLi = document.querySelectorAll('.op-page li');
    const mainP = document.querySelectorAll('.content p, h1');
    const moonButton = document.querySelector('.light-theme');
    const sunButton = document.querySelector('.dark-theme');

    modoOscuroCheckbox.addEventListener('change', function () {
        if (modoOscuroCheckbox.checked) {
            body.style.backgroundColor = '#fff';
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            nav.style.color = 'black';
            myname.style.color = 'black';
            phrase.style.color = 'black';
            myinfo.style.color = '#495057';
            listaLi.forEach(li => {
                li.style.color = '#495057';
            });
            mainP.forEach(p => {
                p.style.color = 'black';
            });
            const icons = myinfo.querySelectorAll('lord-icon');
            icons.forEach(icon => {
                icon.setAttribute('colors', 'primary:#495057');
            });
            moonButton.style.display = 'none';
            sunButton.style.display = 'inline-block';
        } else {
            body.style.backgroundColor = '#212121';
            nav.style.backgroundColor = 'rgba(33, 33, 33, 0.3)';
            nav.style.color = '#fff';
            myname.style.color = '#fff';
            phrase.style.color = '#fff';
            myinfo.style.color = '#b4b4b4';
            listaLi.forEach(li => {
                li.style.color = '#b4b4b4';
            });
            mainP.forEach(p => {
                p.style.color = '#fff'
            });
            const icons = myinfo.querySelectorAll('lord-icon');
            icons.forEach(icon => {
                icon.setAttribute('colors', 'primary:#fff');
            });
            sunButton.style.display = 'none';
            moonButton.style.display = 'inline-block';
        }
    });
});
