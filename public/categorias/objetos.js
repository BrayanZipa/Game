import {categorias} from './listaCategorias.js';
import {Pregunta} from '../models/pregunta.js';
import {Categoria} from '../models/categoria.js'

var objetosPregunta = [];
for (let i = 0; i < categorias.length; i++) {    
    objetosPregunta.push(categorias[i].preguntas.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))) 
}

var objetoSCategoria = [];
for (let i = 0; i < categorias.length; i++) {  
    objetoSCategoria.push(new Categoria(categorias[i].categoria, categorias[i].dificultad, objetosPregunta[i]))  
}

export const arrayCategorias = objetoSCategoria;