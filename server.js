const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 9000; 


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')));

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
  res.status(200).send("Welcome to The Pantry's backend!");
});
app.get("/users", (req, res) => {
  res.status(200).send("Welcome to Users!");
});
app.get("/item", (req, res) => {
  res.status(200).send("Welcome to Items!");
});
// app.get("/listItems", (req, res) => {
//   res.status(200).send("Welcome to List Items!");
// });

// connecting routes
require("./app/routes/users")(app);
require("./app/routes/item")(app);
// require("./app/routes/listItems")(app);
// end connecting routes

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
//end simple route


// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});