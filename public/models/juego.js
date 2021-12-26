import {Categoria} from "./categoria.js";

export class Juego{

    index = 0;
    puntaje = 0;
    preguntaAcual = 0;

    /**
     * 
     * @param {Categoria[]} categorias 
     */
    constructor(categorias){
        this.categorias = categorias;
    }

    /**
     * 
     * @returns {Pregunta}
     */
    obtenerPregunta(){
        let aletorio = Math.floor(Math.random() * (5-0) + 0);
        this.preguntaAcual = aletorio;
        return this.categorias[this.index].preguntas[aletorio];
    }

    /**
     * 
     * @param {string} res
     */
    respuestaCorrecta(res){       
        if(this.categorias[this.index].preguntas[this.preguntaAcual].opcionCorrecta(res)){
            this.puntaje++;
        }
        this.index++;
    }

    finJuego(){
        return this.categorias.length === this.index;
    }
}