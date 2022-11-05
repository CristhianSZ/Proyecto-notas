/*var n = parseInt(prompt('Ingrese un numero: '));
var r ='';
if(n>10){
    alert( `El numero ingresado ${n} es mayor a 10`)
}else{
    alert(`El numero ingresado ${n} no es mayor a 10`)
}
*/
//Ejercicio 2
/*
var n = parseInt(prompt('Ingrese un numero:'));
var n2 = parseInt(prompt('Ingrese un segundo numero:'));
var r=" "
if(n != n2){
    if(n < n2){
        r+=`El numero ingresado ${n} es menor que ${n2}`
    }else{
        r+= `El numero ingresado ${n} es mayor que ${n2}`  
    }
}
document.write(r)*/

/**3. Hacer un programa para ingresar dos números y que luego emita por pantalla
el mayor de ellos o un cartel aclaratorio “Son iguales” en el caso de que así sea.
Nota: los números pueden ser iguales. */


/*var n = parseInt(prompt('Ingrese un numero:'));
var n2 = parseInt(prompt('Ingrese un segundo numero:'));
var r=" "

if( n == n2){
    r+= "Los numero ingresados son iguales"

}else if(n>n2){
    r+=`El valor ${n} es mayor que ${n2}`

}else{
    r+=`El valor ${n} es menor que ${n2}`
}
document.write(r)*/
/**4. Hacer un programa para ingresar un número y luego se emita un cartel por
pantalla “Positivo” si el número es mayor a cero, “Negativo” si el número es
menor a cero o “Cero” si el número es igual a cero. */

/*var n = parseInt(prompt('Ingrese un numero:')),r=" ";

if(n == 0){
    r+="El numero ingresado es 0"
}else if(n>0){
    r+="El numero ingresado es positivo"
}else{
    r+=" El numero ingresado es negativo"
}
document.write(r)*/

/**5. Hacer un programa para ingresar un número y mostrar por pantalla un cartel
aclaratorio si el mismo es PAR o IMPAR. */
/*
var n = parseInt(prompt('Ingrese un numero:')),r=" ";
if(n%2==0){
    r+=`El numero ingresado ${n} es par`
}else{
    r+=`El numero ingresado ${n} es impar`
}
document.write(r)*/

/**6. Una casa de video juegos otorga un descuento dependiendo del importe de la
compra realizada según los siguientes valores:
• Si el importe es menor a ARS 1000, no hay descuento.
• Si el importe es ARS 1000 o más pero menor a ARS 5000, aplica un
descuento del 10%.
• Si el importe es ARS 5000 o más, aplica un descuento del 18%.
Hacer un programa para ingresar un importe de venta y luego muestre por
pantalla el importe final con el descuento que corresponda. */

/*var importe= parseInt(prompt('Ingrese el importe')), r=' ',rtotal="";

if(importe<1000){
    r+="Para este importe no hay descuento, resultado todal:" + importe
}else if(importe>1000 && importe<5000){
    rtotal = importe - importe*10/100
    r+="El ingreso tiene un valor entre 1000 y 5000, el resultado total es:" + rtotal
}else if(importe>=5000){
    rtotal = importe - importe*18/100
    r+="El ingreso tiene un valor mayor o igual a 5000, el resultado total es:"  + rtotal
    
}
document.write(r)*/


/*
var importe= parseInt(prompt('Ingrese el importe')), r=' ',rtotal="";
if(importe<1000){
    r+="Para este importe no hay descuento, resultado todal:" + importe
}else if(1000<importe){
    if(importe<5000){
        rtotal = importe - importe*10/100
        r+="El ingreso tiene un valor entre 1000 y 5000, el resultado total es:" + rtotal
    }else if(importe>= 5000){
        rtotal = importe - importe*18/100
        r+="El ingreso tiene un valor mayor o igual a 5000, el resultado total es:"  + rtotal

    }
}
document.write(r)*/

