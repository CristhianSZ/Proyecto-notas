 /*function Sumar (sumando1, sumando2){
    var suma = sumando1 + sumando2
    return suma;
 }
 function Dividir(dividendo, divisor){
    var cociente =dividendo/divisor;
    return cociente;
 }
 function PromediarEntre2(num1 = 0, num2 = 0){
    var suma = Sumar(num1, num2)
    var promedio = Dividir ( suma , 2)
    return 'El promedio es:' + promedio;
 }

 var n1 = parseInt(prompt('Ingrese el primer valor'));
 var n2 = parseInt(prompt('Ingrese el segundo valor'));

 document.write(PromediarEntre2(n1,n2));*/

/*
var sigla;
 function MostrarDias(){
    do{
        var sigla = prompt('Ingrese la sigla del curso:')
        sigla = sigla.toLowerCase()
    }while(!(sigla=='ip' || sigla=='pdm'))
    console.log(ObtenerDias(sigla))
 }
function ObtenerDias(s){
    var dias
    switch(s){
        case 'ip':
            dias = "martes y jueves"
        break
        case 'pdm':
            dias = "jueves y viernes"
        break
    }
    return dias
}*/
var num1,num2,operacion=null;
function ObtenerNumero1(){
    do{
        var num1 = parseInt(prompt('Ingrese el primer numero:'))
    }while(isNaN(num1))
}

function ObtenerNumero2(){
    do{
        var num2 = parseInt(prompt('Ingrese el primer numero:'))
    }while(isNaN(num2))
}

function Sumar(sumando1, sumando2){
    operacion='+'
    var suma = sumando1 + sumando2
    return suma
}

function Restar(minuendo, sustraendo){
    operacion='-'
    var diferencia =minuendo - sustraendo
    return diferencia
}

function Dividir(dividendo, divisor){
    operacion='/'
    var cociente =dividendo/divisor;
    return cociente;
 }

 function Multiplicar(factor1, factor2){
    operacion='*'
    var multiplicacion = factor1 * factor2
    return multiplicacion
 }

 function Mostrar(operacion){

    switch(operacion){
        case '+':
            alert (Sumar(num1,num2))
        break
        case '-':
            alert(Restar(num1,num2))
        break
        case '*':
            alert(Multiplicar(num1,num2))
        break
        case '/':
            alert(Dividir(num1,num2))
        break
    }


 }
 var num1, num2, r="";
 function ObtenerNumero1(){
    do{
        num1 = parseInt(prompt("Ingrese el primer numero:"))
    }while()
 }