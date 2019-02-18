/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () { 
    { var lamparaPrecio; var lamparaCantidad; var lamparaMarca; var descuento; var precioFinal; var iIBB;
        lamparaCantidad= parseInt(document.getElementById("Cantidad").value);
        lamparaMarca= document.getElementById("Marca").value;
        lamparaPrecio= 35*lamparaCantidad;
        iIBB= 0;
    if(lamparaCantidad>=6){
        descuento=lamparaPrecio*0.5
        precioFinal=lamparaPrecio-descuento;
    }
    else if (lamparaCantidad==5){
        if(lamparaMarca == "ArgentinaLuz"){
            descuento=lamparaPrecio*0.4
            precioFinal=lamparaPrecio-descuento
    }
        else{
            descuento=lamparaPrecio*0.3
            precioFinal=lamparaPrecio-descuento;
        }
    }
    else if (lamparaCantidad==4){
        if (lamparaMarca=="ArgentinaLuz"|| lamparaMarca=="FelipeLamparas"){
            descuento=lamparaPrecio*0.25
            precioFinal=lamparaPrecio-descuento
        }
        else{
            descuento=lamparaPrecio*0.2
            precioFinal=lamparaPrecio-descuento;
        }
    }
    else if (lamparaCantidad==3){
        if (lamparaMarca=="ArgentinaLuz"){
            descuento=lamparaPrecio*0.15
            precioFinal=lamparaPrecio-descuento
        }
        else if(lamparaMarca=="FelipeLamparas"){
            descuento=lamparaPrecio*0.1
            precioFinal=lamparaPrecio-descuento
        }
        else{
            descuento=lamparaPrecio*0.05
            precioFinal=lamparaPrecio-descuento;
        }
    }
    if(precioFinal>121){
        iIBB=precioFinal*0.1
        precioFinal=precioFinal+iIBB
        alert("Usted pago $"+iIBB+" de IIBB");
    }
    document.getElementById("precioDescuento").value= "$"+ precioFinal.toFixed(2);
    }
 	
}
