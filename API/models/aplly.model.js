const mongoose = require('mongoose')
const Schema = mongoose.Schema

const apllySchema = new Schema({
    name: {
        type: String,
        required: true
    },

    // descrition: {
    //     type: String,
    //     required: true
    // },

    // typeJob: {
    //     type: String,
    //     required: true
    // },

    // location: {
    //     type: String,
    //     required: true
    // },

    // image: {
    //     type: String,
    //     required: true
    // }
}, {
    timestamps: true
});


const Apply = mongoose.model('Apply', apllySchema)
module.exports = Apply