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

let resta:number,contador:number,ingreseClave:string;

for ( contador=1;contador<=3;contador++){
    ingreseClave =rls.question (" Ingrese la clave ");
    resta=3-contador;
        if (ingreseClave==='eureka'){
            console.log("Bienvenido");
                break;

        }else if(contador===3){
            console.log(" Has agotado todas las oportunidades ");

        }else {
            console.log("Cleve erronea le quedan "+resta+ " intento");   
        }
}  

