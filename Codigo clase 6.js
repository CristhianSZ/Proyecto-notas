//Hoy comenzamos con la ejercitacion de Ciclos de repeticion//
/*Ejercicio 1, Ingresar 5 numeros. Luego mostrarlos en pantalla.
1- hacerlo por for con incremento empeznado desde 1
2- Hacerlo con for condecremnto empezando desde 10
3- Hacerlo con while 
4- Hacerlo con do-while*/

/*var n , i , r = ' ';

for(i=0; i<5; i++){
    n=parseInt(prompt('Ingrese el numero: '));
    console.log('El numero ingresado es: ' + n);
    r+= 'El numero ingresado es: ' + n;
    r+= '</br>';
}
document.write(r);*/
// Aqui hago un apartado para relacionar un archivo HTML con JavaScript, necesito crear un archivo index.html, con solo poner html: 5 se crea una estructura y agrego en head <script src = "archivo a enlazar"></script> //

/*var n , i , r = ' ';

for(i=10; i>5; i--){
    n=parseInt(prompt('Ingrese el numero: '));
    console.log('El numero ingresado es: ' + n);
    r+= 'El numero ingresado es: ' + n;
    r+= '</br>';
}
document.write(r);*/
/*Punto 3*/

/*var n, r= 'A continuacion los numeros ingresados: <br/> ' , i = 0;

while(i<5){
    n = parseInt(prompt('Ingrese su numero: '));
    r+=`El numero ingresado es: ${n}`;
    r+='<br/>';
    i++

}
document.write(r);*/
/* Punto 4
var i=0, n , r= ''
do{
    n=parseInt(prompt('Ingrese el numero:'));
    r+=`El numero que ingreso es: ${n}`;
    r+='<br/>';
    i++;
}
while(i<5)
document.write(r);

//Mas ejercitacion Se le pide al usuario que ingrese 5 alumnos y sus respectivas notas. Mostrar en pantalla el listado de alumnos y notas//

var nota, estudiante ,i , r= 'Listado de notas estudiantiles: <br/>';

for(i=10; i>5; i--){
    estudiante=prompt('Ingrese el nombre del estudiante: ');
    nota=parseInt(prompt('Ingrese la nota del estudiante: '));
    r+=`Estudiante: ${estudiante} <br/>`;
    r+=`Su nota: ${nota} <br/>`;

}
document.write(r);
//Utilizar while como ciclo de repeticion. Se le pide al usuario que ingrese 5 alumnos y sus respectivas notas. ;ostrar en pantalla el listado de alumnos y notas.//

var n, estudiante, r= 'A continuacion notas estudiantiles: <br/> ' , i = 1;

while(i<6){
    estudiante=prompt('Ingrese el nombre del estudiante: ');
    n = parseInt(prompt('Ingrese la nota: '));
    r+=`Estudiante ${i}: ${estudiante} <br/>`;
    r+=`La nota es: ${n} <br/> `;
    i++

}
document.write(r);*/
//r+=`Estudiante ${i}: ${estudiante} <br/>`; altulizar el valor que cambia de i puedo darle un sentido logico de usuarios ingresantes siempre haciendo coincidir el valor i=1 y que la cantidad de ciclos cumpla con la condicion establecida//

//Se le pide al usuario que ingrese alumnos y sus respectivas notas.Mostrar en pantalla el listado de alumnos y notas, La canridad de alumnos a ingresar queda a criterio del usuario//

/*var n, respuesta, a, r = 'Notas estudiantiles: <br/>';

do{
    a=prompt("Ingrese el nombre del estudiante: ");
    n=parseInt(prompt("Ingrese la nota del estudiante: "));
    r+=`Estudiante: ${a} <br/>`;
    r+=`Su nota es: ${n} <br/>`;
    respuesta=confirm('Continuar?')
}while(respuesta==true)
document.write(r);*/
//Se puedo acortar codigo si uso while(confirm("continuar?")); ya que al dar aceptar al confirm va a dar como true, y esa es la condicion para que inicialice de nuevo el ciclo//

//Ejercitacion 2//

/*var n, r= "Los numeros ingresados son: <br/>"
do{
    n=parseInt(prompt("Se solicita ingresar un numero: "));
    r+=`El numero ingresado es: ${n} <br/>`;
}
while(confirm("Continuar ingresando numeros?"));
document.write(r);*/

/*var n, r= "Los numeros ingresados son:<br>";
do{
    n=parseInt(prompt("Ingrese un numero: \n(Debe ingresar numeros mayor a 10)"));
    r+=`El numero ingresado e: ${n}`;
    r+='<br>'
}
while(n>10);
document.write(r);*/

//Alternativa//
var n,x, y, z, r= ""
do{
    n=parseInt(prompt("Se solicita ingresar un numero \n(mayor a 10 para continuar el ciclo): "));
    y=confirm("Continuar ingresando numeros?");
    r+=`El numero ingresado es: ${n} <br/>`;
    z= y && n>10;
}
while(z==true);
document.write(r);
