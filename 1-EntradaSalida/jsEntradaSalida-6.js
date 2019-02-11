/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{var numerosunos; var numerosdos;

    numerosunos= parseInt(document.getElementById("numeroUno").value);
    numerosdos= parseInt(document.getElementById("numeroDos").value);

    alert(numerosunos + numerosdos)
}

