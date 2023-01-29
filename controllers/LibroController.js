//Importo modelo de datos
const db = require("../models");
const libro = db.libro;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var categoryModel  = require('../models').category;  //Add for dependency response

const LibroController = {}; //Create the object controller



//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all libros database
LibroController.getAll = (req, res) => { //funciones propias de sequelize
    
  /// peticiones asincronas
    libro.findAll({})
      .then(data => {
        res.send(data);
      })
      //en caso de que se produzca un error saltará el error 500
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar libros."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET libros by Id from database
LibroController.getById = (req, res) => {
    const id = req.params.id;

    libro.findByPk(id, {include: [{ model:categoryModel}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No se puede encontrar el libro id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al recuperar libro con id=" + id
        });
      });
  };



//-------------------------------------------------------------------------------------
//CREATE un nuevo libro en database
LibroController.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "¡El contenido no puede estar vacío!"
      });
      return;
    }
  
    // Crea libros
    const newLibro = {
      title: req.body.title,
      categoryId: req.body.categoryId
    };
  
    // Guardar libros en la DB
    libro.create(newLibro)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al crear el libro."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE a libros from database
LibroController.update = (req, res) => {
    const id = req.params.id;
  
    libro.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "El libro se actualizó correctamente."
          });
        } else {
          res.send({
            message: `No se puede actualizar el libro con id=${id}. ¡Tal vez no se encontró el libro o req.body está vacío!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al actualizar el libro con id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET libro by Titulo  database 
//FindByTitle
  LibroController.getByTitle = (req, res) => {
    libro.findAll({ where: { title: req.params.title } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar los tutoriales."
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE libro  Id from database
LibroController.delete = (req, res) => {
    const id = req.params.id;
  
    libro.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "¡El libro se eliminó con éxito!"
          });
        } else {
          res.send({
            message: ` No se puede eliminar el libro con id=${id}. ¡Quizás no se encontró la película!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se pudo eliminar el libro con id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE libros from database
//delete all libros
  LibroController.deleteAll = (req, res) => {
    libro.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Los libros se eliminaron con éxito!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al eliminar todos los libros."
        });
      });
  };

module.exports = LibroController;