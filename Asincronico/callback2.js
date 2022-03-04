//Declarando la funcion principal
function calcularSuma(num1,num2,callback) {

    setTimeout(function(){
        let suma = num1 + num2;
        callback(suma);
    }, 5000)
}

//Llamar la funcion principal
calcularSuma(5 ,1,function(suma){
    console.log("El valor es: "+suma);
})