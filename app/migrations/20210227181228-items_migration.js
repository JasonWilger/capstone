'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('items', {
      userToken: {
        type: Sequelize.STRING
      },
      itemName: {
        type: Sequelize.STRING
      },
      storeType: {
        type: Sequelize.STRING
      },
      foodGroup: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.NUMBER
      },
      price: {
        type: Sequelize.NUMBER
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('items');
  }
};