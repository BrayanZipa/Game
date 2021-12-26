import {categorias} from './listaCategorias.js';
import {Pregunta} from '../models/pregunta.js';

export const preguntas = categorias.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))

