const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "A dog must have a name"],
    },
    breed: {
        type: String,
        required: [true, "A dog needs a breed"]
    }

}, { timestamps: true })

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog
