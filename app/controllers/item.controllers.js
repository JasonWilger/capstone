const db = require("../models");
const Item = db.item;
const Op = db.Sequelize.Op;

// Create and Save a new List
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

    // Create a List
    const item = {
        itemName: req.body.itemName,
        storeType: req.body.storeType,
        foodGroup: req.body.foodGroup,
        quantity: req.body.quantity,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save User in the database
    Item.create(item)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the item."
        });
    });

};

// Retrieve all Lists from the database.
exports.findAll = (req, res) => {
  console.log("finding all items");

    const itemName = req.body.itemName;
    var condition = itemName ? { itemName: { [Op.iLike]: `%${itemName}%` } } : null;

    Item.findAll({ where: condition })
    .then(data => {
        res.send(data);
        console.log(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving item."
        });
    });
  
};

// Find a single List with an id
exports.findOne = (req, res) => {

    const id = req.params.id;

    Item.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving item with id=" + id
        });
      });
  
};

// Update a List by the id in the request
exports.update = (req, res) => {

    const id = req.params.id;

    Item.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Item was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update item with id=${id}. Maybe item was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating item with id=" + id
        });
      });
  
};

// Delete a List with the specified id in the request
exports.delete = (req, res) => {

    const id = req.params.id;

    Item.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Item was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete item with id=${id}. Maybe item was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete item with id=" + id
        });
      });
  
};

// Delete all items from the database.
exports.deleteAll = (req, res) => {

  Item.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} item were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all item."
          });
        });
  
};

// Find all published Items
exports.findAllPublished = (req, res) => {

  Item.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving item."
      });
    });
  
};