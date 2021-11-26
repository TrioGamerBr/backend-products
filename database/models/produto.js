'use strict';
const {
  Model
} = require('sequelize');
const categoria = require('./categoria');
module.exports = (sequelize, DataTypes) => {
  class produto extends Model {
    static associate(models) {
    }
  };
  produto.init({
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    preco: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    preco_desc: {
      type: DataTypes.DECIMAL(10,2),
      defaultValue: null
    },
    qt_est:{
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    cate_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      
      references:{
        model: categoria,
        key: 'id'
      }
  }
}, {
    sequelize,
    modelName: 'produto',
  });
  return produto;
};