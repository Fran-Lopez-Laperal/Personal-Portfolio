const express = require('express');
const router = express.Router();
const apply = require('../controllers/apply.controller')
const upload = require('../config/multer.config')
const createError = require('http-errors')

router.get('/applies', apply.list);
router.post('/applies', upload.single('avatar'), apply.create);
router.get('/applies/:id', apply.detail);




router.use((req, res, next) => next(createError(404, 'Route not found')))


module.exports = router