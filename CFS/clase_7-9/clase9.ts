

let cadena:string='juan perez';

let inicialNombre:string=cadena[0];
let inicialApellido:string=cadena[5];

console.log("posicion 0 "+ inicialNombre);
console.log("posicion 5 "+ inicialApellido);

//posicion de cadena comoo metodos
//---------------------------------------"metodo=function" por ahora pero no es lo mismo 
//.length 

let arreglo:string[]=["a","b","c"];
console.log(arreglo.length);
//--------------------------------------
//lindexOF(textoBuscado)
let texto:string="tengo que hacer mucho ejer";
console.log(texto.indexOf("hacer"));
console.log(texto.indexOf("hacer",20));//tira error
//--------------------------------------
//lastIndexOf(textoBuscado)
let texto2:string="tengo que hacer y hacer y hacer mucho ejer";
console.log(texto2.lastIndexOf('hacer'));
//--------------------------------------
//substring(inicio,final)
console.log(texto2.substring(10,15));//cuenta 6 lugares
//--------------------------------------------
//substr(iniciio, largo)
console.log(texto2.substr(10,21));//cuenta 22 lugares o 21 contar !!
//--------------------------------------------
//toLowerCase & toUpperCase
let textoCombinado:string="AaAaAa";
console.log(textoCombinado.toLocaleLowerCase());//minuscula
console.log(textoCombinado.toUpperCase());//mayuscula
console.log(textoCombinado[2].toUpperCase());//mayuscula solo me mostrara la letra en la posicion que le diga 
//-------------------------------------------
//toString()
    let numero: number=234;
    console.log(numero.toString());
    let numeroString: string="2,3,4";

    console.log(parseInt(numeroString));
    console.log(typeof parseInt(numeroString));
    console.log(typeof numeroString);

    let numDecimalString:string="3.20";





    //split(a)

    let arrayDeNumeros:string[]=numeroString.split(",")//sin espacio hace espacio mediante comas al numero todo junto y espacio . con la coma (",") y tambien en los numero hace solo espacio .... genera el espacio como lo donde quiero que lo haga 
    console.log(arrayDeNumeros);
