const imgMenu = document.getElementById('imgMenu');
const listaMenu = document.getElementById('listaMenu');

/*MENU HAMBURG*/

function menuAbrir() {
    listaMenu.style.opacity = '1';
    setTimeout(function () {
        listaMenu.style.display = 'block';
    }, 300);

    console.log(menuAbrir)
}
imgMenu.addEventListener('click', function () {
    if (listaMenu.style.display === 'block') {
        listaMenu.style.display = 'none';
        listaMenu.style.opacity = '0';
        listaMenu.style.transition = 'opacity ease 0.3s';

        setTimeout(function () {
            listaMenu.style.opacity = '1';
        }, 5);
    } else {
        menuAbrir();
    }
});


document.addEventListener('click', function (event) {
    const target = event.target;
    if (target !== imgMenu && !listaMenu.contains(target)) {
        menuCerrar();
    }
});

/*FOOTER*/
const foot = document.getElementById('mensajes');
const infoF = document.getElementById('infoF');

function footAbrir() {
    infoF.style.display = 'block';
}
foot.addEventListener('click', () => {
    if (infoF.style.display === 'block') {
        infoF.style.display = 'none';
    } else {
        footAbrir()
    }
});

