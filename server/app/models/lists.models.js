module.exports = (sequelize, Sequelize) => {

    const Lists = sequelize.define("lists", {
      UserToken: {
        type: Sequelize.STRING
      },
      Title: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Lists;
    
  };