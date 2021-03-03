module.exports = (sequelize, Sequelize) => {

    const Users = sequelize.define("user", {
      userToken: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Users;
      
  };