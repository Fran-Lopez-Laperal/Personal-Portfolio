const mongoose = require('mongoose')
const Schema = mongoose.Schema

const apllySchema = new Schema({
    offerTitle: {
        type: String,
        required: true
    },

    business: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const Apply = mongoose.model('Apply', apllySchema)
module.exports = Apply