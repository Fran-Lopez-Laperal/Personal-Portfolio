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
        
    }
}, {
    timestamps: true
});


const Apply = mongoose.model('Apply', apllySchema)
module.exports = Apply