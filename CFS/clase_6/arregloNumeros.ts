

import*as rls from'readline-sync';

let numero:number[]= new Array(7);

let indice:number=0;
numero[0]=20;
numero[1]=14;
numero[2]=8;
numero[3]=0;
numero[4]=5;
numero[5]=19;
numero[6]=24;

while(indice<7){
    console.log("el numero en la posicion "+ indice+" es "+ numero[indice]);
    indice++;
}