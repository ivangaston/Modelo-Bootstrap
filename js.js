const imgMenu = document.getElementById('imgMenu');
const listaMenu = document.getElementById('listaMenu');

/*MENU HAMBURG*/


function menuAbrir() {
    listaMenu.style.display = 'block';
    listaMenu.style.animation = 'opacidad 1s'
    console.log(menuAbrir)
}

imgMenu.addEventListener('click', function () {
    if (listaMenu.style.display === 'block') {
        setTimeout(function () {
            listaMenu.style.display = 'none';
        });
    } else {
        menuAbrir();
    }
});

function menuCerrar() {
    listaMenu.style.display = 'none';
}
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

