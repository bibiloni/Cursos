
/*• Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguientetabla:

        Sueldo Actual                   Sueldo con Aumento
        0 - 15.000 $                             20%
        15.001 - 20.000 $                        10%
        20.001 - 25.000 $                        5%
        Más de 25.000 $                     No hay aumento

• Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y se lo muestre*/

import * as readlineSync from 'readline-sync';    

let sueldoIngresado=readlineSync.questionFloat (" INGRESE SU SUELDO : "); 
let aumento20 : number=sueldoIngresado*0.2+sueldoIngresado;
let aumento10 : number=sueldoIngresado*0.1+sueldoIngresado;
let aumento5 : number=sueldoIngresado*0.05+sueldoIngresado;

if (0 < sueldoIngresado && sueldoIngresado <= 15000){
        console.log (" El aumento de sueldo es del 20% así que tendra un incremento de " + sueldoIngresado*0.2 + " pesos y el total de su sueldo sera de " +aumento20+ " pesos " ); 

} else if ( 15000 < sueldoIngresado && sueldoIngresado <= 20000){
        console.log("El aumento de sueldo es del 10% así que tendra un aumento de "+ sueldoIngresado*0.1+ " pesos y el total de su sueldo es de "+aumento10+ " pesos ");

}else if (20000 < sueldoIngresado && sueldoIngresado <= 25000){
        console.log (" El aumento de sueldo es del 5% así que tendra un incremento de "+sueldoIngresado*0.05+ " pesos y el total de su sueldo es de " +aumento5+ " pesos ");

} else if (25000 < sueldoIngresado){
        console.log(" NO RECIBE AUMENTO así que su sueldo es de "+sueldoIngresado+" pesos ");

} else
        console.log( " Ha ingresado un número negativo o cero  ")        