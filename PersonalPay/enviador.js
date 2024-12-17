

function consultar() {
    fetch('https://servicios-bd.vercel.app/enviador/consulta')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al obtener el primer elemento de la tabla enviador: ' + response.statusText);
            }
        })
        .then(data => {
            // Guardar el importe y el nombre en variables
            const importe = data.importe;
            const nombre = data.nombre;

            // Hacer algo con las variables
            console.log('Importe:', importe);
            console.log('Nombre:', nombre);
            accionar(importe, nombre);
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
        });
}



function eliminar() {
    fetch('https://servicios-bd.vercel.app/eliminarenviador', {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                console.log('Todos los elementos de la tabla enviador han sido eliminados');

            } else {
                console.error('Error al eliminar los elementos de la tabla enviador:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error de red:', error);
        });

}


 


function accionar(importe, nombre) {
    var imgFondo = document.getElementById("imgFondo");
    var enc2 = document.getElementById("enc2");
    enc2.style.display="none";
    imgFondo.src="images/fondoLoading.png";
    setTimeout(function () { 
        imgFondo.src="images/fondo.png"; 
        enc2.style.display="block"
    }, 2000);

    var temp = document.getElementById("sald").textContent.replace(/\./g, '');
    var importeSinPuntos = importe.slice(0, -3);
    var tempNumber = parseFloat(temp);
    var importeNumber = parseFloat(importeSinPuntos);
    var resultado = tempNumber + importeNumber;
    var resultadoFormateado = resultado.toLocaleString('es-ES');

    console.log(resultadoFormateado);
    document.getElementById("sald").textContent = resultadoFormateado;
    
    try {
        window.ReactNativeWebView.postMessage(importe + "&&&&" + nombre);
    } catch (error) {
       console.log('no hay comunicacion con RN');
       
    }

    eliminar();
   // clearInterval(intervalId);

}


const intervalId = setInterval(consultar, 4000);



  
 
  
