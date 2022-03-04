
/*function registrarUsuario(nombre,edad,password,callback) {
    //Vamos a programar lo que hace la funcion principal

    setTimeout(function(){

        let usuario = {
            nombre : nombre,
            edad : edad,
            password : password
        }
        callback(usuario)
    }, 3000)
}

//Llamando la funcion principal
registrarUsuario("mateo",20,"admin123",function(usuario){
   
    if (usuario.edad > 18) {
        console.log("Bienvenido");
    }
    else{
        console.log("No tienes permiso")
    }
    
})*/

//Declarando la funcion principal
/*
function construirArreglo(num1,num2,num3,num4,num5,callback) {
    setTimeout(function(){
        let numeros = [
            num1,
            num2,
            num3,
            num4,
            num5
        ];
        callback(numeros);
    }, 5000)
}

construirArreglo(5,6,7,8,1,function (recorrido) {
    let suma = 0;
    recorrido.forEach(function (numero) {
        suma += numero;
    });

    console.log("La suma es: "+suma);
})*/

function registrarPersonas(personas,callback) {
    setTimeout(function(){
        let solteros = personas.filter(function (persona) {
            return(persona.estadoCivil == false);
        })

        callback(solteros);
    }, 3000)
}

//Llamando funcion principal

let personasCesde = [
    {
        nombre : "daniela",
        salario : 120000,
        estadoCivil : true
    },

    {
        nombre : "juan",
        salario : 120000,
        estadoCivil : true
    },

    {
        nombre : "mateo",
        salario : 380000,
        estadoCivil : false
    }
]

registrarPersonas(personasCesde,function(solteros){
    let suma = 0;

    solteros.forEach(function (soltero) {
        suma += soltero.salario;
    });

    console.log(solteros);
    console.log("La suma de los salario es de: "+suma);
})