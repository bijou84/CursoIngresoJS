/*
De los movimientos de un ,banco, necesito saber:
el nombre del cliente,
la edad(debe ser mayor de 18),
sexo,
tipo de transaccion(extraccion o deposito)
e importe. Validar que no sea negativo.

jose    37 	m extraccion 1000
maria   40	f deposito 	 2000
jesus   33	m extraccion 1500
melchor 20  m extraccion 1300

*/

function mostrar()
{
	var nombreDelCliente;
  	var edad;
  	var sexo;
	var tipoDeTransaccion;
  	var importe;

  	var respuesta;
  	var contador;
  	var edadSuma;
	var promedioEdad;
	var edadDelMasJoven;
	var edadDelMasJovenNombreDelCliente;
	var cantidadDeHombres;
	var cantidadDeMujeres;
	var importeMasAlto;
	var sexoImporteMasAlto;
	var edadDelMasGrande;
	var edadDelMasGrandeImporte;
	var tipoTransaccionMasUtilizada;
	var cantidadExtraccion;
	var cantidadDeposito;

	respuesta="s";
	contador=0;
	edadSuma=0;
	cantidadDeHombres=0;
	cantidadDeMujeres=0;
	cantidadExtraccion=0;
	cantidadDeposito=0;	


	while(respuesta=="s")
	{
			do
			{
				nombreDelCliente=prompt("Ingrese el nombre del cliente");
			}while(!isNaN(nombreDelCliente));
			do
			{
				edad=prompt("Ingrese la edad del cliente");
				edad=parseInt(edad);
			}while(isNaN(edad) || edad<18 || edad>110);
			do
			{
				sexo=prompt("Ingrese el sexo del cliente  f / m");
			}while(!isNaN(sexo) && sexo!="f" && sexo!="m");
			do
			{
				tipoDeTransaccion=prompt("Ingrese el tipo de transaccion (Deposito o Extraccion");
			}while(!isNaN(tipoDeTransaccion) && tipoDeTransaccion!="Deposito" && tipoDeTransaccion!="Extraccion");
			do
			{
				importe=prompt("Ingrese el monto del importe");
				importe=parseInt(importe);
			}while(isNaN(importe) || importe<1 || importe>5000);
			//validacion
			contador++;
			edadSuma=edadSuma+edad;
			//2 nombre del mas joven=melchor
			if (contador==1 || edad<edadDelMasJoven)
			{
				edadDelMasJoven=edad;
				edadDelMasJovenNombreDelCliente=nombreDelCliente;
			}	
			//3 cantidad de hombres=3
			if (sexo=="m")
			{	
				cantidadDeHombres++;
			}//4 cantidad de mujeres=1
			else
			{
				cantidadDeMujeres++;
			}
			//5 sexo del importe mas alto=f
			if (contador==1 || importe>importeMasAlto)
			{
				importeMasAlto=importe;
				sexoImporteMasAlto=sexo;
			}
			//6 operacion mas usada=extraccion
			switch(tipoDeTransaccion)
			{
			case "Extraccion":
				cantidadExtraccion++;
				break;
			default:
				cantidadDeposito++;
				break;	
			}
		//7 importe del mas viejo=2000
			if (contador==1 || edad>edadDelMasGrande)
			{
				edadDelMasGrande=edad;
				edadDelMasGrandeImporte=importe;
			}
			
			respuesta=prompt("Desea continuar? s / n");
	}
			if(cantidadExtraccion>cantidadDeposito)
			{
			tipoTransaccionMasUtilizada='Extraccion';
			} 
			else
			{
				if(cantidadExtraccion==cantidadDeposito)
				{
					tipoTransaccionMasUtilizada='Ambas transacciones';
				} 
				else
				{
					tipoTransaccionMasUtilizada='Deposito';
				}
			}
	//1 promedio de edad=32,5
	promedioEdad=edadSuma/contador;

  document.write("<br> El promedio de edad es " +promedioEdad);
  document.write("<br> El cliente mas joven es " +edadDelMasJovenNombreDelCliente);
  document.write("<br> La cantidad de clientes hombres es " +cantidadDeHombres);
  document.write("<br> La cantidad de clientes mujeres es " +cantidadDeMujeres);
  document.write("<br> El sexo del cliente que con el importe mas grande es " +sexoImporteMasAlto);
  document.write("<br> El importe del cliente de mayor edad es de " +edadDelMasGrandeImporte);
  document.write("<br> La operacion mas utlizada es " +tipoTransaccionMasUtilizada); 
}
