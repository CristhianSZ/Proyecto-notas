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
/**Ejercicio 3 */
var num = parseInt(prompt('Ingrese un numero:')), r = 'El número ';
r += (num == 0) ? 'es cero' :(num%2== 0? 'es par' : 'es impar');
document.write(r);