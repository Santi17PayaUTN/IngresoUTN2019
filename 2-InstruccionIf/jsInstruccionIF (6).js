function Mostrar()
{
//tomo la edad  
var edades;
edades= parseInt(document.getElementById("edad").value);
if(edades>17){
    alert("Sos mayor de edad")
}
else if(edades>=13&&edades<=17){
    alert("Sos adolescente")
}
else if(edades<13){
    alert("Sos un niño")
}


}//FIN DE LA FUNCIÓN
