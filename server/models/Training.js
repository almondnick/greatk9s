const mongoose = require('mongoose');

const { Schema } = mongoose;

const trainingSchema = new Schema({
    
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false
    }
});

const Training = mongoose.model('Training', trainingSchema)

module.exports = Training;