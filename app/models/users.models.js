module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("item", {
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
  
    return User;
  };