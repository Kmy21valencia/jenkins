const Proyecto = require('../models/proyecto');
const { request, response } = require('express');

const createProyecto = async (req = request, res = response) => {
  try {
    const {
      numero,
      titulo,
      fechaInicio,
      fechaEntrega,
      valor,
      cliente,
      tipoProyecto,
      universidad,
      etapa
    } = req.body;

    const proyecto = new Proyecto({
      numero,
      titulo,
      fechaIniciacion: fechaInicio,
      fechaEntrega,
      valor,
      cliente,
      tipoProyecto,
      universidad,
      etapa
    });

    await proyecto.save();

    return res.status(201).json(proyecto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

const updateProyecto = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const {
      numero,
      titulo,
      fechaInicio,
      fechaEntrega,
      valor,
      cliente,
      tipoProyecto,
      universidad,
      etapa
    } = req.body;

    const proyecto = await Proyecto.findByIdAndUpdate(
      id,
      {
        numero,
        titulo,
        fechaIniciacion: fechaInicio,
        fechaEntrega,
        valor,
        cliente,
        tipoProyecto,
        universidad,
        etapa,
        fechaActualizacion: Date.now()
      },
      { new: true }
    );

    if (!proyecto) {
      return res.status(404).json({ msg: 'Proyecto no encontrado' });
    }

    return res.json(proyecto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

const getProyectos = async (req = request, res = response) => {
  try {
    console.log('Petición...')
    const proyectos = await Proyecto.find({});
    return res.json(proyectos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

module.exports = { createProyecto, getProyectos, updateProyecto };
