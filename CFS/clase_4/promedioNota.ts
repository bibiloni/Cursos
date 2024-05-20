/*
calcular el promedio de 10 notas 
*/

/*
import * as rls from 'readline-sync';

let suma: number, nota:number, promedio:number, contador:number;
contador=1;
suma=0;

while(contador<=10){
    nota =rls.questionFloat(" Ingrese nota : ");
    suma=suma+nota;
    contador=contador+1;
}

promedio=suma/10;

console.log(" El promedio del alumno es : "+promedio);

*/

import * as rls from 'readline-sync';

let nota: number, suma: number, promedio: number, contador : number;
//let nota: number, suma: number, promedio: number ;
suma=0;
                                                                    // OTRA FORMA DE DECLARARLO
for (contador=1; contador<11; contador++) { // for (Let contador:number=1; contador<11; contador++) 
    nota = rls.questionInt("Ingrese la nota " + contador + ": ");
    suma +=nota; // o si escribo =+ tambien va contando
}

promedio = suma/10;

console.log("El promedio de las notas es: " + promedio);