const express = require("express");
const router = express.Router();


const models = require("../models");

router.get('/', async(req, res) => {
    res.send('User lists')
});




module.exports = router;