
/*
• Construya un algoritmo que tenga un numeroDeseado de 
dimensión 5 y llénelo con los números que el usuario 
desee.
• Muestre los números del numeroDeseado al usuario
*/


import * as rls from 'readline-sync'; 

//let arreglo5:number=rls.questionInt(" Ingresa la dimension del arreglo: "); 
let dimensionArreglo: number[] = new Array (5);

let numero : number, conteo : number;
for (conteo= 0; conteo < 5; conteo++) {
    numero = rls.questionInt(" Ingrese el numero que desea incorporar en la posicion "+ conteo +": "); 
 dimensionArreglo[conteo] = numero; 
}
 
for (conteo= 0; conteo < 5; conteo++) {
console.log(`EI numero en la posicion ${conteo} es ${dimensionArreglo[conteo]}`); 
} 



