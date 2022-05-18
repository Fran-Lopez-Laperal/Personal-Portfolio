const mongoose = require('mongoose')
const Schema = mongoose.Schema

const apllySchema = new Schema({
    offerTitle: {
        type: String,
        required: 'true'
    },

    business: {
        type: String,
        required: 'true'
    },

    typeJob: {
        type: String,
        required: 'true'
    },

    description: {
        type: String,
        required: 'true'
    },

    location: {
        type: String,
        required: 'true'
    },

    avatar: {
        type: String,

    },

    searchWeb: {
        type: String,
        required: 'true'
        //Linkedin, Glassdor, etc
    },

    category: {
        type: String,
        required: 'true'
        //empresas, consultoras, ofertas
    },

}, {
    timestamps: true,

    toJSON: {
        transform: (doc, apply) => {
            apply.id = doc._id
        }
    }
});


const Apply = mongoose.model('Apply', apllySchema)
module.exports = Apply