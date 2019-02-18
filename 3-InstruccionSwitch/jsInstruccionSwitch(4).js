function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;
 switch(mesDelAnio){
     case "Abril":
     case "junio":
     case "Septiembre":
     case "Noviembre":
     alert("Tiene 30 dias")
     break;
     case "Febrero":
     alert("Tiene 28 dias")
     break;
     default:
     alert("Tiene 31 dias")
     break;
 }
	
	



}//FIN DE LA FUNCIÓN