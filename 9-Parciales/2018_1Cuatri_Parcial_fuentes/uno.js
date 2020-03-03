/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)
informar el huésped que trajo más personas en
una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva*/

function mostrar()
{
	var nombre;
	var cantidadDePersonas;
	var cantidadDeDiasDeEstadia;
	var formaDePago;

	var respuesta;
	var maximoCantidadDePersonas;
	var maximoCantidadePersonasNombre;
	var maximoCantidadDeDiasDeEstadia;
	var maximoCantidadDeDiasDeEstadiaCantidadDePersonas;
	var contador;
	var contadorQR;
	var contadorEfectivo;
	var contadorTarjeta;
	var acumulador;
	var masUtilizada;


	contadorQR=0;
	contadorEfectivo=0;
	contadorTarjeta=0;
	contador=0;
	acumulador=0;
	respuesta="s";
	
	while(respuesta=="s")
	{
		do
		{
			nombre=prompt("Ingrese su nombre");
		}while(!isNaN(nombre));

		do
		{
			cantidadDePersonas=prompt("Ingrese la cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}while(isNaN(cantidadDePersonas) || (cantidadDePersonas<1&&cantidadDePersonas>20));

		do
		{
			cantidadDeDiasDeEstadia=prompt("Ingrese la cantidad de dias de su estadia");
			cantidadDeDiasDeEstadia=parseInt(cantidadDeDiasDeEstadia);
		}while (isNaN(cantidadDeDiasDeEstadia) || (cantidadDeDiasDeEstadia<1 && cantidadDeDiasDeEstadia>31));
	
		do
		{
			formaDePago=prompt("Ingrese la forma de pago");
			formaDePago=parseInt(formaDePago);
		}while (!isNaN(formaDePago) || (formaDePago!="Efectivo") || (formaDePago!="Tarjeta") || (formaDePago!="QR"));

		if ((contador==0) || (cantidadDePersonas>maximoCantidadDePersonas))
		{
			maximoCantidadDePersonas=cantidadDePersonas;
			maximoCantidadePersonasNombre=nombre;
		}
		if ((contador==0) || (cantidadDeDiasDeEstadia>maximoCantidadDeDiasDeEstadia))
		{
			maximoCantidadDeDiasDeEstadia=cantidadDeDiasDeEstadia;
			maximoCantidadDeDiasDeEstadiaCantidadDePersonas=cantidadDePersonas;
			
		}
		
		switch (formaDePago)
		{
			case "Efectivo":
				contadorEfectivo++;
				break;
			case "Tarjeta":
				contadorTarjeta++;
				break;
			case "QR":
				contadorQR++;
				break;

		}

		respuesta=prompt("s para continuar");
		contador++;
			console.log(contador)
	}
	promedio=acumulador/contador

	if(contadorEfectivo>contadorTarjeta&& contadorEfectivo>contadorQR)
	{
		masUtilizada="Efectivo"
	}
	else
	{
		if(contadorTarjeta>contadorQR)
		{
			masUtilizada="Tarjeta"
		}
		else
		{
			masUtilizada="QR"
		}
	}

	

}
