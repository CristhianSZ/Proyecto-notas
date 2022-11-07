/** 1. Hacer un programa que solicite el ingreso de un número y que luego emita un
cartel por pantalla aclarando si el mismo es múltiplo de 5.
*/
/*
var n =parseInt(prompt("Ingrese un numero:"));
var r = "";
if(n%5==0){
    r+="El numero ingresado es multiplo de 5"
}else{
    r+="El numero ingresado no es multiplo de 5"
}
document.write(r)
/**
 2. Hacer un programa que solicite el ingreso de dos números y luego calcular:
a. La resta si el primero es mayor que el segundo.
b. La suma si son iguales.
c. El producto si el primero es menor.
Se deberá emitir un cartel por pantalla con el resultado correspondiente.
 */
/*
var n1=parseInt(prompt("Ingrese un primer numero n1: "));
var n2=parseInt(prompt("Ingrese un primer numero n2: ")),resp,r=" ";

if(n1>n2){
    resp=n1-n2;
    r+=`${n1} es mayor que ${n2} por ello`
}else if(n1==n2){
    resp=n1+n2;
    r+=`${n1} es igual que ${n2} por ello`
}else if(n1<n2){
    r+=`${n1} es menor que ${n2} por ello`
    resp=n1*n2
}
document.write(`${r} <br>`)
document.write(`El resultado de la operacion es ${resp} <br>`)*/

/**3. Hacer un programa para ingresar dos números. Si el segundo es distinto de
cero, calcular la división del primero por el segundo y mostrar el resultado por
pantalla; caso contrario, emitir un cartel aclarando que no se puede dividir por
cero. */

/*
var n1=parseInt(prompt("Ingrese un primer numero n1: "));
var n2=parseInt(prompt("Ingrese un primer numero n2: ")),resp,r=" ";

if(n2!=0){
    resp=n1/n2
    r+=`El resultado de la operacion es ${resp}`
}else{
    r+="No se puede dividir por cero"
}
document.write(r)*/


/** 4. Un importante negocio de desinfectante líquido realiza descuentos
dependiendo de la cantidad de litros vendidos según la siguiente escala:
a. Si vende menos de 100 litros, no hay descuento.
b. Si vende entre 101 y 300 litros, el descuento es del 10%.
c. Si vende entre 301 y 500 litros, el descuento es del 15%.
d. Finalmente, si la venta es de más de 500 litros, el descuento es del 25%.
Hacer un programa que solicite el ingreso del de importe total la venta y la
cantidad de litros vendidos y calcule y emita el importe con el descuento
aplicado. */
 /*
var litros=parseInt(prompt("Cantidad de litros vendidos?:"));
var importe=parseInt(prompt("El importe por la cantidad de litros es?:")),impDes,r=" ";

if(litros<=100){
    r+="No hay descuento por la compra de esta cantidad de litros, el importe es " + importe  + " pesos"
}else if(litros>101 && litros<300){
    impDes=importe-importe* 10/100
    r+="Se vendio una cantidad entre 101 y 300 litros, hay 10% de descuento, importe con descuento: " + impDes + " pesos"  
}else if(litros>301 && litros<500){
    impDes=importe-importe*15/100
    r+="Se vendio una cantidad entre 301 y 500 litros, hay 15% de descuento, importe con descuento es: " + impDes + " pesos" 
}else if(litros>500){
    impDes=importe-importe*25/100
    r+="Se vendio una cantidad mayor a 500 litros, hay 25% de descuento, importe con descuento es: " + impDes + " pesos" 
}
document.write(r)*/
/**5. Hacer un programa que solicite el ingreso de las notas del primer parcial y del
segundo parcial de una alumna de programación. El programa deberá analizar
las notas y emitir la situación de la alumna según la siguiente escala:
a. Si tiene 8 o más en ambos parciales, emitir “aprobación directa”.
b. Si no tiene 8 o más en ambos pero tiene aprobados ambos parciales (se
aprueba con 6 o más), emitir “rinde examen final”.
c. Si tiene menos de 6 en alguno de los dos parciales, emitir “debe
recuperar”.
El programa debe emitir solo un cartel, el que corresponda. */
/*
var nota1=parseInt(prompt("Ingrese nota del primer parcial:"))
var nota2=parseInt(prompt("Ingrese nota del primer parcial:")),r=" ";

if(nota1>=8 && nota2>=8){
    r+="Aprobacion directa"
}else if(nota1>=6 && nota2>=6){
    r+="Rinde examen final"
}else{
    r+="Debe recuperar"
}
document.write(r)*/




