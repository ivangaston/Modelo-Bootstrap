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

