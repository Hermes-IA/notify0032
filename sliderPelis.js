 
const imageUrlMapPeli = { 
    'peli1.jpg': 'https://ejemplo.com/url-para-slider1',
    'peli2.jpg': 'https://ejemplo.com/url-para-slider2',
    'peli3.jpg': 'https://ejemplo.com/url-para-slider3',
    'peli4.jpg': 'https://ejemplo.com/url-para-slider4',
    'peli5.jpg': 'https://ejemplo.com/url-para-slider5',
    'peli6.jpg': 'https://ejemplo.com/url-para-slider1',
    'peli7.jpg': 'https://ejemplo.com/url-para-slider2',
    'peli8.jpg': 'https://ejemplo.com/url-para-slider3',
    'peli9.jpg': 'https://ejemplo.com/url-para-slider4',
    'peli10.jpg': 'https://ejemplo.com/url-para-slider5'
};

document.addEventListener('DOMContentLoaded', function() {
    // Función para agregar el evento de clic
    function addClickHandlerToSlides() {
        const slides = document.querySelectorAll('.swiper-container-peliculas .swiper-slide');
        
        slides.forEach(slide => {
            const img = slide.querySelector('img');
            if (img && img.src) {
                // Extraemos el nombre de archivo de la imagen
                const imageName = img.src.split('/').pop();
                
                // Buscamos la URL correspondiente en nuestro mapeo
                const url = imageUrlMapPeli[imageName];
                
                if (url) {
                    // Hacemos el slide clickeable
                    slide.style.cursor = 'pointer';
                    slide.addEventListener('click', () => {
                        window.open(url, '_blank');
                    });
                }
            }
        });
    }

    // Inicializamos el Swiper
    const swiper = new Swiper('.swiper-container-peliculas', {
        slidesPerView: 1,
        spaceBetween: "-30%",
        grabCursor: true,
        touchRatio: 1,
        loop: true,
        speed: 400
    });

    // Agregamos los manejadores de clic
    addClickHandlerToSlides();

    // Aplicamos el fade-in
    fadeIn(document.querySelector('.swiper-container-peliculas'), 1500);
});

// Función fadeIn
function fadeIn(element, duration) {
    let opacity = 0;
    element.style.opacity = opacity;
    element.style.visibility = 'visible';

    const interval = 10;
    const increment = interval / duration;

    function increaseOpacity() {
        opacity += increment;
        if (opacity >= 1) {
            opacity = 1;
            clearInterval(fadeInterval);
        }
        element.style.opacity = opacity;
    }

    const fadeInterval = setInterval(increaseOpacity, interval);
}