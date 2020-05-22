'use strict'

var express = require('express');
var userController = require('../controllers/user');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/users'});

//rutas para juegos utiles
//router.post('/saveUser', userController.saveUser);
//router.get('/getUsers', userController.getUsers);
//router.get('/User/:id', userController.getUser);
//router.put('/User/:id', userController.update);
//router.delete('/User/:id', userController.delete);
router.post('/upload-image/:id',md_upload, userController.upload);
router.get('/getImage/:image', userController.getImage);

module.exports = router;