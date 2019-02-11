/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{var sueldos; var aumentos; var porcentaje;
    sueldos= parseInt(document.getElementById("sueldo").value);
    porcentaje= ((sueldos*10)/100);
    aumentos= (sueldos + porcentaje);
    document.getElementById("resultado").value=aumentos;
}