/**7. Hacer un programa para ingresar cuatro números distintos y luego mostrar por
pantalla el mayor de ellos. 
var n1= parseInt(prompt("Ingrese valor n1:"));
var n2= parseInt(prompt("Ingrese valor n2:"));
var n3= parseInt(prompt("Ingrese valor n3:"));
var n4= parseInt(prompt("Ingrese valor n4:")),r="";

if(n1!=n2 && n2!=n3 && n3!=n4 && n4!=n1){
    if(n1 > n2 && n1 > n3 && n1 > n4){
        r+= `El numero ${n1} es el mayor`
    }else if (n2 > n1 && n2 > n3 && n2 && n4){
        r += `El numero ${n2} es el mayor`
    }else if(n3 > n1 && n3 > n4 && n3 > n2){
        r+= `El numero ${n3} es el mayor`
    }else if(n4>n1 && n4>n2 && n4>n3){
        r+=`El numero ${n4}es el mayor`
    }
}else{
    r+=`Los numero ingresados son iguales`
}
document.write(r)*/
/*
var n1= parseInt(prompt("Ingrese valor n1:"));
var n2= parseInt(prompt("Ingrese valor n2:"));
var n3= parseInt(prompt("Ingrese valor n3:"));
var n4= parseInt(prompt("Ingrese valor n4:")),r="",M;

if(n1>n2){
    M = n1
}else{
    M = n2
}
if(n3>M){
    M =n3
if(n4 > M){
    M=n4
}
}
document.write("El mayor numero es: "+ M)*/

/**9 Hacer un programa para ingresar cinco números distintos y luego mostrar por
pantalla el mayor y el menor de ellos. */
/*
var n1= parseInt(prompt("Ingrese valor n1:"));
var n2= parseInt(prompt("Ingrese valor n2:"));
var n3= parseInt(prompt("Ingrese valor n3:"));
var n4= parseInt(prompt("Ingrese valor n4:")),r="",M,m;
var n5= parseInt(prompt("Ingrese valor n5:"));

if(n1>n2){
    M = n1
    m = n2
}else{
    M = n2
    m = n1
}
if(n3>M){
    M =n3
}
if(n4 > M){
    M=n4
}
if(n5 > M){
    M=n5
}
if(n3<m){
    m =n3
}
if(n4<m){
    m=n4
}
if(n5<m){
    m=n5
}
document.write("El mayor numero es: "+ M)
document.write("El menor numero es: "+ m)*/




/**10. Hacer un programa para ingresar cuatro números y luego mostrar por pantalla
cuáles son mayores a 100. 

var n1= parseInt(prompt("Ingrese valor n1:"));
var n2= parseInt(prompt("Ingrese valor n2:"));
var n3= parseInt(prompt("Ingrese valor n3:"));
var n4= parseInt(prompt("Ingrese valor n4:")),r="",M,m;

if(n1>100){
  r+=`El numero ${n1} es mayor a 100 <br>`
}
if( n2>100){
    r+=`El numero ${n2} es mayor a 100 <br>`
}
if(n3> 100 ){
    r+=`El numero ${n3} es mayor a 100 <br>`
} 
if(n4>100){
    r+=`El numero ${n4} es mayor a 100 <br>`
}
document.write(r)*/
/**11. Hacer un programa para ingresar cuatro números y luego mostrar por pantalla
cuántos son menores a 100.
 */
/*

var n1= parseInt(prompt("Ingrese valor n1:"));
var n2= parseInt(prompt("Ingrese valor n2:"));
var n3= parseInt(prompt("Ingrese valor n3:"));
var n4= parseInt(prompt("Ingrese valor n4:")),r="",j=0;

if(n1<100){
    j++
}
if(n2<100){
    j++
}
if(n3<100){
    j++
}
if(n4<100){
    j++
}
document.write(`La cantidad de numeos menores a 100 es ` + j)*/



