const ham = document.querySelector('.ham');
const links = document.querySelector('.links-menu');

ham.addEventListener('click', () => {
    links.classList.toggle('active'); //cambiar display de none a flex según los estilos.
})