/*
let nom1 = "mateo";
let nom2 = "Katalina";

console.log("Buenos dias jefe: "+nom1)
console.log("Buenos dias jefa: "+nom2)
console.log(`Buenos dias ${nom1}`)
console.log(`Hola jefa ${nom2}`)*/

//Funcion tradicional
/*
function calcularDistancia(x1,y1,x2,y2){

    //restar x

    let restaX = x2 - x1;

    //restar y

    let restaY = y2 - y1;

    //Elevar al cuadrado la resta de x 

    let cuadradoX = Math.pow(restaX , 2);
    //Elevar al cuadrado la resta de y

    let cuadradoY = Math.pow(restaY , 2);
    
    //Sumar

    let suma = cuadradoX + cuadradoY;

    //Raiz

    let resultado = Math.sqrt( Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

    return resultado;

}*/

/*let final = calcularDistancia(0,0, -10, -10);
console.log("La distancia es: "+final.toFixed(2));*/

let calcularDistancia = (x1,x2,y1,y2) => Math.sqrt( Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

let final = calcularDistancia(0,0, -10, -10);
console.log(`La distancia es: ${final.toFixed(2)}`);