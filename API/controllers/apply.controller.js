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
    const { category, offerTitle } = req.query

    if (category) {
        search.category = category
    }

    if (offerTitle) {
        search.offerTitle = new RegExp(offerTitle, 'i')
    }

    Apply.find(search)
        .then((search) => { res.json(search) })
        .catch((error) => next(error))
}

module.exports.create = (req, res, next) => {
    Apply.create({
        ...req.body,
        avatar: req?.file?.path
    })
        .then(apply => res.json(apply))
        .catch((error) => next(error))
}


module.exports.detail = (req, res, next) => {
    Apply.findById(req.params.id)
    .then((apply) => {
        if(!apply) {
            next(createError(404, 'Apply not found'))
        } else {
            res.json(apply)
        }
    })
    .catch((error) => next(error))
}

