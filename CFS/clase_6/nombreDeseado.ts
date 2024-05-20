
/*
 Construya un algoritmo que tenga un arreglo
de dimensión deseada por el usuario y llénelo
con los nombres que el usuario desee
• Crear un arreglo de las posiciones que desee
el usuario y llenarlo con nombres de personas
*/

import*as rls from'readline-sync';

let dimensionArreglo:number=rls.questionInt( " Ingrese el numero total de la dimensionArreglo deseada: ");
let dimensionLista:string[]= new Array(dimensionArreglo);
/*let conteo:number;
for (conteo=0;conteo<dimensionArreglo;conteo++){
    nombreLista[conteo]=rls.question(` Ingrese el nombre deseado en la posicion ${conteo}: `);
}*/
let nombre: string, conteo:number;
for (conteo=0; conteo<dimensionArreglo; conteo++){
    nombre=rls.question(` Ingrese el nombre deseado en la posicion ${conteo}: `)
    dimensionLista[conteo] = nombre;
}
for(conteo=0;conteo<dimensionArreglo;conteo++){
    console.log(`la persona ingresada en la posicion ${conteo} es ${dimensionLista[conteo]}`);
}