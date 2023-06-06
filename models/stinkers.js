const mongoose = require('mongoose')

const smellSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true,
        default: "urmom"
    },
    smell: {
        type: String,
        required: true,
        default: "normal"
    }
}, {timestamps: true})

const Smell = mongoose.model('smell', smellSchema)
module.exports = Smell