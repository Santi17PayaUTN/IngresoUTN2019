function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

/*switch (mesDelAño){
    case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    alert ("Este mes tiene mas de 30 dias")
    break;
    case ("Febrero"):
    alert("Este mes no tiene mas de 29 dias")
    break; 
    */
    switch (mesDelAño){
        case "Febrero":
        alert("Este mes no tiene mas de 29 dias")
        break;
        default:
        alert("No tiene mas de 30")
        break;
}
}
	
	


}//FIN DE LA FUNCIÓN