module.exports = app => {

const lists = require("../controllers/lists.controllers");

var router = require("express").Router();

// Create a new list
router.post("/", lists.create);

// Retrieve all lists
router.get("/", lists.findAll);

// Retrieve all published lists
router.get("/published", lists.findAllPublished);

// Retrieve a single list with id
router.get("/:id", lists.findOne);

// Update a list with id
router.put("/:id", lists.update);

// Delete a list with id
router.delete("/:id", lists.delete);

// Create a new list
router.delete("/", lists.deleteAll);

app.use('/api/lists', router);
    
};