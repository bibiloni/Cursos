/*
• Construya un algoritmo que sume todos los
elementos de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el 
usuario
• Los elementos (números) del arreglo son
ingresados por el usuario
*/

import*as rls from'readline-sync';

let dimensionArreglo:number= rls.questionInt( " Ingrese la dimension del arreglo a trabajar: ");
let arreglo:number[]=new Array(dimensionArreglo);

let conteo:number,resultado:number=0;
for (conteo=0;conteo<dimensionArreglo;conteo++){
    arreglo[conteo]=rls.questionInt(`Indique el numero que va en la posicion ${conteo}: `);
    resultado=+arreglo[conteo];
}

for (conteo=0;conteo<dimensionArreglo;conteo++){
    console.log(`El numero en la posicion ${conteo} es: ${arreglo[conteo]}`);
}

console.log(`La suma del arreglo es: ${resultado}`);
