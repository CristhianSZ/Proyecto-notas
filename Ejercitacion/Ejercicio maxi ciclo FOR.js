/**1. Hacer un programa que solicite el ingreso de 10 números y que muestre el
mayor de ellos por pantalla. Solo se debe emitir UN valor por pantalla. */
/*
var num,i,r='';
var valorMax;
for(i=0;i<10;i++){
    num = parseInt(prompt('Ingrese un numero:'));
    if(i==0){
        valorMax=num
    }else if(num>valorMax){
        valorMax=num
    }
}
document.write(`EL mayor valor es: ${valorMax}`);*/


/**2. Hacer un programa que solicite 20 números y calcule y emita por pantalla
cuántos son positivos (mayores a cero). Se debe mostrar un solo valor: el
conteo final. */
/*
var num, i, r='',nPositivo=0;

for(i=0;i<20;i++){
    num=parseInt(prompt('Ingrese un numero:'));
    if(num>0){
        nPositivo++
    }
}
document.write("El conteo final de numeros positivos es: " + nPositivo)*/



/**3. Hacer un programa para mostrar los números del 1 al 10. No se debe realizar
ningún pedido de datos. */
/*
var i, r='';

for(i=1;i<=10;i++){
    r+=`${i} <br>`
}
document.write(r)/*
/** 4. Hacer un programa para mostrar los números del 10 al 1. No se debe realizar
ningún pedido de datos. */
/*
var i, r='';

for(i=10;i>=1;i--){
    r+=`${i} <br>`
}
document.write(r)*/
/**5. Hacer un programa que muestre los números del 1 al 100 de 5 en 5. Ejemplo:
0, 5, 10, 15, 20.... 100. */

var i, r='';

for(i=0;i<=100;i++){
    if(i%5==0){
        r+=`${i} <br>`
    }
    
}
document.write(r)