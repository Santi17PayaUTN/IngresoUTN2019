function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
switch (mesDelAño) {
    case "Enero":
    case "Diciembre":
    case "Noviembre":
    case "Octubre":
    case "Septiembre":
    alert("Ya pasamos el frio, ahora calor!")
    break;
    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frio!")
    break;
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    alert("Falta para el invierno")
    break;
}



}//FIN DE LA FUNCIÓN