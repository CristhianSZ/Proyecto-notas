function saltarLinea() {
    document.write("<br>");
    document.write("<br>");
}
    function Imprimir(frase){
        document.write(frase)
        saltarLinea()
    }
    function Aleatorio(){
        return Math.round(Math.random()*10)
    }
  
   var apellidoJugador = new Array( "Messi","Drogba","Adebayor","Ablanedo","Saviola")

   var nombreJugador = new Array("Leonel","Didier","Emmanuel", "Juan Carlos" ,"Javier")

   var sobreNombreJugador = new Array("La Pulga","El Perro","El animal"," El Gato","El Conejo")

   var numeroCamiseta = new Array(10,Aleatorio(),Aleatorio(),Aleatorio(),Aleatorio())

   for(var i = 0 ; i < apellidoJugador.length ; i++){
    Imprimir("El apellido del jugador es: " + apellidoJugador[i])
    Imprimir("El nombre del jugador es: " + nombreJugador[i])
    Imprimir("El sobrenombre del jugador es:" + sobreNombreJugador[i])
    Imprimir("El numero de la camiseta del jugador es:" + numeroCamiseta[i])
    saltarLinea()
   }


