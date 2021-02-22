// const express = require("express");
// const router = express.Router();


// const models = require("../models");

// router.get('/', async(req, res) => {
//     res.send('User list items')
// });

module.exports = app => {

const listItems = require("../controllers/listItems.controller");

var router = require("express").Router();

// Create a new listItem
router.post("/", listItems.create);

// Retrieve all listItems
router.get("/", listItems.findAll);

// Retrieve all published listItems
router.get("/published", listItems.findAllPublished);

// Retrieve a single listItem with id
router.get("/:id", listItems.findOne);

// Update a listItem with id
router.put("/:id", listItems.update);

// Delete a listItem with id
router.delete("/:id", listItems.delete);

// Create a new listItem
router.delete("/", listItems.deleteAll);

app.use('/api/listItems', router);
    
};

// module.exports = router;