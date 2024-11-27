 
const imageUrlMapPeli = { 
    'peli1.jpg': 'https://play.mercadolibre.com.ar/ver/yellowstone/5a79930369df4d3faf2c10e08d125b77',
    'peli2.jpg': 'https://play.mercadolibre.com.ar/ver/zombieland-tiro-de-gracia/c0f978b28c1d4b2da645fc6077ffd64a',
    'peli3.jpg': 'https://play.mercadolibre.com.ar/ver/resident-evil-4-la-resurreccion/4da9087ad0c7406086da3f0ea86c1b9c',
    'peli4.jpg': 'https://play.mercadolibre.com.ar/ver/2067/976c94a925194944b845ed38f93ea523',
    'peli5.jpg': 'https://play.mercadolibre.com.ar/ver/petroleo-sangriento/a9e44df3b8954582baf62b436337432f',
    'peli6.jpg': 'https://play.mercadolibre.com.ar/ver/los-intocables/d06317384efa43de91d57dce8266424c',
    'peli7.jpg': 'https://play.mercadolibre.com.ar/ver/una-mente-brillante/eb34a7bafbd14c0b96859b7068cb7340',
    'peli8.jpg': 'https://play.mercadolibre.com.ar/ver/actividad-paranormal-2/7ee47424f8e94771ac9c09ee03a6f4c6',
    'peli9.jpg': 'https://play.mercadolibre.com.ar/ver/cloud-atlas/93c6f120fb1a47c898383680727d3420',
    'peli10.jpg': 'https://play.mercadolibre.com.ar/ver/un-dia-para-sobrevivir/653bd0e841cc4a95957d8d349af47db6'
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