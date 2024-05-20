

import * as rls from 'readline-sync';

let numero_1: number = rls.questionInt("Ingrese primer numero: ");
let numero_2: number = rls.questionInt("Ingrese segundo numero: ");
let opcionMenu: number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, o cualquier otro numero para salir: ");

while (true) {
    let opcionMenu: number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, o cualquier otro numero para salir: ");
    
    if (opcionMenu === 1 || opcionMenu === 2) {
        let resultadoFuncion: number = calcularResultado(numero_1, numero_2, opcionMenu);

        dibujarGuionesN(50);
        console.log("El resultado es: " + resultadoFuncion);
        dibujarGuionesN(50);
    } else {
        console.log("Saliendo del programa.");
        break;
    }
}

function calcularResultado(numero_1: number, numero_2: number, opcionMenu: number): number {
    let resultado: number = 0;

    if (opcionMenu == 1) {
        resultado = numero_1 + numero_2;
    } else if (opcionMenu == 2) {
        resultado = numero_1 - numero_2;
    }

    return resultado;
}

function dibujarGuionesN(numeroDeGuiones: number) {
    let linea: string = "";

    for (let i = 0; i <= numeroDeGuiones; i++) {
        linea = linea + "-";
    }

    console.log(linea);
}
