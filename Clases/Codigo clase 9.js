/**
 * *Condicionales y su resolucion de condiciones:
 * *Si hay una comparacion el resultado logico sera true o false por lo que:
 * *Si es true entrara a la parte verdadera
 * *Si es false entrara a la parte falsa
 * *Pero si no hay comparacion es decir no hay un valor logico ¿Como sabe donde estrar?
 * *Javascript resolvera los tipos de datos que no sean logicos para poder procer con la accion del condiconal
 * *Resolucion de condiciones
 * ?Si el valor es del tipo de dato number
 *! Si el numero es 0 se resuelve como un "false" 
 *! Si el numero es NaN se resuelve como un "false"
 *! EN cualquier otro caso se resuelve como un "true"
 */
 /**var n = parseInt(prompt("Numero:")), r= " ";
 if (n){
    r+= "Parte true"
 }else{
    r+= "Parte false"
 }
 console.log(r)
 document.write(r);/*



/**

 *? Si el valor es del tipo de dato string
 *! Si la cadena esta vacia se resuelve como un "false" 
 *! En cualquier otro caso, se resuelve como un "true"
 */
 /**var n = prompt("Cadena:"), r= " ";
 if (n){
    r+= "Parte true"
 }else{
    r+= "Parte false"
 }
 console.log(r)
 document.write(r);*/
 /** 
 *? Si es del tipo de dato "undefined"
 *! Siempre se resuelve como un "false"
 *? Si es del tipo de dato "null"
 *! Siempre se resuelve como un "false"
 *? Si el tipo del dato es "object"
 *! Siempre se resuelve como un true
 */
/**
 * *Variables auxiliares
 * ?Contadores
 * *Variables que utilizamos para "contar"
 * *Se la den inicializar generalmente en 0
 * *Se debe incrementar o decrementar su valor cada vez que se quiera contar
 * *Generalmente se utilizan los operadores ++ o --
 */
/**
 * ?Acumuladores
 * *Variables que ytilizamos para "acumular" o hacer "sumatorias"
 * *Se la debe inicializar generalmente en 0
 * *Se debe reasignar el contenido previo sumado al nuevo 
 * *Generalmente se utiliza el operador +=
 * ?Minimos y Maximos
 * *Variable que utilizamos para obtener el minimo y/o maximo de un rango
 * *A partir del segundo valor, se compara el nuevo valor con los minimos y maximos:
 * ! Si el nuevo valor es mayor al maximo, dicjo valor reemplaza al minimo 
 * ! Si el nuevo valor es mayor al maximom dicho valor reemplaza al macimo anterior
 */

/**Ingresar y mostrar 5 valores numéricos.
Calcular e informar el promedio de los valores ingresados, así como el mínimo y el máximo
valor ingresado. 
var i , r=" ", num;

for(i=0;i<5;i++){
    num = parseInt(prompt('Ingrese un numero:'));
    r += "El numero ingresado es: " + num + "<br>"; 

}
var promedio = 
document.write(r)
var n, r="",i=0, acum=0, numMin , numMax;
do{
    n=parseInt(prompt('Ingrese un numero: '));
    acum+=n;
    r+= 'El numero ingresado es: ' + n + '<br/>';
    if(i == 0){
        numMax = n;
        numMin = n;

    }else{
        if(n > numMax){
            numMax = n;
        }
        if(n < numMin){
            numMin= n;

        }
    }
    i++
}while(i < 5)

var promedio = acum / 5;

document.write(r)
document.write('El promedio es:' + promedio + '<br>');
document.write('El numero minimo es:' + numMin + '<br>');
document.write('El numero maximo es:' + numMax + '<br>');*/

/**Ingresar y mostrar las notas de una comisión, calcular e informar:
El porcentaje de los alumnos desaprobados (notas < 4).
La cantidad de los alumnos aprobados (notas >= 4).
El porcentaje de los alumnos promocionados (notas >= 7… ojo, también son alumnos
aprobados).
La mínima y la máxima nota ingresada.
Se desconoce la cantidad de notas.*/
var nombre, nota, r='', cantAlum=0, alumDes=0,alumApr=0,alumPro=0, notaMax, notaMin;

do{
   nombre=prompt('Ingrese nombre del alumna/o:')
   nota = parseInt(prompt('Ingresar nota'));
   r += 'Alumna/o:' + nombre + ' /nota ' + nota;
   r += "<br>"
   if(nota<4){
       alumDes ++;
   }else{
       alumApr ++
       if(nota >=7){
           alumPro ++

       }
   }
   cantAlum++
   if(cantAlum==0){
       notaMax = nota
       notaMin = nota
   }else{
       if(nota>notaMax)
       notaMax=nota
   }
   if(nota < notaMin){
       notaMin= nota
   }
}while(confirm('Desea seguir cargando notas?'))

var PromAlumDes= alumDes*100/cantAlum
var porcAlumnProm= alumPro*100/cantAlum

document.write(r)
document.write('Cant de alumnos ingresados: ' + cantAlum + '<br>' )
document.write('Cant de alumnos desaprobados:' + alumDes + '<br>')

document.write('Cant de alumnos aprobados:' + alumApr + '<br>')
document.write('Promedio de alumnos desaprobados:' + alumDes + '%' + '<br>')
document.write('Promedio de alumnos Promocionan:' + porcAlumnProm + '%' + '<br>')