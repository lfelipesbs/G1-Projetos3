const express = require('express');
const router = express.Router();
const notaController = require('../controllers/NotaController');

router.post('/notas', notaController.adicionarNota);
router.get('/ranking', notaController.consultarRanking);

module.exports = router;
