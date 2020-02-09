/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var porcentaje;
	var resultado;

	sueldo=document.getElementById('importe').value;
	sueldo=parseInt(sueldo);

	porcentaje=sueldo*25/100;

	resultado=sueldo-porcentaje;

	document.getElementById('resultado').value=resultado;



	
}
