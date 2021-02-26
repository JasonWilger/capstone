const db = require("../models");
const listItems = db.listItems;
const Op = db.Sequelize.Op;

// Create and Save a new listItem
exports.create = (req, res) => {

    // Validate request
    if (!req.body.itemName) {
        res.status(400).send({
        message: "No itemName detected!"
        });
        return;

    } else if (!req.body.storeType) {
        res.status(400).send({
        message: "No storeType detected!"
        });
        return;

    } else if (!req.body.foodGroup) {
        res.status(400).send({
        message: "No food group detected!"
        });
        return;

    } else if (!req.body.quantity) {
        res.status(400).send({
        message: "No quantity detected!"
        });
        return;

    } else if (!req.body.description) {
        res.status(400).send({
        message: "No description detected!"
        });
        return;
    }

    // Create a listItem
    const user = {
        itemName: req.body.itemName,
        storeType: req.body.storeType,
        foodGroup: req.body.foodGroup,
        quantity: req.body.quantity,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save listItem in the database
    listItems.create(user)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the list item."
        });
    });

};

// Retrieve all listItems from the database.
exports.findAll = (req, res) => {

    const itemName = req.body.itemName;
    var condition = itemName ? { itemName: { [Op.iLike]: `%${itemName}%` } } : null;

    listItems.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving list items."
        });
    });
  
};

// Find a single listItem with an id
exports.findOne = (req, res) => {

    const id = req.params.id;

    listItems.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving the list item with id=" + id
        });
      });
  
};

// Update a listItem by the id in the request
exports.update = (req, res) => {

    const id = req.params.id;

    listItems.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "List item was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update list item with id=${id}. Maybe list item was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating list item with id=" + id
        });
      });
  
};

// Delete a listItem with the specified id in the request
exports.delete = (req, res) => {

    const id = req.params.id;

    listItems.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "List item was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete list item with id=${id}. Maybe list item was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete list item with id=" + id
        });
      });
  
};

// Delete all listItems from the database.
exports.deleteAll = (req, res) => {

    listItems.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} list items were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all list items."
          });
        });
  
};

// Find all published listItems
exports.findAllPublished = (req, res) => {

    listItems.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving list items."
      });
    });
  
};