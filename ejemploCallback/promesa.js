function principal(){
    let promesa = new Promise(function (resolve,reject) {

        setTimeout(function () {

            console.log("Soy el proceso principal");
            let numero = 10;

            if(numero >= 5){
                resolve("termine (positivo)")
            }
            else{
                reject("termine (negativo)")
            }

        }, 2000)

    });

    return promesa;
}

principal()
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})