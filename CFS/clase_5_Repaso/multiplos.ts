
let numero: number= readlineSync.questionInt("ingrese un numero entero");
let numeroDos: number= readlineSync.questionInt( "ingrese otro numero para comprobar si es multiplo del anterior");

function esMultiplo (num:number,multiploDe:number):boolean{
    return num % multiploDe ===0;
    let calcular:boolean= num% multiploDe ===0;

}
let multiplo:boolean= esMultiplo(4,8);
//console.log(esMultiplo)