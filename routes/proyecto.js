const { Router } = require('express');
const { createProyecto, getProyectos, updateProyecto } = require('../controllers/proyecto');

const router = Router();


router.post('/', createProyecto);


router.put('/:id', updateProyecto);


router.get('/', getProyectos);

module.exports = router;
