'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categoria', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      perc_desconto: {
        type: Sequelize.INTEGER,
        default: 0
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categoria');
  }
};