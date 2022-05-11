const express = require('express');
const router = express.Router();
const apply = require('../controllers/apply.controller')
const createError = require('http-errors')


router.post('/apply', apply.create)




router.use((req, res, next) => next(createError(404, 'Route not found')))


module.exports = router