const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    color: {
        type: String,
        required: [true, 'color is needed'],
        unique: true
    },
    value: {
        type: String,
        required: [true, 'value is needed'],
        unique: true
    }
})

const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour;