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
    price: {
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

// sequelize migration:generate --name items_migration
// sequelize migration:generate --name users_migration