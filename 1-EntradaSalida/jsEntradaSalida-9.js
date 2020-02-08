/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var porcentaje;
	var resultado;

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);

	porcentaje=sueldo*10/100;

	resultado=sueldo+porcentaje;

	document.getElementById('resultado').value=resultado;

	//var importe;

	//importe=document.getElementById('sueldo');

	//importe=parseInt(importe);
	//impuesto=importe*21/100;
	//importeMasIva=importe+impuesto;


	//console.log("importe final: "+importeMasIva)

	//importeMasIva=importe+importe*21/100;

}
