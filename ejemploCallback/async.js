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

async function secundaria(){

    try {
        await principal();
        console.log("Soy el proceso de callback");
    } catch (error) {
        console.log("Error");
    }

}

//llamo a la funcion secundaria ya que ella solo se ejecuta (ESPERA) si y solo si la principal terminal
secundaria();