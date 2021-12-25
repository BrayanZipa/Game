export class Interfaz{
    constructor(){

    }

    mostrarPregunta(texto){
        const tituloPregunta = document.getElementById('pregunta');
        tituloPregunta.innerHTML = texto;
    }
}

