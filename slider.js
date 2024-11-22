const totalPrincipal = 8;  
const totalSliders = 5;  

// Mapeo de imágenes a URLs
const imageUrlMap = {
    'principal1.jpg': 'https://ejemplo.com/url-para-principal1',
    'principal2.jpg': 'https://ejemplo.com/url-para-principal2',
    'principal3.jpg': 'https://ejemplo.com/url-para-principal3',
    'principal4.jpg': 'https://ejemplo.com/url-para-principal4',
    'principal5.jpg': 'https://ejemplo.com/url-para-principal5',
    'principal6.jpg': 'https://ejemplo.com/url-para-principal6',
    'principal7.jpg': 'https://ejemplo.com/url-para-principal7',
    'principal8.jpg': 'https://ejemplo.com/url-para-principal8',
    'slider1.jpg': 'https://ejemplo.com/url-para-slider1',
    'slider2.jpg': 'https://ejemplo.com/url-para-slider2',
    'slider3.jpg': 'https://ejemplo.com/url-para-slider3',
    'slider4.jpg': 'https://ejemplo.com/url-para-slider4',
    'slider5.jpg': 'https://ejemplo.com/url-para-slider5',
    'vincula.jpg': 'https://google.com/'
};

// Función para seleccionar una imagen aleatoria de la lista de imágenes principales
function getRandomPrincipalImage() {
    const principalImages = []; 
    for (let i = 1; i <= totalPrincipal; i++) {  
        principalImages.push(`/publiSliders/principal${i}.jpg`);
    }

    // Seleccionamos una imagen aleatoria de la lista
    const randomIndex = Math.floor(Math.random() * principalImages.length);
    return principalImages[randomIndex];
}
 
function getRandomSliderImage() {
    const sliderImages = []; 
    for (let i = 1; i <= totalSliders; i++) {
        sliderImages.push(`/publiSliders/slider${i}.jpg`);
    }

    // Seleccionamos una imagen aleatoria de la lista
    const randomIndex = Math.floor(Math.random() * sliderImages.length);
    return sliderImages[randomIndex];
}

// Modificamos la función para agregar el evento de clic
function addClickHandlerToSlides() {
    const slides = document.querySelectorAll('.swiper-slide');
    
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img && img.src) {
            // Extraemos el nombre de archivo de la imagen
            const imageName = img.src.split('/').pop();
            
            // Buscamos la URL correspondiente en nuestro mapeo
            const url = imageUrlMap[imageName];
            
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

// Seleccionamos una imagen "principal" aleatoria y la colocamos en el slider
document.getElementById('image1').src = getRandomPrincipalImage();

// Seleccionamos dos imágenes "slider" aleatorias y las colocamos en los otros sliders
document.getElementById('image2').src = getRandomSliderImage();
document.getElementById('image3').src = getRandomSliderImage();

// Llamamos a la función para agregar manejadores de clic
addClickHandlerToSlides();

// Inicializamos el swiper después de asignar las imágenes
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: "0%", // DISTANCIA ENTRE DIAPOSITIVAS
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Permite hacer clic en los puntos para cambiar de diapositiva
    },
    on: {
        slideChange: function () {
            // Restablece el color de todos los puntos a gris
            var bullets = document.querySelectorAll('.swiper-pagination-bullet');
            bullets.forEach(function (bullet) {
                bullet.style.backgroundColor = 'gray';
            });

            // Obtiene el índice de la diapositiva activa y actualiza el color del punto correspondiente
            var activeIndex = swiper.activeIndex;
            bullets[activeIndex].style.backgroundColor = '#428bca';
        },
    },
});

// Función para hacer el fade-in del swiper-container
function fadeIn(element, duration) {
  let opacity = 0;
  element.style.opacity = opacity;
  element.style.visibility = 'visible'; // Asegura que sea visible

  const interval = 10; // Intervalo en milisegundos
  const increment = interval / duration; // Incremento en opacidad

  function increaseOpacity() {
      opacity += increment;
      if (opacity >= 1) {
          opacity = 1; // Aseguramos que no pase de 1
          clearInterval(fadeInterval);
      }
      element.style.opacity = opacity;
  }

  const fadeInterval = setInterval(increaseOpacity, interval);
}

const swiperContainer = document.querySelector('.swiper-container');
// Aplicamos el fade-in al contenedor con una duración de 1000 ms (1 segundo)
fadeIn(swiperContainer, 1500);