// Deshabilitar selección de texto
/*
document.body.style.userSelect = 'none'; // Para la mayoría de los navegadores
document.body.style.webkitUserSelect = 'none'; // Para WebKit (Safari, Chrome)
document.body.style.msUserSelect = 'none'; // Para IE/Edge

// Deshabilitar el menú contextual (clic derecho o mantener presionado)
document.body.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Prevenir la acción predeterminada (mostrar el menú contextual)
});

*/

async function obtenerTasa() {
    try {
	const response = await fetch('https://servicios-bd.vercel.app/get-tasa');
        if (!response.ok) {
            throw new Error('Error al obtener la tasa');
        }
        const data = await response.json();
        console.log('Tasa obtenida:', data.tasa);
        document.getElementById("tasa").textContent = data.tasa;
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
  
  
  
  
  
  

function irAcomprob() {
	window.open("movimientos/movimientos.html?RemiNombre=" + RemiNombre + "&RemiCuit=" + RemiCuit + "&RemiCbu=" + RemiCbu + "&RemiSaldo=" + RemiSaldo + "&RemiMotivo=" + RemiMotivo + "&DestiNombre1=" + DestiNombre1 + "&DestiNombre2=" + DestiNombre2 + "&DestiAlias=" + DestiAlias + "&DestiCbuDest=" + DestiCbuDest + "&DestiCuit=" + DestiCuit + "&DestiCuenta=" + DestiCuenta + "&DestiTipo=" + DestiTipo + "&DestiImagen=" + DestiImagen + "&monto=0" + "&hora=" + hora + "&TresCod=" + TresCod, '_self');

}






 