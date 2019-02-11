/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{var fahrenheits; var centigrados;
    fahrenheits= parseFloat(document.getElementById("Temperatura").value);
    centigrados= (fahrenheits- 32)*5/9;
    alert("La temperatura es "+ centigrados + " grados centigrados");
}

function CentigradosFahrenheit () 
{   var fahrenheits; var centigrados;
    centigrados= parseFloat(document.getElementById("Temperatura").value);
    fahrenheits= ((9/5)*centigrados)+ 32;
    alert("La temperatura es "+ fahrenheits + " fahrenheits");
	
}
