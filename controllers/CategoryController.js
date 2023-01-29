//Importo modelo de datos
const db = require("../models");
const category = db.category;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

const CategoryController = {}; //Create the object controller


//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all categories from database
CategoryController.getAll = (req, res) => {
    const type = req.query.type;
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
  
    category.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar las categorías."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET categories by Id from database
CategoryController.getById = (req, res) => {
    const id = req.params.id;
  
    category.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: ` No se puede encontrar la categoría con id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al recuperar categorías con id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//CREATE a new category in database
CategoryController.create = (req, res) => {
    // Validate request
    if (!req.body.type) {
      res.status(400).send({
        message: "El contenido no puede estar vacío"
      });
      return;
    }
  
    // Create a Category
    const newCategory = {
      type: req.body.type,
      age: req.body.age
    };
  
    // Save Category in the database
    category.create(newCategory)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al crear la nueva categoría."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE a category from database
CategoryController.update = (req, res) => {
    const id = req.params.id;
  
    category.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "La categoría se actualizó con éxito."
          });
        } else {
          res.send({
            message: `No se puede actualizar la categoría con id=${id}. ¡Tal vez no se encontró la película o req.body está vacío!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al actualizar la categoría con id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET categories by Type from database  
//FindByType
CategoryController.getByType = (req, res) => {
    category.findAll({ where: { type: req.params.type } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar las categorías."
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE a category by Id from database
CategoryController.delete = (req, res) => {
    const id = req.params.id;
  
    category.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "¡La categoría se eliminó con éxito!"
          });
        } else {
          res.send({
            message: `No se puede eliminar la categoría con id=${id}. ¡Quizás no se encontró el libro!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se pudo eliminar la categoría con id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE all categories from database
//delete all categories   
CategoryController.deleteAll = (req, res) => {
    category.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} 
        ¡Las categorías se eliminaron con éxito! ` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al eliminar todas las categorías."
        });
      });
  };

module.exports = CategoryController;