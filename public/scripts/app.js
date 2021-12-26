import {preguntas} from '../categorias/objetos.js';
import {Juego} from '../models/juego.js'
import {Interfaz} from '../models/interfaz.js';
import { Pregunta } from '../models/pregunta.js';

function siguientePregunta(juego, interfaz) {
    if(juego.finJuego()){
        interfaz.mostrarResultadoFinal(juego.puntaje);
    } else{
        interfaz.mostrarPregunta(juego.obtenerPregunta().pregunta);
        interfaz.mostrarOpciones(juego.obtenerPregunta().opciones, function (opcionElegida) {
            juego.respuestaCorrecta(opcionElegida);
            siguientePregunta(juego, interfaz);
        }); 
    }
}

function main(){
    const juego = new Juego(preguntas);
    const interfaz = new Interfaz();

    siguientePregunta(juego, interfaz);
      
}

main();