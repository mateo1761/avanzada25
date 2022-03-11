//Funcion principal 
function principal(){
    let promesa = new Promise(function (resolve,reject) {

        setTimeout(function () {

            console.log("Soy el proceso principal");
            let numero = 1;

            if(numero >= 5){
                resolve("Soy el proceso del callback (positivio)")
            }
            else{
                reject("Soy el proceso de callback (negativo)")
            }

        }, 2000)

    });

    return promesa;
}

//llamando a la funcion principal

principal()
.catch(function (respuesta) {
    console.log(respuesta);
})
.then(function (respuesta) {
    console.log(respuesta);
})
