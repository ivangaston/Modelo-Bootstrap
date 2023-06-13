/*NAVBAR*/
document.addEventListener('click', (event) => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const targetElement = event.target;
    const clickInside = navbarCollapse.contains(targetElement);
  
    if (!clickInside) {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarOpen = navbarCollapse.classList.contains('show');
      
      if (navbarOpen) {
        navbarToggler.click();
      }
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


