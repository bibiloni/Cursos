/*
• Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo
*/

import*as rls from 'readline-sync';

let numero:number=rls.questionInt(" Ingrese un numero: ");

let cargar:number=numero;
let cargarNumero:number[]=[0];

while( cargar !==0 ){
    cargarNumero.push(cargar);
    cargar=rls.questionInt(" ingrese un numero: ");
    
}

if(cargarNumero.length>0){
    console.log(" Los numeros cargadon son: "+cargarNumero.join(', '));
    let maximo=Math.max(...cargarNumero);
    let minimo=Math.min(...cargarNumero);
    console.log(" El maximo entre los numero ingresado es el: "+ maximo+" y el minimo es el: "+minimo);
}else{
    console.log(" Se ingreso como primer numero el 0 ");
}
