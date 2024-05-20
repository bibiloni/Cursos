//•En una prueba, un piloto tiene que completar 4
//vueltas
//•Se necesita un programa que permita ingresar
//por teclado el tiempo de cada vuelta
//•El programa debe retornar el tiempo total y el
//promedio de vuelta 

import * as readlineSync from 'readline-sync';

let vuelta1 = readlineSync.questionFloat("Ingrese el tiempo realizado en la primer vuelta");
let vuelta2 = readlineSync.questionFloat("Ingrese el tiempo realizado en la segunda vuelta");
let vuelta3 = readlineSync.questionFloat("Ingrese el tiempo realizado en la tercer vuelta");
let vuenta4 = readlineSync.questionFloat("Ingrese el tiempo realizado en la cuarta vuelta");

let tiempoTotal : number= vuelta1+vuelta2+vuelta3+vuenta4 ;
let promedio : number= tiempoTotal/4;

console.log(" El tiempo total realizo es de "+ tiempoTotal + " minutos " );
console.log(" El promedio de dar una vuelta es de " + promedio + " minutos ");