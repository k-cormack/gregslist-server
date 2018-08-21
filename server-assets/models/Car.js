let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        // default: "No description of this fine vehicle available - check back soon!"
    },
    imgUrl: {
        type: String,
        // required: true
    }
})

module.exports = mongoose.model('Car', schema)