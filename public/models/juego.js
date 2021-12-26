import {Pregunta} from "./pregunta.js";

export class Juego{

    index = 0;
    puntaje = 0;

    constructor(preguntas){
        this.preguntas = preguntas;
    }

    /**
     * 
     * @returns {Pregunta}
     */
    obtenerPregunta(){
        return this.preguntas[this.index];
    }

    /**
     * 
     * @param {string} respuesta 
     */
    respuestaCorrecta(respuesta){        
        if(this.obtenerPregunta().opcionCorrecta(respuesta)){
            this.puntaje++;
        }
        this.index++;
    }

    finJuego(){
        return this.preguntas.length === this.index;
    }
}
