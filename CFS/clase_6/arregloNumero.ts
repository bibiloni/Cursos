/*
• Construya un algoritmo que tenga un arreglo
de números y se los muestre al usuario
• El arreglo debe ser llamado numero 
• El arreglo numero debe contener los siguientes
datos: 20, 14, 8, 0, 5, 19 y 24.
• Mostrar los valores resultantes del arreglo
*/

import*as rls from'readline-sync';

let numero:number[]=[20, 14, 8, 0, 5, 19, 24];

console.log("["+numero.join(", ")+"]");//.join() es para unir los elementos en una sola linea 
