// ● Se tienen dos condiciones evaluadas con una
//conjunción (condicion_a Y condición_b)
//● Conjunción → ambas tienen que ser verdaderas

import * as readlineSync from 'readline-sync'

let lucesEncendidas : boolean = true;
let litrosNafta : number = 10;

if (lucesEncendidas && litrosNafta > 0) {
console.log('Puedo manejar de noche');
}