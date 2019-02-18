function Mostrar()
{var nota= Math.floor(Math.random()*10+1); 
alert(nota)
if (nota>=9){
	alert("EXCELENTE")
}
else if(nota>=4){
	alert("APROBO")
}	
else if(nota<4){
	alert("Vamos, que la proxima se puede.")
}
}//FIN DE LA FUNCIÓN