module.exports = (sequelize, Sequelize) => {

  const Item = sequelize.define("items", {
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
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Item;
    
};