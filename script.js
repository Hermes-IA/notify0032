// Deshabilitar selección de texto
 
document.body.style.userSelect = 'none'; // Para la mayoría de los navegadores
document.body.style.webkitUserSelect = 'none'; // Para WebKit (Safari, Chrome)
document.body.style.msUserSelect = 'none'; // Para IE/Edge

// Deshabilitar el menú contextual (clic derecho o mantener presionado)
document.body.addEventListener('contextmenu', function (event) {
	event.preventDefault(); // Prevenir la acción predeterminada (mostrar el menú contextual)
});


 
async function obtenerTasa() {
	try {
		const response = await fetch('https://servicios-bd.vercel.app/get-tasa');
		if (!response.ok) {
			throw new Error('Error al obtener la tasa');
		}
		const data = await response.json();
		console.log('Tasa obtenida:', data.tasa);
		document.getElementById("tasa").textContent = data.tasa;
		document.getElementById("tasa2").textContent = data.tasa;
	} catch (error) {
		console.error('Error:', error);
	}
}

document.addEventListener('DOMContentLoaded', function () {
	obtenerTasa();
});

document.querySelectorAll('.product').forEach(product => {
	let isTouching = false;  // Indicador de si el usuario está tocando el div

	// Al tocar el div (touchstart)
	product.addEventListener('touchstart', function (event) {
		isTouching = true;  // Usuario está tocando el div
		// Iniciar animación
		this.classList.remove('fade-out');
		this.classList.add('clicked');
	});

	// Al mover el dedo (touchmove)
	product.addEventListener('touchmove', function (event) {
		if (isTouching) {
			// Detectamos si el movimiento es mayor horizontal o vertical
			const deltaX = Math.abs(event.touches[0].clientX - event.touches[0].pageX);
			const deltaY = Math.abs(event.touches[0].clientY - event.touches[0].pageY);

			// Si el movimiento es principalmente horizontal, prevenimos el desplazamiento
			if (deltaX > deltaY) {
				event.preventDefault();  // Previene desplazamiento solo si el movimiento es horizontal
			}
		}
	});

	// Al soltar el dedo (touchend)
	product.addEventListener('touchend', function () {
		setTimeout(() => {
			// Inicia el fade-out (desvanecimiento)
			this.classList.add('fade-out');
			this.classList.remove('clicked');
		}, 100); // Espera a que la animación de ancho se complete
		isTouching = false;  // El usuario ha dejado de tocar el div
	});

	// Para detectar cuando el toque se cancela (touchcancel)
	product.addEventListener('touchcancel', function () {
		isTouching = false;  // El toque fue cancelado, restauramos el estado
		this.classList.remove('clicked');
	});
});

//spinner refresh
const refreshContainer = document.getElementById('refresh-container');
const spinnerRefresh = document.getElementById('spinnerRefresh');
const spinnerIcon = spinnerRefresh.querySelector('i');
let startYY = 0;
let isAtTop = false;
let isPulling = false;

// Detectar cuando el usuario está en la parte superior
window.addEventListener('scroll', () => {
	isAtTop = window.scrollY === 0;
});

// Comenzar el pull
document.addEventListener('touchstart', (e) => {
	startYY = e.touches[0].clientY;
	if (isAtTop) {
		isPulling = true;
	}
});

// Actualizar posición durante el pull
// Actualizar posición durante el pull
document.addEventListener('touchmove', (e) => {
    if (!isPulling) return;

    const currentY = e.touches[0].clientY;
    const pullDistance = Math.max(0, currentY - startYY);
    
    // Ajustar el punto donde comienza la visibilidad
    const visibilityThreshold = 110; // Ajusta este valor según tu barra de estado
    const clampedDistance = Math.min(pullDistance, 200);

    // Mostrar contenedor y spinner
    refreshContainer.style.top = `${-60 + clampedDistance}px`;
    
    // Comenzar opacidad solo cuando pase el umbral de visibilidad
    if (clampedDistance > visibilityThreshold) {
        const opacity = Math.min(1, (clampedDistance - visibilityThreshold) / 50);
        spinnerIcon.style.opacity = opacity;
    }
});

// Terminar el pull
document.addEventListener('touchend', () => {
	if (!isPulling) return;

	const pullDistance = refreshContainer.offsetTop + 60;
	
	// Si se ha jalado lo suficiente, simular refresco
	if (pullDistance >= 90) {
		// Simular recarga
		setTimeout(() => {
			// Aquí puedes agregar tu lógica de recarga real
 
			// Resetear la animación
			refreshContainer.style.top = '10px';
			spinnerIcon.style.opacity = '0';
			location.reload();

		}, 200);
	} else {
		// Resetear si no se jaló lo suficiente
		refreshContainer.style.top = '10px';
		spinnerIcon.style.opacity = '0';
	}

	isPulling = false;
});

 

function irAcomprob() {
	window.open("movimientos/movimientos.html?RemiNombre=" + RemiNombre + "&RemiCuit=" + RemiCuit + "&RemiCbu=" + RemiCbu + "&RemiSaldo=" + RemiSaldo + "&RemiMotivo=" + RemiMotivo + "&DestiNombre1=" + DestiNombre1 + "&DestiNombre2=" + DestiNombre2 + "&DestiAlias=" + DestiAlias + "&DestiCbuDest=" + DestiCbuDest + "&DestiCuit=" + DestiCuit + "&DestiCuenta=" + DestiCuenta + "&DestiTipo=" + DestiTipo + "&DestiImagen=" + DestiImagen + "&monto=0" + "&hora=" + hora + "&TresCod=" + TresCod, '_self');

}






