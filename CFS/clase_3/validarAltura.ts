//•Desarrolle un algoritmo que, de acuerdo a la
//altura de una persona, decida si puede entrar a
//un juego en un parque de diversiones
//•Para poder subirse a la montaña rusa la
//persona debe medir 1.30 mts. o más

import * as readlineSync from 'readline-sync'; 

let alturaPersona : number=readlineSync.questionFloat (" Ingrese su altura para evaluar si puede ingresar a la montaña rusa : ");

if (alturaPersona>=1.3){
    console.log ( " Usted mide " +alturaPersona+ " entonces puede subir a la montaña rusa ");
} else {
    console.log ( " Usted mide " + alturaPersona+ " entonces NO puede subir a la montaña rusa por medir menos de 1.30 ");
}