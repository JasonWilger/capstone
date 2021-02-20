module.exports = (sequelize, Sequelize) => {

    const ListItems = sequelize.define("list Items", {
      UserToken: {
        type: Sequelize.STRING
      },
      ItemName: {
        type: Sequelize.STRING
      },
      Type: {
        type: Sequelize.STRING
      },
      Food: {
        type: Sequelize.STRING
      },
      Quantity: {
        type: Sequelize.INTEGER
      },
      Description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return ListItems;
    
  };