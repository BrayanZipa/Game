export class Interfaz{
    constructor(){  }

    mostrarEncabezados(categoria, dificultad, puntaje, pregunta){
        const tituloCategoria = document.getElementById('categoria');
        const tituloDificultad = document.getElementById('dificultad');
        const tituloPuntaje = document.getElementById('puntaje');
        const tituloPregunta = document.getElementById('pregunta');

        tituloCategoria.innerHTML = "Categoría: "+categoria;
        tituloDificultad.innerHTML = "Dificultad: "+dificultad;
        tituloPuntaje.innerHTML = "Puntaje: "+puntaje;
        tituloPregunta.innerHTML = pregunta;
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
        const resultado = `<h1>Puntaje final: ${puntaje}</h1>`;
        const contenedor = document.getElementById('contenedor');
        contenedor.innerHTML = resultado;
    }
}