const Aplly = require('../models/apply.model')
const createError = require('http-errors')


module.exports.create = (req, res, next) =>{
    Aplly.create(req.body)
    .then(apply => res.json(apply))
    .catch((error) => next(error))
}