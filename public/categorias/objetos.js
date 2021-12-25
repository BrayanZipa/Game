const Pregunta = require('../models/pregunta');
const json = require('./listaCategorias')

export const preguntas = json.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))

