const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 9000;
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require("./app/models");
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
  });


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to The Pantry!");
});


// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});