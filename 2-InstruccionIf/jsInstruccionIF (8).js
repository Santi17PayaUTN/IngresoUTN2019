function Mostrar()
{var edades; var estadoCivil;
    edades= parseInt(document.getElementById("edad").value);
    estadoCivil= document.getElementById("estadoCivil").value;
if(edades<18 && estadoCivil != "Soltero"){

}
else if (estadoCivil=="Soltero"&& edades>=18){
    alert("Es soltero y no es menor.")
}
	


}//FIN DE LA FUNCIÓN