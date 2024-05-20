/*
• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero
*/

import*as rls from 'readline-sync';

let cantidad:number=rls.questionInt( " Ingrese la cantidad de numeros que tendra el arreglo: ");
let arreglo:number[]= new Array (cantidad);

let inicio:number;
    for(inicio=0; inicio<cantidad; inicio++){
        arreglo[inicio]= rls.questionInt(`ingrese arreglo[${inicio}]:`);
    }

let completo:string="";

    for(inicio=cantidad-1; inicio>=0; inicio--){
        if(inicio=== cantidad-1){
            completo=completo + arreglo[inicio]+"";
        } else {
            completo=completo + ", "+arreglo[inicio];
        }
    }

    console.log("["+completo+"]");