export class Interfaz{
    constructor(){  }

    mostrarPregunta(texto){
        const tituloPregunta = document.getElementById('pregunta');
        tituloPregunta.innerHTML = texto;
    }

    mostrarOpciones(opciones, callback){
        var contenedorRespuestas = document.getElementById('opcionesRespuesta');
        contenedorRespuestas.innerHTML = '';

        for (let i = 0; i<opciones.length; i++) {
            const opcion = document.createElement('button');
            opcion.innerHTML = opciones[i]; 
            opcion.className = 'button';
            
            contenedorRespuestas.append(opcion);
            opcion.addEventListener("click", () => callback(opciones[i]))
        }
    }
    
    mostrarResultadoFinal(puntaje){
        const resultado = `<h1>Puntaje: ${puntaje}</h1>`;
        const contenedor = document.getElementById('contenedor');
        contenedor.innerHTML = resultado;
    }
}