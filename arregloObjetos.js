//let personas = Array(1,2,3,4,5)  orientada a objetos

let personas = [
    {nombre: "mateo", edad: 20 , ciudad: "envigado"},
    {nombre: "karina",  edad: 22, ciudad: "medellin"},
    {nombre: "claudia", edad: 21, ciudad: "rio negro"},
    {nombre: "luis", edad: 19, ciudad: "itagui"},
    {nombre: "luisa", edad: 28, ciudad: "caldas"}
]

//Array metodos

//1. filtrado

/*
let filtrado = personas.filter(persona => (persona.edad > 20))

console.log(filtrado)*/

//2. mapeo
let mapeo = personas.map(persona => (persona.nombre + " esta ingresado al cesde"));

console.log(mapeo);

//3. forEach (para cada uno)

personas.forEach(persona => (persona.edad = "Mayores de edad"));

console.log(personas);
