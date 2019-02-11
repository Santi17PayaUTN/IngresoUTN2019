/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var precio1; var precio2; var precio3;
    precio1= parseFloat(document.getElementById("PrecioUno").value);
    precio2= parseFloat(document.getElementById("PrecioDos").value);
    precio3= parseFloat(document.getElementById("PrecioTres").value);
alert(precio1 + precio2 + precio3);
}
function Promedio () 
{var precio1; var precio2; var precio3; var promedios;
    precio1= parseFloat(document.getElementById("PrecioUno").value);
    precio2= parseFloat(document.getElementById("PrecioDos").value);
    precio3= parseFloat(document.getElementById("PrecioTres").value);
	
promedios= (precio1 + precio2 + precio3 ) / 3;
alert(promedios);
}
function PrecioFinal () 
{var precio1; var precio2; var precio3;var precios;var precioFinal;
	precio1= parseFloat(document.getElementById("PrecioUno").value);
    precio2= parseFloat(document.getElementById("PrecioDos").value);
    precio3= parseFloat(document.getElementById("PrecioTres").value);
precios= (precio1 + precio2 + precio3)
precioFinal= (precios)+ (precios*21/100)
alert(precioFinal)
}