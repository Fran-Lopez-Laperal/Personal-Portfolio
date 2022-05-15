const express = require('express');
const router = express.Router();
const apply = require('../controllers/apply.controller')
const upload = require('../config/multer.config')
const createError = require('http-errors')

router.get('/applys', apply.list);
router.post('/applys',upload.single('avatar'), apply.create);




router.use((req, res, next) => next(createError(404, 'Route not found')))


module.exports = router