function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;

	while(respuesta=="si")
	{

	numeroIngresado=prompt('Ingrese numero');
	numeroIngresado=parseInt(numeroIngresado);

	contador=contador+1;
	acumulador=acumulador+numeroIngresado;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN