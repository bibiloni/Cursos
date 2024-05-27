/*
• Escriba un programa que pida al usuario dos números 
enteros, y luego retorne la suma de todos los números 
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado  2 + 3 + 4 + 5 + 6 + 7 = 27
*/

import*as rls from 'readline-sync';
let numero_1:number=rls.questionInt(" Ingrese el primer numero entero: ");
let numero_2:number=rls.questionInt(" Ingrese el segundo numero entero: ");
/*
let sumar:number,contador:number,total:number,numeroMayor:number,numeroMenor:number;

if(numero_1>numero_2){
    numeroMayor=numero_1;
    numeroMenor=numero_2;
}else{                                            //                ( IF )   MAX - MIN 
    numeroMayor=numero_2;
    numeroMenor=numero_1;
}
*/
//let sumar:number,contador:number,total:number;
let numeroMayor=Math.max(numero_1,numero_2);      //                         MAX - MIN 
let numeroMenor=Math.min(numero_1,numero_2);

let total:number=0;
for (let i=numeroMenor;i<=numeroMayor;i++){       //                           FOR
    total+=i;
}
/*
contador=numeroMayor-1;
sumar=numeroMenor+numeroMayor;
while(contador>numeroMenor){                      //                  WHILE
    sumar=sumar+contador;
    contador=contador-1;
}
total=sumar;
*/
console.log(" La sumatoria de todos los numeros entre "+numeroMenor+" y "+numeroMayor+" es: "+total);
