var Numero ;


function Paridad(Numero){
    
    if(Numero%2 == 0){
        return "El numero ingresado " + Numero + " es par"
    }else if(Numero%2 != 0){
        return"El numero "+ Numero + " ingresado es impar"
    }else if (Numero == 0){
        return"El numero ingresado es cero"
    }
}