/*
• Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es
la palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa
*/

/* 
pedir al usuario " Ingrese la clave "
mientras analiza la clave y de ser incorrecta pregunta nuevamente y si es correcta fin
si llega a 3 intentos imprime " Has agotado todas las oportunidades "

*/

import * as rls from 'readline-sync';

let suma:number, contador:number, ingreseClave =rls.question (" Ingrese la clave ");
contador=1
suma=0

while ( contador<=3 && ingreseClave=='eureka' ){ 

    console.log( " Ingrese la clave : ");
    contador++
}
 +++++  