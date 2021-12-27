import {arrayCategorias} from '../categorias/objetos.js';
import {Juego} from '../models/juego.js'
import {Interfaz} from '../models/interfaz.js';

function siguientePregunta(juego, interfaz) {
    if(juego.finJuego()){
        interfaz.mostrarResultadoFinal(juego.puntaje);
    } else{
        var preguntaActual= juego.obtenerPregunta();
        interfaz.mostrarEncabezados(juego.obtenerCategoria(), juego.obtenerDificultad(), juego.puntaje, preguntaActual.pregunta);
        interfaz.mostrarOpciones(preguntaActual.opciones, function (opcionElegida) {
            juego.respuestaCorrecta(opcionElegida);
            siguientePregunta(juego, interfaz);
        }); 
    }
}


function main(){
    const juego = new Juego(arrayCategorias);
    const interfaz = new Interfaz();

    siguientePregunta(juego, interfaz);
      
}

main();