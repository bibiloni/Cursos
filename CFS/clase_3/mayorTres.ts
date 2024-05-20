
/*•Desarrolle un algoritmo que dados tres números determine cuál es el mayor de 
los tres*/

import * as readlineSync from 'readline-sync';    

let numero1: number=readlineSync.questionInt(" escriba el primer numero ");
let numero2: number=readlineSync.questionInt(" escriba el segundo numero ");
let numero3: number=readlineSync.questionInt(" escriba el tercer numero ");

if ( numero1 > numero2 && numero1 > numero3){
    console.log (" El número mayor es el"+ numero1 );

    } else if ( numero2 > numero1 && numero2 > numero3) {
        console.log (" El número mayor es el "+ numero2 );

    } else if ( numero3 > numero1 && numero3 > numero2) {
        console.log(" El numero mayo es el "+ numero3); 
    }

