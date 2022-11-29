/**
 * *Funciones: parametros/ argumentos
 * *LImitacion de las variables globales
 *  *Dentro de una funcion puedo utilizar variables globales
 * * Como crear una funcion que generae una eqtiqueta img a traves del document.write()
 * !<img src ="imagenes/imagen.jpg"/>
 * * El src(ruta del archivo) de la etiqueta imagen debe obtenerse de una variable global
 * *Ejecutando la funcion se quieren mostrar dos imagenes distintas
 * *function CrearImg(){
 * *    document.write(' <img src=“ ’+ rutaArchivo + ‘ ”/>’);
 ** }
 */
//Mi pregunta es : ¿Cuando quiero ingresar la ruta del archivo es tan simple como darle la carpeta de origen al src o tengo que darselo desde el disco c?
/*
var Saludar = function(){
    document.write('<p>Hola ' + nombre + ' !!</p>')
} 
var nombre = 'Cristhian'//!Borre la solicitud de la funcion del documento Javascript y estando en el HTML la solicitud de la funcion funciona igual 
nombre = 'Rodrigo'
Saludar()
nombre ='Mario'
Saludar()*/

/**
 * *Que son los parametros y argumentos?
 * *Cuando se crea una funcion. asi com al ejecutarla. se les pone parentesis luego del nombre
 * *Esos parentesis estan reservados para pasarle datos adicionales a la funcion
 * *Estos datos se llaman parametros o argumentos
 * !Argumento: datos que se le pasan a la funcion cuando se la ejecuta 
 * !Parametros: los datos que recibe y guardara la funcion al se ejecutada
 * *Son los datos que vienen de afuera de la funcion y se pueden usar por dentro de la misma, sin depender de una variable global
 * *Todo parametro de una funcion ejecutada implicitamente esta siendo declarado como una variable privada e inicializandose con el argumento que recibe
 * *Por consiguiente cuando una funcion termina de realizar todas las acciones, los valores recividos por los parametros dejan de existir
 * *No hay limite en la cantidad de parametros de una funcion
 * *Los parametros / argumentos se separan con una coma
 * *
 */
 /*var Saludar = function(nombre){
    //var nombre = 'Cristhian'
    document.write('<p>Hola ' + nombre + ' !!</p>')
} 

Saludar('Rodrigo')
Saludar('Cristhian')
Saludar('Sosa')
Saludar('Zurita')*/

//Implementacion de parmetros /argumentos
/**
 * *Es mas optimo si creo una funcion con un paramtero que reciba como argumento la ruta de la imagen
 * *Entonces:
 * * Al ejecutar la función se le pasa el valor de la ruta de la imagen, como argumento.
 * *Al crear la función, se crea un parámetro para recibir ese valor.
 * *De esta forma, evitamos el uso de la variable global y no tenemos que cambiar su valor antes de cada ejecucion de la funcion
 * *
 * *
 */
/*function CrearImgConParametro(rutaArchivo) {
document.write('<img src="' + rutaArchivo + '" />');
}
CrearImgConParametro('items/0000FF.jpg');
CrearImgConParametro('items/FFFF00.jpg');*/
/**
 * *Inicializacion por degecto y verificacion
 * *Siendo los parametros variables se los puede inicializar de ser necesario con unvalor por defecto a la hora de crear la funcion por ejemplo
 */
/*
function UnaFuncion(parametro = 'valor por defecto') {
        console.info(parametro);
}
*/
/**
 * *Esto puede ser util para la verificaoin de parametros siendo ellos
 * !Obligatorios: el parametro necesita un argumento para el correcto funcionamiento
 * !Opcionales : el parametro no necesita un argumento para elcorrecto funcionamiento 
 */
