/*
• Llenar un array de 10 posiciones con números
aleatorios entre 0 y 99
• Para obtener números aleatorios crear una funcion
Azar, que se base en las funciones disponibles en el
paquete Math:
-Math.random() devuelve un nro al azar entre 0 y 1.
*/

let arregloCompleto:number[]= new Array(10);

let contador:number;
for(contador=1;contador<11;contador++){
    arregloCompleto[contador]=Azar(100);
}

for (contador=1;contador<11;contador++){
    console.log(`El numero en la posicion ${contador} es: ${arregloCompleto[contador]}`);
}

function Azar (tope:number):number{
    return Math.floor(Math.random()*tope);
}