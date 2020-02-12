function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random

	random=Math.floor((Math.random() * 10) + 1);

	console.log(random)

	if(random>8)
	{
		alert("Excelente")
	}
	else
		if(random<5)
		{
			alert("Vamos, la proxima se puede")
		}
		else 
		{
			alert("APROBO")
		}
			


}//FIN DE LA FUNCIÓN