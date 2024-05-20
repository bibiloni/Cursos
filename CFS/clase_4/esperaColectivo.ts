/*
o Cuando llegamos a la parada,
miramos si el colectivo arribó a
la parada
o Siempre tenemos que esperar
antes de que llegue
*/


import * as rls from 'readline-sync';

let llegadaColectivo : string;

    llegadaColectivo = rls.question("Llegó el colectivo? (si/no): ");

while (llegadaColectivo=="no") {
    console.log("Esperando el colectivo");
    llegadaColectivo = rls.question("Llegó el colectivo? (si/no): ");
}

console.log("Llegó el colectivo");