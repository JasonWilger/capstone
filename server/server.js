const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 9000;


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
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

app.get("/lists", (req, res) => {
  res.status(200).send("Welcome to Lists!");
});

app.get("/listItems", (req, res) => {
  res.status(200).send("Welcome to List Items!");
});
//end simple route


// connecting routes
const usersRouter = require("./app/routes/users");
app.use("/users", usersRouter);

const listsRouter = require("./app/routes/lists");
app.use("/lists", listsRouter);

const listItemsRouter = require("./app/routes/listItems");
app.use("/listItems", listItemsRouter);
// end connecting routes


// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});