/*
• Construya un algoritmo que tenga dos arreglos
uno que almacene 2 nombres y otro que
almacene 3 números ambos ingresados por el
usuario. 
• Al final debe imprimir los valores por consola.
*/

import*as rls from'readline-sync';

let arregloNombre:string[]= new Array(2);
let arregloNumero:number[]=new Array(3);

let conteo:number;
for (conteo=0;conteo<2;conteo++){
    arregloNombre[conteo]=rls.question(` Ingrese el nombre deseado en la posicion ${conteo}: `);
}

for (conteo=0;conteo<3;conteo++){
    arregloNumero[conteo]=rls.questionInt(`Ingrese el numero deseado en la posicion ${conteo}: `);
}

for (conteo=0;conteo<2;conteo++){
    console.log(`El nombre en la posicion ${conteo} es ${arregloNombre[conteo]}`);
}

for (conteo=0;conteo<3;conteo++){
    console.log(`El numero en el posicion ${conteo} es ${arregloNumero[conteo]}`);
}