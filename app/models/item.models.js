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
    }
  });

  return Item;
    
};

// sequelize migration:generate --name items_migration
// sequelize migration:generate --name users_migration