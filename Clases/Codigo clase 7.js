//**Condicionales: consisten en poder bifurcar una o varias veces*/ç
/**
 * *Condicionales estructura if[else]
 */
if(condicion){
 //**codigigo a ejecutar si la condicion se cumple, es decir, da true   
}else {
    //*Optativamente puedo tener el else que ncontendra el codigo a ejecutar si la condicion NO se cumple es decir da false

}
//*Las llaves del If no deben quedar vacias el else es opcional

var num = parseInt(prompt(" "));
if(num=0){
    r+="El numero es cero"
}else{
    r+="El numero no es cero"
}
document.write(r);


//*Y si la pregtunta fuera "Informe si el numero no es cero o si lo es"
var num = parseInt(prompt(" "));
if(num!=0){
    r+="El numero no es cero"
}else{
    r+="El numero es cero"
}
document.write(r);

//*Otra alternativa es
var num = parseInt(prompt(" "));
if!(num=0){/** Aqui estoy negando la condicion la comparacion daria true y terminaria siendo folse por la negacion */
    r+="El numero es cero"
}else{
    r+="El numero no es cero"
}
document.write(r);

//*Estructuras if[else] anidados 
Sintaxis y diagrama de flujo
if(condicion){
    //*codigo si es true
    if(condicion anidada){
        condigo si es true
    }else{
        //*opcionalmente en caso de que sea false
    }
}else{
    //*Optativo codigo si es false
    if(condicion anidada){
        //*Condigo si es true
    }else{
        //*Optativo si es caso false

    }
}
//*Otro ejemplo Ingrese un valor numérico e informe si es cero, par o impar.

var num = parseInt(prompt('...')), r = '';
if (num == 0) {
r += 'El número es cero';
} else {
if (num % 2 == 0) {
r += 'El número es par';
} else {
r += 'El número es impar';
}
}
document.write(r);

//* En caso de que me pidiese que Ingrese un valor numérico e informe si es impar, par o cero.

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
document.write(r);
//* Sintaxis y diagrama de flujo

if (condición 1) {
    // Código si es true.
    } else if (condición 2) {
    // Código si es true.
    } else if (condición 3) {
    // Código si es true.
    } else if (condición n) {
    // Código si es true.
    } else {
    // Optativamente, código si es false.
    }
    //* Se utiliza param en caso de cumplirse una condicion m repreguntarm evitando un par de llaves, no hay limite de preguntas y como tod ocondicional, tiene el else optativo

    //* Estructura id[else if] [else]

    var num = parseInt(prompt('...')), r = '';
if (num == 0) {
    r += 'El número es cero';
} else if (num % 2 == 0) {
    r += 'El número es par';
} else {
r += 'El número es impar';
}
}
document.write(r);

//* Operador ternario
(condición) ? /* código true */ : /* código false */;

//*Es un operado rque ecalua una condicion y tendra preparado las posibles operaciones o valores para los casos true y false de la condicion este seria una version reducida del if[else]
//*Los parentesis que encierran a la condicion no son obligatorios
//*Ejemplo
var num = parseInt(prompt('...')), r = 'El número ';
r += (num == 0) ? 'es cero' : 'no es cero';
document.write(r);
 //*Anidamientos de operadores ternarios

 var num = parseInt(prompt('...')), r = 'El número ';
r += (num == 0) ? 'es cero' :(num%2== 0? 'es par' : 'es impar');//*es importante que la proxima pregunta este encerrada entre parentesis la primera no.ñ
document.write(r);

//* Switch case
switch (variable) {
    case valor 1:
    // Código si la variable tiene el valor 1.
    break;
    case valor 2:
    // Código si la variable tiene el valor 2.
    break;
    default:
    // Código si la variable no tiene ninguno de los valores comparados

    //* Es un selector de casos compara si el valor de la variable es estructamente igual a alguno de los valores de los case. Funciona como un if[else if] [else] limitado solamente a comparaciones ===
    //* Cada case se cierra con un break que indica que rompe el switch si entro al case. al igual que los condicionales tiene un caso por deggecto que sera el default
    //*ejemplo

    switch (turno) {
        case 'm':
        case 'M':
        r += ‘Cursa de 09:00 a 13:10Hs’;
        break;
        case 'n':
        case 'N':
        r += ‘Cursa de 18:45 a 22:45Hs’;
        break;
        default:
        r += ‘El turno es inexistente’;
        }
        document.write(r);