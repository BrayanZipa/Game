export class Pregunta{

    constructor(pregunta, opciones, respuesta){
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    opcionCorrecta(res) {
        return res === this.respuesta;
    }
}