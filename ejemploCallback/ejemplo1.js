//Declarando la funcion principal

function filtrarDatos(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,buscarPlanos){
    setTimeout(function(){

        let planos = [
            num1 , num2 , num3 , num4 , num5 , num6 , num7 , num8 , num9 , num10
        ]

        let planosFiltrados = planos.filter(function(plano){
            return plano <= 10;
        })
        buscarPlanos(planosFiltrados)
    }, 10000)
}

//Llamando a la funcion principal
filtrarDatos(100,20,15,16,40,10,5,1,13,22, function (planos) {
    if(planos.length > 0){
        console.log("Puede arrancar en la nave");
    }
    else{
        console.log("Tiene que buscar los planos")
    }
});