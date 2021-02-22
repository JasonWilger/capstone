// const express = require("express");
// const router = express.Router();


// const models = require("../models");

// router.get('/', async(req, res) => {
//     res.send('User lists')
// });

// router.post('/', async(req, res) => {
//     res.send(lists.create)
// });


module.exports = app => {

const lists = require("../controllers/lists.controller");

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



// module.exports = router;