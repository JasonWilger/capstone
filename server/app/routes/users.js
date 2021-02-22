// const express = require("express");
// const router = express.Router();

// const models = require("../models");

// router.get('/', async(req, res) => {
//     res.send('Hello users')
// });

module.exports = app => {

const users = require("../controllers/users.controller");

var router = require("express").Router();

// Create a new User
router.post("/", users.create);

// Retrieve all Users
router.get("/", users.findAll);

// Retrieve all published Users
router.get("/published", users.findAllPublished);

// Retrieve a single User with id
router.get("/:id", users.findOne);

// Update a User with id
router.put("/:id", users.update);

// Delete a User with id
router.delete("/:id", users.delete);

// Create a new User
router.delete("/", users.deleteAll);

app.use('/api/users', router);

};

// module.exports = router;

