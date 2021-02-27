module.exports = app => {

const item = require("../controllers/item.controllers");

var router = require("express").Router();

// Create a new list
router.post("/", item.create);

// Retrieve all lists
router.get("/", item.findAll);

// Retrieve all published lists
router.get("/published", item.findAllPublished);

// Retrieve a single list with id
router.get("/:id", item.findOne);

// Update a list with id
router.put("/:id", item.update);

// Delete a list with id
router.delete("/:id", item.delete);

// Create a new list
router.delete("/", item.deleteAll);

app.use('/api/item', router);
    
};