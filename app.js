const express = require('express');
const cors = require('cors');
const quotes = require('./routes/quotes')
const app = express();


app.use(cors());
app.use ('/quotes', quotes);


module.exports = app;
