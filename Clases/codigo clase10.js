/** EjercicioCalcular e informar un sueldo sabiendo que:
La categoría define el sueldo básico mensual (1: u$s 1000, 2: u$s 1500, 3: u$s 2000).
La subcategoría define el multiplicador (A: x1.5, B: x2, C: x2.5).
Ambos datos son ingresados por el usuario.
Además, informar dentro de qué rango está el sueldo:
Si está en el rango ‘inicial’: entre u$s 1500 a u$s 3000, inclusive.
Si está en el rango ‘intermedio’: entre u$s 3001 y u$s 4000, inclusive.
Si está en el rango ‘avanzado’: si supera los u$s 4000*/

/*

var categoria
var subcategoria
var sueldo=0,r=' ';
do{
    categoria =parseInt(prompt('Ingrese su categoria \n( 1 / 2 o 3)'));
    subcategoria= prompt('Ingrese subcategoria: \n(A / B o C)');
    
    
    switch(categoria){
        case 1:
            switch(subcategoria){
                case 'A':
                case 'a':
                    sueldo+=1000*15/10
                break
                case 'B':
                case 'b':
                    sueldo+=1000*2
                break;
                case 'C':
                case 'c':
                    sueldo+=1000*25/10
                break;
                default:
            }
        break;
        case 2:
            switch(subcategoria){
                case 'A':
                case 'a':
                    sueldo+=1500*15/10
                break;
                case 'B':
                case 'b':
                    sueldo+=1500*2
                break;
                case 'C':
                case 'c':
                    sueldo+=1500*25/10
                break;
                default:
            }
        break;
        case 3:
            switch(subcategoria){
                case 'A':
                case 'a':
                    sueldo+=2000*15/10
                break
                case 'B':
                case 'b':
                    sueldo+=2000*2
                break;
                case 'C':
                case 'c':
                    sueldo+=2000*25/10
                break;
                default:
            }
        break;
        default:
    }
    if(sueldo>=1500 && sueldo<=3000){
        r+=`El sueldo ${sueldo} esta en el rango inicial`
    }else if(sueldo>=3001 && sueldo<=4000){
        r+=`El sueldo ${sueldo} esta en el rango intermedio`
    }else if(sueldo> 4000){
        r+=`El sueldo ${sueldo} esta en el rango avanzado`
    }
    
}while( isNaN(categoria) || !isNaN(subcategoria)|| categoria<1 || categoria>3);

document.write('El sueldo del empleado es: ' + sueldo + " u$s")
document.write(`<br>`+ r)*/

/**Ejercicio de práctica para hacer en conjunto:
Ingresar el nombre del alumno y convertirlo a minúscula.
Ingresar el apellido del alumno y convertirlo a mayúscula.
Ingresar el DNI del alumno, solamente puede tener entre 6 y 8 caracteres.
Ingresar el sexo del alumno, solamente puede ser h o m.
Ingresar la nota del alumno, solamente puede ser del 1 al 10.
Validar todos los valores ingresados y mostrar los datos del alumno en pantalla.
!(v == 'valor' || v == 'valor2') */
 /*

var nombre,apellido,DNI,sexo,nota;

do{
    nombre=prompt("Ingrese el nombre del alumno/a:  ");
    apellido=prompt("Ingrese el apellido del alumno/a:");
    DNI=parseInt( prompt("Ingrese el DNI del alumno/a:\n (entre 6 y 8 caracteres) "));
    sexo=prompt("Ingrese el sexo del alumno/a: \n (solo con h o m) ");
    nota=parseInt(prompt("Ingrese la nota del alumno/a: \n (solo de 1 a 10) "))
}while(!isNaN(nombre) || !isNaN(apellido) || isNaN(DNI) ||  !isNaN(sexo)   || isNaN(nota) || nota<1 || nota>10 || !(sexo == 'h' || sexo == 'm')||!(long >=6 &&long <=8))
document.write("Nombre del alumno/a es: " + nombre.toLowerCase() + `<br>`)
document.write( "Apellido del alumno/a es: " +  apellido.toUpperCase() + `<br>`)
document.write("El dni del alumno/a es:" + DNI + `<br>`)
document.write("El sexo del alumno/a es: " + sexo + `<br>`)
document.write( "La nota del alumno/a es: " + nota + `<br>`)

long= DNI.length
!(long >=6 &&long <=8)*/
//provar a hacer do while por separado con cada condicion me permite corregir con mas detalle y simplicidad un error
/**Para evitar las mayousculas o minusculas piso la varible trasnformando todo a lo que me sirve */
/**Ejercicio 2
 * Se recogen los siguientes datos para una encuesta: ciudad, sexo (H o M) y edad (0 a 110).
Calcule e informe los siguientes datos:
Promedio de edad general.
Promedio de edad de las mujeres.
Promedio de edad de los hombres.
Porcentaje de mujeres menores a 21 años.
Porcentaje de hombres mayores a 21 años.
La mayor edad ingresada de las mujeres.
La menor edad ingresada de los hombres.
Los tres valores ingresados deben ser validados según corresponda.
 */

var ciudad,sexo,edad;
var proEdadGral,acumuladorEdad=0,cantPers=0;
var proEdadHomb,acumuladorEdadHomb=0,cantHomb=0
var proEdadMujer,acumuladorEdadMujer=0,cantMujer=0
var cantHombMayor21,porcHombreMayor21
var cantahombMenor21,porcMujerMenor21
var EdadMenorHomb,i=0
var edadMayorMujer,j=0
do{
    ciudad=prompt("Ingrese su ciudad:")
    sexo=prompt("Ingrese su sexo: \n (H o M) ")
    edad=parseInt(prompt("Ingrese su edad:\n (0 a 110) "))
    proEdadGral=acumuladorEdad/cantPers
    acumuladorEdad+=edad
    cantPers++

    if(sexo=="H"){
        acumuladorEdadHomb+=edad
        cantHomb++
        proEdadHomb=acumuladorEdadHomb/cantHomb
        i++
        if(i==0){
            EdadMenorHomb=edad
        }else if(EdadMenorHomb>edad)
            EdadMenorHomb=edad

        if(edad>21){
            cantHombMayor21++
            porcHombremayor21=cantHombMayor21*100/cantHomb
        }
        

    }else if(sexo=='M'){
        acumuladorEdadMujer+=edad
        cantMujer++
        proEdadMujer=acumuladorEdadMujer/cantMujer
        j++
        if(j==0){
            edadMayorMujer=edad
        }else if(edadMayorMujer<edad)
            edadMayorMujer=edad
        if(edad<21){
            cantMujerMenor21++
            porcMujerMenor21=cantMujerMenor21*100/cantMujer
        }
    }
}while(!isNaN(ciudad) || !isNaN(sexo) || !(sexo=="H"||sexo=="M") ||isNaN(edad) || edad<0 || edad>110 )
document.write("La ciudad en la que se hizo la encuesta es: " + ciudad  + "<br>")
document.write("El promedio de edad general es: " + proEdadGral + "<br>")
document.write("El promedio de edad de mujeres es: " + proEdadMujer + "<br>")
document.write("El promedio edad hombre es: " + proEdadHomb + "<br>")
document.write("El porcentaje de mujeres menores a 21 años es: " + porcMujerMenor21 + "<br>")
document.write("El porcentaje de hombres mayores a 21 años es: " + porcHombreMayor21 + "<br>")
document.write("La edad mayor ingresada de mujer es: " + edadMayorMujer + "<br>")
document.write("La menor edad de hombre es: " + EdadMenorHomb + "<br>")

