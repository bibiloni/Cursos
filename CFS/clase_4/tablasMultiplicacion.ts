/*
• Diseñar un algoritmo que muestre por pantalla la tabla de 
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor
*/

import*as rls from'readline-sync';

let numero_1:number=rls.questionInt(" Ingrese el numero de la tabla del: ");
let numero_2:number=rls.questionInt(" Hasta que numero desea que muestre? ");

for (let i=1; i<=numero_2; i++ ){
    console.log(numero_1+" X "+i+" = "+ numero_1*i);
}