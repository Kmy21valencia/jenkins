const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
  numero: {
    type: String,
    unique: true,
    required: [true, 'Número requerido']
  },
  titulo: {
    type: String,
    required: [true, 'Título requerido']
  },
  fechaIniciacion: {
    type: String,
    required: [true, 'Fecha de iniciación requerida']
  },
  fechaEntrega: {
    type: String,
    required: [true, 'Fecha de entrega requerida']
  },
  valor: {
    type: Number,
    required: [true, 'Valor requerido']
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: 'cliente'
  },
  tipoProyecto: {
    type: String,
    ref: 'tipoProyecto',
    required: [true, 'Tipo de proyecto requerido']
  },
  universidad: {
    type: String,
    ref: 'universidad',
    required: [true, 'Universidad requerida']
  },
  etapa: {
    type: Schema.Types.ObjectId,
    ref: 'etapaProyecto'
  }
});

module.exports = model('Proyecto', ProyectoSchema);
