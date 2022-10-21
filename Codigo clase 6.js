//Hoy comenzamos con la ejercitacion de Ciclos de repeticion//
/*Ejercicio 1, Ingresar 5 numeros. Luego mostrarlos en pantalla.
1- hacerlo por for con incremento empeznado desde 1
2- Hacerlo con for condecremnto empezando desde 10
3- Hacerlo con while 
4- Hacerlo con do-while*/

var n , i , r = ' ';

for(i=0; i<5; i++){
    n=parseInt(prompt('Ingrese el numero: '));
    console.log('El numero ingresado es: ' + n);
    r+= 'El numero ingresado es: ' + n;
    r+= '</br>';
}
document.write(r);
// Aqui hago un apartado para relacionar un archivo HTML con JavaScript, necesito crear un archivo index.html, con solo poner html: 5 se crea una estructura y agrego en head <script src = "archivo a enlazar"></script> //