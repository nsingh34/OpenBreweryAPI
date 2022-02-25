const express = require('express');
const breweryController = require('./../controllers/breweryController');

const router = express.Router();

router
    .route('/')
    .get(breweryController.getAllBreweries);

module.exports = router;