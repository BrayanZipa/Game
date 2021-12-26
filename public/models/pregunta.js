export class Pregunta{

    constructor(pregunta, opciones, respuesta){
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    hola() {
        return 1+2;
    }

    opcionCorrecta(res) {
        console.log(res); 
        return res === this.respuesta;
    }
}
