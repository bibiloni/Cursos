/*
• Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es
par o impar
• En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero)
*/

import*as rls from'readline-sync';

let numeroUsuario:number=rls.questionInt("Ingrese un numero entero por favor: ");

while(numeroUsuario===0){
    console.log( " INGRESE UN NUMERO MAYOR QUE CERO ");
    numeroUsuario=rls.questionInt("Ingrese un numero entero por favor: ");
}

if (numeroUsuario!==0){
    if (numeroUsuario%2===0){
        console.log( `el numero ingresado ${numeroUsuario} es PAR`);
    
    } else {
        console.log( `el numero ingresado ${numeroUsuario} es IMPAR`);
    
    }
}
/*
if (numeroUsuario===0){
    console.log( " INGRESE UN NUMERO MAYOR QUE CERO ");

} else if (numeroUsuario%2===0){
    console.log( `el numero ingresado ${numeroUsuario} es PAR`);

} else if ( numeroUsuario%2===1){
    console.log( `el numero ingresado ${numeroUsuario} es IMPAR`);

}
*/