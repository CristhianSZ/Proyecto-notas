/**1. Hacer un programa que solicite el ingreso de 10 números y que muestre el
mayor de ellos por pantalla. Solo se debe emitir UN valor por pantalla. */

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
document.write(`EL mayor valor es: ${valorMax}`);