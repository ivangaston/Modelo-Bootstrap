const imgMenu = document.getElementById('imgMenu');
const listaMenu = document.getElementById('listaMenu');

function menuCerrar() {
  listaMenu.style.opacity = '0';
  setTimeout(function() {
    listaMenu.style.display = 'none';
  }, 500);
}

imgMenu.addEventListener('click', function() {
  if (listaMenu.style.display === 'none') {
    listaMenu.style.display = 'block';
    listaMenu.style.opacity = '0';
    listaMenu.style.transition = 'opacity ease 0.5s';

    setTimeout(function() {
      listaMenu.style.opacity = '1';
    }, 5);
  } else {
    menuCerrar();
  }
});

document.addEventListener('click', function(event) {
    const target = event.target;
  
    if (target !== imgMenu && !listaMenu.contains(target)) {
      menuCerrar();
    }
  });
  
/**************************************************************************/

