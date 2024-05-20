
// SE HICIERON LOS EJERCICIOS DE LA CLASE 5 
/*
function dibujarLinea():string{ // utiliso vold y no string para no retornar nada y no lleva return 
    let linea: string=" ";

    for ( let i : number =0;i<=40;i++){
        linea=linea+" - ";
    
    }
    // console.log(linea);// se escribe adentro ( de escribir adentro se debe poner abajo dibujarLinea()) o afuera como se muestra mas abajo
    return linea;
}

let valorGuardado: string =dibujarLinea() // para que me guarde lo de funcion
console.log(valorGuardado);

//dibujarLinea();
*/ 


function opcionMenu(numero1: number, numero2: number, i: number): void {
    let linea: string = " ";
    if (i == 1) {
        linea = "-";
        for (let j = 0; j <= 40; j++) {
            linea = linea + "-";
        }
        console.log(linea);
        console.log("el resultado es: ", numero1 + numero2);
        linea = "-";
        for (let j = 0; j <= 40; j++) {
            linea = linea + "-";
        }
        console.log(linea);
    }
}