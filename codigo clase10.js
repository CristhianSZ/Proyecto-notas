/** Ejercicio 1*/

var categoria =parseInt(prompt('Ingrese su categoria \n( 1 / 2 o 3)'));
var subcategoria= prompt('Ingrese subcategoria: \n(A / B o C)');
var sueldo=0,r=' ';

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
document.write('El sueldo del empleado es: ' + sueldo + " u$s")
document.write(`<br>`+ r)