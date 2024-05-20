

import*as rls from 'readline-sync';
let tamanioArreglo:number=3;
//let pregunta=rls.question("ingrese un valor");


let arregloA:number[]=new Array(tamanioArreglo);
arregloA=[1,2,3,4,5,6];
//console.log(arregloA.length);

let arregloB:number[]=[7,8,9,10,11,12];//otra forma de escribir el vector

let arregloSuma:number[]= new Array(tamanioArreglo);

// arregloSuma=[0,0,0,0,0,0]; de esta manera nos aseguramos que inicialice desde ceero y no nos tire error (agregar esto tambien)
/*[1,2,3,4,5,6];
[7,8,9,10,11,12];
[8,10,12,14,16,18];*/
let suma:number=0;

//suma=arregloA[0]+arregloB[0]; posible forma si quiero sumar sin usar for
//console.log("la suma es:"+suma);
//arregloA[0]=rls.questionInt("ingrese un valor"); de esta manera tenemos que pedir para cada posicion

for (let i=0;i<arregloA.length;i++){// < 100 quiere decir que carge 100 numeros
    arregloA[i]=rls.questionInt("ingrese un valor");
}
for (let i=0;i<arregloB.length;i++){// < 100 quiere decir que carge 100 numeros
    arregloB[i]=rls.questionInt("ingrese un valor");
}



for (let i=0;i<arregloA.length;i++){// puedo utilizar el vector B
        arregloSuma[i]=arregloA[i]+arregloB[i];
}


//console.log(arregloSuma);// para comprobar si esta bien lo que estamos haciendo pero no hacerlo segun el profe unar para mostrar un for 

for (let i=0;i<arregloA.length;i++){// con .length cuenta la cantidad de numeros dentro del arreglo
    console.log(arregloSuma[i]);
}


/*
pos0=arregloA[0]+arregloB[0];
pos1=arregloA[1]+arregloB[1];
.
.
.
pos5=arregloA[5]+arregloB[5];*/