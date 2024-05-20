
/*Implemente un método llamado calcularResultado que
reciba por parámetros los dos números y la opción y
retorne el resultado de la operación
*/


import*as rls from 'readline-sync';

let i : number, linea:string; // al estar mas opaca no se usa asi que BORRARLA 
let numero_1 : number= rls.questionInt(" ingrese primer numero : ");
let numero_2 : number= rls.questionInt(" ingrese segundo numero : ");
let opcionMenu : number = rls.questionInt(" ingrese 1 para sumar, 2 para restar, cualquier tecla para salir : ");
let resultadoFuncion:number=0;// de esta manera gurdamos calcularResultado sino la guardo no queda en ningul lado 



function calcularResultado ( numero_1:number, numero_2:number, opcionMenu:number):number{
    let resultado:number=0;
    if(opcionMenu ==1){
        resultado= numero_1+numero_2;
    } else if (opcionMenu ==2){
        resultado=numero_1-numero_2;
    }  
    
return resultado; // siempre va al final de cada funcion aunque puede estar en cualquier lado recordar que va a finalizar la funcion 
}

function dibujarGuionesN(numeroDeGuiones: number) {
    let i:number;
    let linea:string=""; //puedo declararla aca adentro o afuera
    for (i=0;i<= numeroDeGuiones ;i++){
        linea=linea+"-";
    }
    
        console.log(linea);
}

resultadoFuncion=calcularResultado (numero_1, numero_2, opcionMenu);//respetar el orden de los argumentos con respecto a function..
dibujarGuionesN (50);
console.log(" el resultado es : "+resultadoFuncion);
dibujarGuionesN (50);

