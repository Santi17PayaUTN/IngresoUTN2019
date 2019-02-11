/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{var largo; var ancho; var perimetro;var cantidad;
    largo= parseFloat(document.getElementById("Largo").value);
    ancho= parseFloat(document.getElementById("Ancho").value);
perimetro= 2*largo + 2*ancho;
cantidad= perimetro*3;
alert(cantidad);
}
function Circulo () 
{var radio;var total;var perimetro;
    radio= parseFloat(document.getElementById("Largo").value); 
    perimetro= radio*(2*Math.PI);
    total= perimetro*3;
    alert(total)
alret(total)
}
function Materiales () 
{var largo; var ancho; var contrapiso;var bolsaCemento;var bolsaCal;
    largo= parseFloat(document.getElementById("Largo").value);
    ancho= parseFloat(document.getElementById("Largo").value);
contrapiso= largo*ancho;
bolsaCemento= contrapiso*2;
bolsaCal= contrapiso*3;
alert("Se necesitan "+ bolsaCemento + " bolsas de cemento y " + bolsaCal + " de cal ");

}