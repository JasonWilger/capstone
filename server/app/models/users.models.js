module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("user", {
      UserToken: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return User;
    
  };