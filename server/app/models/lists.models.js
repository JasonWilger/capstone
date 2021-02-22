module.exports = (sequelize, Sequelize) => {

    const Lists = sequelize.define("lists", {
      userToken: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Lists;
    
  };