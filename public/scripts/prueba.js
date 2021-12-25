class Interfaz{
    constructor(){

    }

    mostrarPregunta(texto){
        const tituloPregunta = document.getElementById('pregunta');
        tituloPregunta.innerHTML = texto;
    }
}


const hola = new Interfaz();

hola.mostrarPregunta("Esta es la pregunta");