/**8. El negocio de desinfectante antes mencionado vende además detergente
suelto, y los precios se aplican según la siguiente escala:
a. 25 ARS por litro los primeros 50 litros.
b. 20 ARS por litro si la venta es de 51 a 200 litros.
c. 15 ARS por litro si la venta es de 201 a 500 litros.
d. 10 ARS por litro si la venta es de más de 500 litros.
Además, si paga en efectivo, tiene un adicional del 10% sobre el importe final.
Hacer un programa que solicite la cantidad de litros vendidos y el tipo de pago
(ingresará 1 si paga en efectivo y 0 con cualquier otro medio de pago) y calcule
y emita por pantalla el monto final a abonar por el cliente. */
/*
var litros=parseInt(prompt("Cantidad de litros vendidos?:"));
var impDes,r=" ",impporL;
var medioPago=parseInt(prompt("Cual es el medio de pago 1(ejectivo) o 0(otro medio"))

if(medioPago==1){
    if(litros<=50){
        impporL=litros*25
        impDes=impporL-impporL*10/100;
        r+="El importe total es "+ impDes + " ARS"
    }else if(litros>51 && litros<=200){
        impporL=litros*20
        impDes=impporL-impporL*10/100
        r+="El importe total es "+ impDes + " ARS"
    }else if(litros>201 && litros <=500){
        impporL=litros*15
        impDes=impporL-impporL*10/100
        r+="El importe total es "+ impDes + " ARS"
    }else if(litros>500){
        impporL=litros*10
        impDes=impporL-impporL*10/100
        r+="El importe total es "+ impDes + " ARS"
    }
}else if(medioPago==0){
    if(litros<=50){
        impporL=litros*25
        r+="El importe total es "+ impDes + " ARS"
    }else if(litros>51 && litros<=200){
        impporL=litros*20
        r+="El importe total es "+ impDes + " ARS"
    }else if(litros>201 && litros <=500){
        impporL=litros*15
        r+="El importe total es "+ impDes + " ARS"
    }else if(litros>500){
        impporL=litros*10
        r+="El importe total es "+ impDes + " ARS"
    }
}
document.write(r)
*/
/*
En el caso del switch el and y or no tienen nada que hacer ademas de los comparadores
Simplemete ebalua los valor que pueda tener la variable 
Al ingresar valores a ebaluar tengo que registrarlos acomo caracteres o cadenas en la opciones del switch
*/
/**Ejercicio 9 */
/*
var i =parseInt(prompt('Ingrese el tipo de i que quiere:'));
var ram = parseInt(prompt('Ingrese el tipo de ram que quiere:'));
var precio=0,r=" ";
var extencion=parseInt(prompt('Ingrese si quiere(1) o no (0) hacer una extencion: '));

switch(i){
    case 1:
        switch(ram){
            case 1:
                precio+=800
            break;
            case 2:
                precio+=900
            break;
            case 3:
                precio+=1000
            break
        }
        break
    case 2:
        switch(ram){
            case 1:
                precio+=900
            break;
            case 2:
                precio+=1000
            break;
            case 3:
                precio+=1400
            break
        }
        break
    case 3:
        switch(ram){
            case 1:
                precio+=1200
            break;
            case 2:
                precio+=1400
            break;
            case 3:
                precio+=2000
            break
        }
        break
    default:
}
if(extencion==1){
    precio+=300
    r+="El precio con extencion es " + precio
}else if(extencion==0){
    r+="El precio sin extencion es " + precio
}
document.write(r)*/
/**Porque debo darle un valor al usar una variable como aculador?
 * !Por que al realizar una operacion aritmetica entre dos valores si un oo ambos no son numero el resultado sera un NaN (not a number 'no un numero')
 */
/**como evitar el undefined en mis variables?
 * !Al inicializarle un caracter ejemplo " "
 */
/**10. Hacer un programa que solicite cuatro números y emitir un cartel aclaratorio si
son todos iguales entre sí, caso contrario, no emitir nada. */
/*
var n1 =parseInt(prompt("Ingrese un primer numero:"));
var n2 =parseInt(prompt("Ingrese un segundo numero:"));
var n3 =parseInt(prompt("Ingrese un tercero numero:"));
var n4 =parseInt(prompt("Ingrese un cuarto numero:"));
var r = " ",m;
if(n1==n2 && n2==n3 && n3==n4 ){
    r+="Los numeros son iguales"
}
document.write(r);*/





