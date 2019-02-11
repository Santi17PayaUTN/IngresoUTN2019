/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{   var dividendos; var divisores;

    dividendos= parseInt(document.getElementById("numeroDividendo").value);
    divisores= parseInt(document.getElementById("numeroDivisor").value);
    
    alert(dividendos % divisores);
}
