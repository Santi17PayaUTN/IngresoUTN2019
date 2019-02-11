/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{var importes; var descuentos; var porcentaje;
    importes= parseInt(document.getElementById("importe").value);
    porcentaje= ((importes*20)/100);
    descuentos= (importes - porcentaje);
    document.getElementById("resultado").value = descuentos;
}
