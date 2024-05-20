
//• Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla a entregar.
//• Tenga en cuenta que para el primer puesto se
//entrega medalla de oro, segundo puesto medalla
//de plata y tercer puesto medalla de bronce. En
//caso que quede en otra posición se entrega
//certificado de participación 

import * as readlineSync from 'readline-sync';

let posicionLlegada : number = readlineSync.questionInt("Ingrese la posicion de llegada del competidor: ");

switch (posicionLlegada) {

case 1:
    console.log("Entregar medalla de oro");
        break;

case 2:
    console.log("Entregar medalla de plata");
        break;

case 3:
    console.log("Entregar medalla de bronce");
        break;

default:

        console.log("Entregar mención de participación");

}