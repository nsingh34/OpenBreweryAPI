const express = require('express');
const app = express();

const breweryRouter = require('./routes/breweryRoutes');

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Serving static files / openDB
app.use(express.static(`${__dirname}/openDB`));

// ROUTE
app.use('/api.openbrewerydb.org/breweries', breweryRouter);


module.exports = app;