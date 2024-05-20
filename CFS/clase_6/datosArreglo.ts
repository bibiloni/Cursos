

// construya un algoritmo que segun el numero de mes muestre el nombre de dicho mes. como se pued hacer?

import *as rls from'readline-sync';

let arregloMes: string[]= ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

let nroMes:number=rls.questionInt("indique el numero de mes que le interesa:");

let indice: number=nroMes-1;
console.log("el mes es", arregloMes[indice]);