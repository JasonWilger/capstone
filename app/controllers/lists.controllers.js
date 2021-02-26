const db = require("../models");
const Lists = db.lists;
const Op = db.Sequelize.Op;

// Create and Save a new List
exports.create = (req, res) => {

    // Validate request
    if (!req.body.title) {
        res.status(400).send({
        message: "No title detected!"
        });
        return;

    } else if (!req.body.description) {
        res.status(400).send({
        message: "No description detected!"
        });
        return;
    };

    // Create a List
    const lists = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save User in the database
    Lists.create(lists)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the list."
        });
    });

};

// Retrieve all Lists from the database.
exports.findAll = (req, res) => {
  console.log("finding all lists");

    const title = req.body.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

    Lists.findAll({ where: condition })
    .then(data => {
        res.send(data);
        console.log(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving lists."
        });
    });
  
};

// Find a single List with an id
exports.findOne = (req, res) => {

    const id = req.params.id;

    Lists.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving list with id=" + id
        });
      });
  
};

// Update a List by the id in the request
exports.update = (req, res) => {

    const id = req.params.id;

    Lists.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "List was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update list with id=${id}. Maybe list was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating list with id=" + id
        });
      });
  
};

// Delete a List with the specified id in the request
exports.delete = (req, res) => {

    const id = req.params.id;

    Lists.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "List was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete list with id=${id}. Maybe list was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete list with id=" + id
        });
      });
  
};

// Delete all Lists from the database.
exports.deleteAll = (req, res) => {

    Lists.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} lists were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all lists."
          });
        });
  
};

// Find all published Lists
exports.findAllPublished = (req, res) => {

    Lists.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving lists."
      });
    });
  
};