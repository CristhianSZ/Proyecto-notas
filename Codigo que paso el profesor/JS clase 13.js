/*Ejercicio 1 - clase 11

var sigla = null;//var operacion =null

function IngresarSigla(){
    do{
        sigla = prompt('Ingrese las siglas de su curso:')
        sigla = sigla.toLocaleUpperCase();
    }while(!(sigla == 'IP' || sigla == 'PDM'))

}

function MostrarCurso(){
    if(sigla == null){
        console.info('No hay siglas ingresadas')
    }else{
        if(sigla == 'IP'){
            console.info('Cursa Introducción a la programación')
        }else{
            console.info('Cursa Programación de Dispositivos Móviles')
        }
    }

}
*/

/*Ejercicio 2 - clase 11

var num = null;

function IngresarNumero(){
    do{
        num = parseInt(prompt('Ingresar un numero:'))
    }while(isNaN(num))
}

function MostrarParidad(){
    
    if(num == null){
        console.info('No hay un numero ingresado')
    }else{
        if(num == 0){
            console.info('El numero ingresado es 0')
        }else{
            if(num % 2 == 0){
                console.info('El numero ingresado es par')
            }else{
                console.info('El numero ingresado es impar')
            }
        }
    }    
}
*/

//EJERCICIO 1 - CLASE 13

//var precio, impuesto;

function Calcular(precio, impuesto = 21){
    //precio = parseInt(prompt('Ingrese el precio: '))
    //impuesto = parseInt(prompt('Ingrese el %: '))
    //var precio = 100;
    //var impuesto = 21;

    if(isNaN(precio)){
        //console.info('No ingresó un valor válido para el precio')
        return 'No ingresó un valor válido para el precio';
    }else{
        if(isNaN(impuesto)){
            //console.info('No ingresó un valor válido para el impuesto')
            impuesto = 21;
            console.warn('No ingresó un valor válido para el impuesto');
        }else{
            impuesto = impuesto >=0 && impuesto <=100 ? impuesto : 21;
        }
    
        var iva = precio * impuesto / 100;
        var total = precio + iva;
    
        //console.info(`Precio: $${precio} – IVA: ${iva}% – Total: $${total}`)
        return `Precio: $${precio} – IVA: ${iva}% – Total: $${total}`;
    }
    
}