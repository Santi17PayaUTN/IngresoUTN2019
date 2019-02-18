function Mostrar()
{
//tomo la edad  
var edades; var estadoCivil;
edades= parseInt(document.getElementById("edad").value);
estadoCivil= document.getElementById("estadoCivil").value;

if(edades<=17 && estadoCivil !== "Soltero" ){
    alert("Es muy pequeño para NO ser soltero")
}
}//FIN DE LA FUNCIÓN