/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var marca;
 	var precio;
 	precio=35;

 	cantidad=document.getElementById('Cantidad').value;
 	cantidad=parseInt(cantidad);
 	marca=document.getElementById('Marca').value;

 if(cantidad>5)
 {
 	descuento=precio*cantidad*50/100;
 	precioDescuento
 	document.getElementById('precioDescuento').value=precioDescuento;
 }
 else
 {

 	if(cantidad==5)
 	{
 		if(marca=="ArgentinaLuz")
 		{
 			descuento=precio*cantidad*40/100;
 			//precioDescuento=(precio*cantidad)-descuento;
 			document.getElementById('precioDescuento').value=descuento;
 		}
 		else
 		{
 			descuento=precio*cantidad*30/100;
 			document.getElementById('precioDescuento').value=precioDescuento;
 		}
 	}
 	else
 	{
 		if(cantidad==4)
 		{
 			if(marca=="ArgentinaLuz"|| marca=="FelipeLamparas")
 			{
 				precioDescuento=precio*cantidad*25/100;
 				document.getElementById('precioDescuento').value=precioDescuento;
 			}

 			else
 			{
 				descuento=precio*cantidad*20/100;
 				document.getElementById('precioDescuento').value=precioDescuento;
 			}
 		}
 		else
 		{
 			if(cantidad==3)
 			{
 				if(marca=="ArgentinaLuz")
 				{
 					descuento=precio*cantidad*15/100;
 					document.getElementById('precioDescuento').value=precioDescuento;
 				}
 			}
 			else
 			{
 				if(marca=="FelipeLamparas")
 				{
 					descuento=precio*cantidad*10/100;
 					document.getElementById('precioDescuento').value=precioDescuento;
 				}
 				else
 				{
 					descuento=precio*cantidad*5/100;
 					document.getElementById('precioDescuento').value=precioDescuento;
 				}
 			}
		}
 	}
 }
}
