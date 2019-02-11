/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{var importes; var descuentos; var porcentaje;
    importes= parseFloat(document.getElementById("importe").value);
    porcentaje= ((importes*25)/100);
    descuentos= (importes - porcentaje);
    document.getElementById("resultado").value = descuentos;
    //Se utiliza parseFloat porque es dinero, en el cual el valor puede tener comas.
}
