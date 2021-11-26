'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('produto', [{
      nome: 'CocaCola',
      preco: 10,
      preco_desc: null,
      qt_est: 100,
      cate_id: 1,
    },{
      nome: 'Parecis',
      preco: 5,
      preco_desc: null,
      qt_est: 50,
      cate_id: 1,
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('produto', null, {});
  }
};
