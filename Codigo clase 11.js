/**Funciones 
 * *Que es una funcion?
 * *Es una secuencia o instrucciones almacenadas en un espacio reservado de la memoria que tiene un nombre de referencia.
 * *En general marco la funcion empezandola con letra mayuscula
 * !Sintaxis 
 * Para que sirven?
 * Me permite ahorrar lineas de codigo, estableciendo un bloque de codigo que se utilice mas de una vez
 * Los funciones son la unica manera de generar interacion entre HTML y Javascript.
 * Si una funcion tiene un poco mas de 10 renglones algo esta mal, una funcion se encarga solo de una tarea
 * *Como se crea un funcion?
 * !Primera forma: como funcion:
 * *function NombreDeLaFuncion(){
 *      Acciones a ejecutar
 * }
 * !Segunda forma: como variable:
 * * var NombreDeLaFuncion = function(){
 *      Acciones a ejecutar
 * }
 * !Atencion al crear una funcion como variable porque solo la podre ejecutar luego de ser declarada, porque una variable solo se utiliza si ya fue declarada
 * 
 * 
 * 
*/
/*
var MiPeimerFuncion = function(){
    console.log('Hola, desde la primer funcion!')
}

function MiSegundaFuncion(){
    console.log('Hola, desde la segunda funcion!')

}
MiSegundaFuncion()
MiPeimerFuncion()
*/
/**
 * *Ambitos de las variables
 * *Dentro de una funcion se pueden declarar nuevas variables que solamente van a existir  dentro de dicha funcion
 * *Lo anterior significa que si se llama una variable desde fuera de la funcion se profucira una indefinicion
 * *Se presentan dos situaciones 
 * !Declara una variable dentro de una funcion
 * *Solamente existe dentro de la funcion
 * !Utilizar una variable declarada por fuera 
 * *Existe por fuera y dentro de la funcion
 * ?Esta condicionalidad recibe el nombre de ambito y scope de las variables
 * 
 */

/**
 * ?Que es ejecutar una funcion?
 * *Es cuando se llama para que procese el codigo que tiene almacenado
 * *Se debe escribir el nombre de la funcion seguida de sus parentesis y cuando se ejecuta no llena la palabra function
 */
/*

var nombre = 'Lucas'

function Saludar(){
    var nombre = 'Cristhian'
    console.log('Hola ' + nombre)
}

Saludar();*/

/**Funciones ambitos de las variables
 * *Tipos de variables
 * !Variables globales
 * *Existen en todo el programa y so todas las variables declaradas por fuera de las funciones
 * ?TODA VARIABLE GLOBAL PUEDE SER ACCEDIDA POR UNA FUNCION
 * !Variables privadas
 * *Existen solamente dentro de la funcion creada
 * *Es una variable declarada en la funcion y solo vigente en el ambito y scope
 * *Por fuera de la funcion no se puede acceder a ellas
 * *Si declaro una variable dentro de la funcion y esta por fuera ya fue declarada la funcion prioriza a la privada ignorando a la global
 * !Variables publicas
 * *Son variables declaradas dentro de las funciones, pero que se pueden acceder por fuera de la funcion. Esto se logra untilizando la sintaxis THIS
 */
/**
 * !Javascript y los eventos
 ** Interaccion entre HTML y Javascript pro parte de Javascript a ALGO en el HTML
 ** Ese ALGO se llama evento
 *? Algunos eventos mas comunes
 ** onclick cuando se hace click sobre una etiqueta
 **Al pasar el mouse por arriba de alguna etiqueta  (onmouseover)
 **Al enviar un formulario (onsubmit)
 */
/**
 * *Que son los eventos en el HTML?
 * *Son todos los atributos que empiezan con ON
 * *Un evento solo puede ejecutar codigo JavaScript(en las comillas del atributo del tipo de evento se puede escribir todo un bloque de codigo javascript y funcionara correctamente)
 * *La funcion que se ejecuta al ser "disparada" por un evento se llama Event linstener(escuchadora de eventos)
 * !Que son los atributos?
 * *Cosas que digerencia a esa etiqueta de las demas de otras etiquitas
 * <div> </div> sirve para dividir la pagina
 * !Existen 2 maneras de relacionar una funcion a un evento
 * *Con HTML <button onclick = "UnaFuncion();"></click<button>
 * *Con javascript usando DOM
 * *ETIQUETA.onclick = funcion (){}
 * *ETIQUETA.onclick = UnaFuncion;
 * *
 */
//Ejercitacion

var Numero ;

function NumeroIngresado(){
    do{
        Numero=parseInt(prompt("Ingrese un numero:"));

    }while(isNaN(Numero))
   
}

function Paridad(){
    
    if(Numero%2 == 0){
        console.log("El numero ingresado " + Numero + " es par")
    }else if(Numero%2 != 0){
        console.log("El numero "+ Numero + " ingresado es impar")
    }else if (Numero == 0){
        console.log("El numero ingresado es cero")
    }
}
