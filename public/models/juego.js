export class Juego{

    index = 0;
    puntaje = 0;

    constructor(preguntas){
        this.preguntas = preguntas;
    }

    obtenerIndex(){
        return this.preguntas[this.index];
    }

    fin(){
        return this.preguntas.length === this.index;
    }

    respuestaCorrecta(respuesta){
        if(this.obtenerIndex().respuesta(respuesta)){
            this.puntaje ++;
        }

        this.index++;
    }

}
