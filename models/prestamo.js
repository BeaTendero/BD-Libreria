'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prestamo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      prestamo.belongsTo(models.libro, { foreignKey: 'id_libro' })
      prestamo.belongsTo(models.user, { foreignKey: 'id_user' })
    }
    }
  }
  prestamo.init({
    titulo: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    cantidad: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'prestamo',
  });
  return prestamo;
