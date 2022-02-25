//Funcion tradicional
/*
function recto(codigo){
    let nombre = codigo.split(":")
    return (`El nombre es: ${nombre[1]}`)
}

console.log(recto("ARQ2556: nodin chavdri"))*/

//Funcion flecha

let recto=(codigo)=>{
    let nombre = codigo.split(":")
    return (`El nombre es: ${nombre[1]}`)
}

console.log(recto("ARQ2556: mateo"))