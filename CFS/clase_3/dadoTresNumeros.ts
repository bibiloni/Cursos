
//Dados tres números, ingresados por el usuario, el algoritmo se fija
//si el primer número es negativo en cuyo caso muestra el producto
//de los tres números, sino muestra la suma de estos.

import * as rls from 'readline-sync';

let no1 : number = rls.questionInt("Ingrese el primer número: ");
let no2 : number = rls.questionInt("Ingrese el segundo número: ");
let no3 : number = rls.questionInt("Ingrese el tercer número: ");
let result : number = 0;
if (no1 < 0) {
result = no1*no2*no3;
} else {
result = no1+no2+no3;
}
console.log(result);