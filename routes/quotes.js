const express = require('express');
const router = express.Router();
const quotes = require('../controllers/quotes')

router.get('/quotes', quotes.index );
router.get('/quotes/random', )
router.get('/quotes/:id', );
