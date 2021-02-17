module.exports = {

    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "null",
    DB: "the_pantry",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
    
};