'use strict'

var express = require('express');
var gameController = require('../controllers/game');

var router = express.Router();

//rutas de prueba
//router.post('/info-game',gameController.datosJuego);
//router.get('/test-de-controllador',gameController.test);

//rutas para juegos utiles
router.post('/saveGame',gameController.saveGame);
router.get('/getGames/:last?',gameController.getGames);
router.put('/Game/:id', gameController.update);
router.delete('/Game/:id', gameController.delete);
router.get('/search/:search', gameController.search);

module.exports = router;