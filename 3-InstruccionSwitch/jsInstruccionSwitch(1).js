function Mostrar()
{
//tomo el mes
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
    case "Enero":
        alert("que comiences bien el año!!!.")
    break;
    case "Marzo":
        alert("a clases!!!.")
    break;
    case "Julio":
        alert("se vienen las vacaciones!!!.")
    break;
    case "Diciembre":
        alert("Felices fiestas!!!.")
    break;
    default:
    //Se utiliza cuando todas las demas funciones no se cumplieron.Siempre se coloca al final
        alert("No pasa nada")
    break;
}



}//FIN DE LA FUNCIÓN