/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numberOne; var numberTwo;
	numberOne= parseInt(document.getElementById("numeroUno").value);
    numberTwo= parseInt(document.getElementById("numeroDos").value);

    alert(numberOne + numberTwo)
}

function restar()
{   var numberOne; var numberTwo;
    
    numberOne= parseInt(document.getElementById("numeroUno").value);
    numberTwo= parseInt(document.getElementById("numeroDos").value);

    alert(numberOne - numberTwo)
}

function multiplicar()
{   var numberOne; var numberTwo;
	numberOne= parseInt(document.getElementById("numeroUno").value);
    numberTwo= parseInt(document.getElementById("numeroDos").value);

    alert(numberOne * numberTwo)
}

function dividir()
{   var numberOne; var numberTwo;
	numberOne= parseInt(document.getElementById("numeroUno").value);
    numberTwo= parseInt(document.getElementById("numeroDos").value);

    alert(numberOne / numberTwo)
}

