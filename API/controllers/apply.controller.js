const Apply = require('../models/apply.model')
const createError = require('http-errors')

// module.exports.list = (req, res, next) => {
//     Apply.find()
//     .then(apply => res.status(201).json(apply))
//     .catch((error) => next(error))
// }

module.exports.list = (req, res, next) => {
    console.log(req.query)
    
    const search = {}
    const {category} = req.query

    if(category) {
        search.category = category
    }

    Apply.find(search)
    .then((search) => {res.json(search)})
    .catch((error) => next (error))
}

module.exports.create = (req, res, next) =>{
    Apply.create({
        ...req.body,
        avatar: req?.file?.path
    })
    .then(apply => res.json(apply))
    .catch((error) => next(error))
}
