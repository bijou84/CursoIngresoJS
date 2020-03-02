function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
	case "Julio":
	case "Agosto":

		console.log("Abrigate que hace frio")
		break;

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	case "Enero":
	case "Febrero":
	case "Marzo":
	
		console.log("Ya pasamos el frio, ahora calor!!!.")
		break
	
	case "Abril":
	case "Mayo":
	case "Junio":
		
		console.log("Falta para el invierno.")
		break
	
}
}//FIN DE LA FUNCIÓN