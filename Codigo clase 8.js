/**Practiquemos un poco:
Práctica para realizar en clase (ejemplo 1):
Solicitar al usuario el ingreso de un número. Informar si el número es cero, par o impar.
1. Hacerlo con if [else] (anidado).
2. Hacerlo con if [else if] [else].
3. Luego ver de utilizar el operador ternario */

/**Ejercicio 1 
var num = parseInt(prompt('...')), r = '';
if (num != 0) {
if (num % 2 != 0) {
    r += 'El número es impar';
} else {
    r += 'El número es par';
}
} else {
    r += 'El número es cero';
}
document.write(r);*/

/**Ejercicio 2  
if (num == 0) {
    r += 'El número es cero';
} else if (num % 2 == 0) {
    r += 'El número es par';
} else {
    r += 'El número es impar';
}
document.write(r)*/
/**Ejercicio 3 
var num = parseInt(prompt('Ingrese un numero:')), r = 'El número ';
r += (num == 0) ? 'es cero' :(num%2== 0? 'es par' : 'es impar');
document.write(r);*/


/*var num = parseInt(prompt('Ingrese un numero:')), r = ' ';
if(num>=5){
    if(num<=15){
        r+="El valor esta en el rango"
        if(num % 3==0){
            r+="El valor es multiplo de 3"
        }
        
    }else{
        r+="EL valor no esta en rango"
        if(num % 5 == 0){
            r+="El valor es multipli de 5"
            }
    }
    
}else{
    r+="El valor no esta en el rango"
    if(num % 5 == 0){
        r+="El valor es multipli de 5"
        }
    
}
document.write(r);*/
 

/** 
 * Ejercicio de triangulos
 * 
var lado1 = parseInt(prompt('Ingrese un numero:')), r = '';
var lado2 = parseInt(prompt('Ingrese un numero:'));
var lado3 = parseInt(prompt('Ingrese un numero:'));
r += (lado1==lado2==lado3) ? 'El triangulo es equilatero':'El triangulo no es equilatero'+'</br>';
r+= (lado1==lado2 || lado2==lado3 ||lado3==lado1 ) ? 'El triangulo es isoceles.':'El triangulo no es isoceles.' + '</br>'
r+= (lado1!==lado2&& lado2!==lado3) ? ' Triangulo es escaleno.':'Triangulo no es escaleno' + '</br>'

document.write(r);*/


/**Ejercicio de rango 

var maxrango = parseInt(prompt("Ingrese el maximo valor del rango:")), r =" ";
var minrango = parseInt(prompt("Ingrese el minimo valor del rango: "));
var num = parseInt(prompt("Ingrese un valor numerico:"));

if(minrango < num && num < maxrango){
    r+="El valor esta dentro del rango </br>40"
    if(num%2 == 0){
        r+="El valor es par </br>"
    }
}else if (num%2 != 0){
    r+="El valor es impar </br>"
}
document.write(r);


console.log(`El valor minimo ingresado es: ${minrango}`);
console.log(`El valor maximo ingresado es: ${maxrango}`);
console.log(`El valor ingresado es: ${num}`);*/



/**Ejercicio de ingresar operador 
var n1 = parseInt(prompt("Ingrese el valor de n1:")),r ="El resultado de la operacion es: ";
var n2 = parseInt(prompt("Ingrese el valor de n2:"));
var op = prompt("Ingrese el operador a utilizar:");

switch(op){
    case "+":
        r+=n1 + n2
    break
    case "-":
        r+=n1 - n2
    break
    case "*":
        r+=n1 * n2
    break
    case "/":
        r+=n1 / n2
    break
    default:
        r+="El operador ingresado no es apropiado"
}

document.write(r);

console.log(`El valor de n1 ingresado es: ${n1}`);
console.log(`El valor de n2 ingresado es: ${n2}`);
console.log(`El operador utilizado es: ${op}`);*/


/**Ejercicio consonantes y vocales 
 * Alternativa 1


var letra = prompt("Ingrese una letra: "),r=" ";

if(letra == 'a'|| letra== 'e'||letra== 'i'||letra=='o'||letra=='u'){
    r+='La letra ingresada es vocal'

}else{
    r+='La letra ingresada es consonante'
}
document.write(r);
console.log(`La letra ingresada es:${letra}`)
Alternativa2 */

var letra = prompt("Ingrese una letra: "),r=" ";
switch(letra){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        r+=`La letra ingresada: ${letra} es una vocal`
    break
    default:
        r+=`La letra ingresada: ${letra} es una consonante`
}
document.write(r);
alert(r);
console.log(`La letra ingresada es:${letra}`);
