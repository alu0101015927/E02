'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

var User = require('../models/user');

var controller = {
    /*
    datosUser: (req,res) => {
        var hola = req.body.hola;

        return res.status(200).send({
            name: "Alejandro",
            email: "aleyoujandro@gmail.com",
            password: "practica1234",
            date: "10/10/10",
        });
    },

    test: (req,res) => {
        return res.status(200).send({
            message: 'Soy la accion test de mi controlador de articulos'
        });
    },

    saveUser: (req,res) => {
        // Recoger parametros por post
        var params = req.body;
        //Validar datos(validator)
        try{
            var validate_name = !validator.isEmpty(params.name);
            var validate_email = !validator.isEmpty(params.email);
            var validate_password = !validator.isEmpty(params.password);
            var validate_date = !validator.isEmpty(params.date);

        }catch(err){
            return res.status(400).send({
                message: 'faltan datos por enviar'
            });
        }
        
        if(validate_name && validate_email && validate_password && validate_date){
            
            //crear el objeto a guardar
            var user = new User();
            
            //asignat valores
            user.name = params.name;
            user.email = params.email;
            user.password = params.password;
            user.date = params.date;

            console.log(user);
            
            //guardar el articulo
            user.save();

            return res.status(200).send({
                user: params
            });
        }else{
            return res.status(400).send({
                message: 'Los datos no son validos'
            });
        }
    },

    getUsers: (req,res) => {
        //Find
        User.find({}).exec((err,users) => {
            if(err){
                return res.status(500).send({
                  status: "error",
                  message: "Error al devolver los usuarios"
                });
            }
            else if(!users){
                return res.status(200).send({
                  status: "error",
                  message: "No hay usuarios a mostrar !!!"
                });
            }
            else{
                return res.status(200).send({
                    status: 'success',
                    users
                });
            }
        })
    },

    getUser: (req,res) => {

        //Recoger el id de la url
        var userId = req.params.id;
        //Comrpobar que existe
        if(!userId || userId == null){
            return res.status(404).send({
                status: 'error',
                message: 'no existe'
            });
        }

        //Buscar el articulo

        User.findById(userId,(err,user) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los datos'
                });
            }
            if(!user){
                return res.status(404).send({
                    status: 'error',
                    message: 'no existe'
                });
            }
            return res.status(200).send({
                status: 'success',
                user
            });

        });
    },

    update: (req,res) => {
        // Recoger el id del articulo por la url
        var userId = req.params.id;
        
        //recoger los datos
        var params = req.body;

        //validar datos
        try{
            var validate_name = !validator.isEmpty(params.name);
            var validate_email = !validator.isEmpty(params.email);
            var validate_password = !validator.isEmpty(params.password);
            var validate_date = !validator.isEmpty(params.date);
        }catch(err){
            return res.status(404).send({
                status: 'error',
                message: 'faltan datos por enviar'
            });
        }

        if(validate_name && validate_email && validate_password && validate_date){
            // find and update
            User.findByIdAndUpdate({_id: userId},params, {new:true},(err,userUpdated) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'error al actualizar'
                    });
                }
                if(!userUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'no existe el objeto'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    user: userUpdated
                });
            });
            //devolver una respuesta
        }else{
            return res.status(404).send({
                status: 'error',
                message: 'validacion no correcta'
            });
        }
    },

    delete: (req,res) => {
        //recoger el id de la url
        var userId = req.params.id;
        //find and delete
        User.findOneAndDelete({_id: userId}, (err,userRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'error al borrar'
                });
            }
            if(!userRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'no existe el objeto'
                });
            }
            return res.status(200).send({
                status: 'success',
                user: userRemoved
            });
        })
    },
    */
    upload: (req,res) => {
        //configurar el modulo connect multiparty router/user.js

        //recoger el fichero de la peticion
        var filename = 'Imagen no subida';

        if(!req.files){
            return res.status(404).send({
                status: 'success',
                message: 'no subido'
            });
        }

        //conseguir el nombre y la extension
        var file_path = req.files.file0.path;
        var file_split = file_path.split('/');

        //nombre del archivo
        var filename = file_split[2];

        //Extension del fichero
        var extension_split = filename.split('\.');
        var file_ext = extension_split[1]; 
        //comprobar la extension, solo imagenes, si no es valido borrar fichero

        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg'){
            //borrar el archivo subido
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'extension de imagen no es valida'
                });
            })
        }else{
            //id de la url
            var user_id = req.params.id;
            //buscar el articulo, asignar nombre imagen y actualizarlo
            User.findOneAndUpdate({ _id: user_id }, { image: filename }, { new:true }, (err,imageUpdated) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'error al guardar la imagen de articulo'
                    });
                }
                if(!imageUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'no se ha actualizado el articulo'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    imageUpdated
                });
            });
        }        
    },

    getImage: (req,res) => {
        var file = req.params.image;
        var path_file = './upload/users/'+ file;

        fs.exists(path_file, (exist) => {
            if(exist){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: 'imagen no existe'
                });
            }
        })
    }

}; 
//end controller

module.exports = controller;